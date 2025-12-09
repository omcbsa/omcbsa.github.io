# Paper — Supplementary Materials (minimal)

A minimal, polished single-page site for an academic paper's supplementary multimedia:
- Main video preview area
- Editable abstract / description block
- Grid for physical experiment videos
- Grid for simulated experiment videos

How to use
1. Add these files (index.html, styles.css, script.js, README.md) to the root of your omcbsa.github.io repository.
2. Open the site (GitHub Pages or locally). Select files to preview them in the browser; all previews are client-side only.
3. When you're ready to publish videos permanently, push the video files into an /assets directory in the repository and update any video elements to point at the permanent URLs:
   - Public URL format (after GitHub Pages): https://omcbsa.github.io/assets/your-video.mp4

Notes
- Keep videos reasonably short to keep the page responsive. Large files are better hosted via CDN, S3, or Git LFS.
- The editable abstract is in-browser only; copy it elsewhere to save.
- This repo is intentionally simple — no server-side upload scripts or token prompts.

Done — deploy
Place these files on the `main` branch of omcbsa/omcbsa.github.io, and the site will be viewable at:
https://omcbsa.github.io/
