import os
import numpy as np
from PIL import Image

W, H = 2560, 1440
SEED = int(os.environ.get("SEED", "21"))


def gauss_blur(a, sigma):
    r = max(1, int(sigma * 3))
    k = np.exp(-0.5 * (np.arange(-r, r + 1) / sigma) ** 2)
    k /= k.sum()
    a = np.apply_along_axis(lambda m: np.convolve(m, k, mode="same"), 0, a)
    a = np.apply_along_axis(lambda m: np.convolve(m, k, mode="same"), 1, a)
    return a


xs = np.linspace(0, 5.2, W, dtype=np.float64)
ys = np.linspace(0, 2.925, H, dtype=np.float64)
X, Y = np.meshgrid(xs, ys)


def hash2(ix, iy):
    n = np.sin(ix * 127.1 + iy * 311.7 + SEED * 0.917) * 43758.5453123
    return n - np.floor(n)


def vnoise(X, Y):
    ix = np.floor(X)
    iy = np.floor(Y)
    fx = X - ix
    fy = Y - iy
    ux = fx * fx * (3.0 - 2.0 * fx)
    uy = fy * fy * (3.0 - 2.0 * fy)
    a = hash2(ix, iy)
    b = hash2(ix + 1.0, iy)
    c = hash2(ix, iy + 1.0)
    d = hash2(ix + 1.0, iy + 1.0)
    return a + (b - a) * ux + (c - a) * uy + (a - b - c + d) * ux * uy


def fbm(X, Y, octaves=3, lac=2.05, gain=0.5):
    amp = 0.55
    freq = 1.0
    total = np.zeros_like(X)
    norm = 0.0
    for _ in range(octaves):
        total += amp * vnoise(X * freq, Y * freq)
        norm += amp
        amp *= gain
        freq *= lac
    return total / norm


# ---- dominio ruotato e fortemente anisotropo: pieghe lunghe che scorrono
th = 0.35
ca, sa = np.cos(th), np.sin(th)
U = ca * X + sa * Y
V = -sa * X + ca * Y

qx = fbm(U * 0.35, V * 0.7, octaves=2)
qy = fbm(U * 0.35 + 3.1, V * 0.7 + 7.7, octaves=2)
wx = fbm(U * 0.28 + 1.3 * qx, V * 0.85 + 1.3 * qy, octaves=3)
wy = fbm(U * 0.28 + 1.3 * qx + 4.7, V * 0.85 + 1.3 * qy + 1.9, octaves=3)

h = fbm(U * 0.30 + 1.5 * wx, V * 1.15 + 1.5 * wy, octaves=3)
h = gauss_blur(h, sigma=5.0)
h = (h - h.min()) / (h.max() - h.min())

# ---- normali
eps = 2.2 / W * 5.2
dhdx = (np.roll(h, -1, axis=1) - np.roll(h, 1, axis=1)) / (2 * eps)
dhdy = (np.roll(h, -1, axis=0) - np.roll(h, 1, axis=0)) / (2 * eps)
bump = 1.9
nx = -dhdx * bump
ny = -dhdy * bump
nz = np.ones_like(nx)
invlen = 1.0 / np.sqrt(nx * nx + ny * ny + nz * nz)
nx *= invlen
ny *= invlen
nz *= invlen

# ---- luce direzionale calda (arancione) + ambiente freddo (blu)
L = np.array([-0.55, -0.30, 0.72])
L = L / np.linalg.norm(L)
ndl = np.clip(nx * L[0] + ny * L[1] + nz * L[2], 0.0, 1.0)
ndl_back = np.clip(-(nx * L[0] + ny * L[1]) + nz * L[2] * 0.2, 0.0, 1.0)

# riflesso speculare dalla luce calda
rx = -2.0 * nz * nx
ry = -2.0 * nz * ny
rz = 2.0 * nz * nz - 1.0
rl = np.clip(rx * L[0] + ry * L[1] + rz * L[2], 0.0, 1.0)
spec_warm = rl ** 24.0
spec_soft = rl ** 6.0

# environment freddo riflesso (blu di studio)
band = np.exp(-((ry - 0.55) ** 2) / 0.10) + 0.6 * np.exp(-((ry + 0.35) ** 2) / 0.06)
env_b = band * 0.30
env_r = band * 0.10
env_g = band * 0.28

# base: ombra blu profonda
shadow = np.array([0.004, 0.010, 0.045])
mid = np.array([0.020, 0.045, 0.135])      # blu acciaio
warm = np.array([0.95, 0.26, 0.020])       # arancione rame
hot = np.array([1.25, 0.62, 0.18])         # arancione acceso
cool_hi = np.array([0.30, 0.60, 1.15])     # azzurro ghiaccio

d = ndl ** 1.5

# base blu navy profonda con leggero gradiente verticale
grad = (np.arange(H) / H)[:, None]
base = np.stack([
    0.006 + 0.004 * grad,
    0.012 + 0.006 * grad,
    0.040 + 0.030 * (1 - grad),
], axis=-1)

# sheen blu acciaio
sheen = np.clip(d, 0, 1)[..., None] * np.array([0.030, 0.060, 0.16])

# nastro arancione: solo dove la superficie "cattura" la luce calda
ribbon = np.exp(-((d - 0.88) ** 2) / 0.010)[..., None] * np.array([1.05, 0.30, 0.015])
core = np.exp(-((d - 0.965) ** 2) / 0.0025)[..., None] * np.array([1.30, 0.60, 0.13])

img = base + sheen + ribbon + core
img += spec_warm[..., None] * np.array([1.1, 0.50, 0.10]) * 0.8
img += spec_soft[..., None] * np.array([0.50, 0.18, 0.02]) * 0.30
img += ndl_back[..., None] * np.array([0.25, 0.50, 1.05]) * 0.16
img += np.stack([env_r, env_g, env_b], axis=-1) * (0.20 + 0.80 * (1 - nz))[..., None]

fres = (1.0 - np.clip(nz, 0.0, 1.0)) ** 3.0
img += fres[..., None] * np.array([0.14, 0.30, 0.75]) * 0.55

img = np.clip(img, 0.0, None)
mean = img.mean(axis=-1, keepdims=True)
img = np.clip(mean + (img - mean) * 1.30, 0.0, 1.0)

vx = (np.arange(W) / W - 0.5) * 2
vy = (np.arange(H) / H - 0.5) * 2
Vig = 1.0 - 0.22 * (vx[None, :] ** 2 + vy[:, None] ** 2)
img *= Vig[..., None]

out = (np.clip(img, 0, 1) ** (1 / 2.2) * 255).astype(np.uint8)
Image.fromarray(out).save(os.environ.get("OUT", "/tmp/fluid.jpg"), quality=92)
print("saved")
