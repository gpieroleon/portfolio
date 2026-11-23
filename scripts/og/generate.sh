#!/bin/sh
# Genera public/og-{en,es,it}.jpg a partir de og.html.
# Uso: CHROME="/ruta/a/chrome" sh scripts/og/generate.sh   (requiere ffmpeg)
set -e
cd "$(dirname "$0")"
for l in en es it; do
  "$CHROME" --headless=new --hide-scrollbars --window-size=1200,630 \
    --virtual-time-budget=5000 --screenshot="/tmp/og-$l.png" \
    "file://$PWD/og.html?lang=$l" >/dev/null 2>&1
  ffmpeg -y -loglevel error -i "/tmp/og-$l.png" -q:v 3 "../../public/og-$l.jpg"
  rm "/tmp/og-$l.png"
done
