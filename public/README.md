# public/ — static assets

This folder is served from the site root. Anything dropped here is available at `/<filename>` at runtime.

## Where to put files

- Hero background image → `public/hero-background.jpg` (referenced as `url('/hero-background.jpg')`)
- Ambient background music → `public/audio/ambient.mp3` (auto-loaded by the ambient player in the navbar; loops forever, silent by default, users start/mute it with the speaker button). Currently holds "CIM220 Website music_Sample 1".
- Click / hover SFX (later) → `public/audio/click.mp3`, `public/audio/hover.mp3`

## Why you don't see it in GitHub yet

The `public/` folder didn't exist because there weren't any static files to serve. It's just a plain folder at the repo root — create files inside it and they'll sync to GitHub next push. It sits alongside `src/`, `package.json`, etc.
