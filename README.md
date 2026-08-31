# Portfolio site

Plain HTML/CSS/JS, no build step. Five files:

- `index.html` — the story: hero panel, one panel per experience/project, closing CTA
- `contact.html` — separate contact page
- `styles.css` — all styling / design tokens
- `script.js` — horizontal panning behavior (wheel → pan conversion, dots, arrows, keyboard nav)
- `README.md` — this file

## Before you push

1. Replace every `[Your Name]`, `[Add tech stack]`, and other bracketed placeholder text.
2. Swap in real media where you see a dashed `media-slot` box (logo, video, photos) — replace
   the `<div class="media-slot">...</div>` with an `<img>` or `<video>` tag pointing at your
   file, e.g.:
   ```html
   <img src="assets/deviantart-logo.png" alt="DeviantArt logo" class="media-slot">
   ```
   You'll probably want an `assets/` folder for images/video once you start adding them.
3. Fill in the Athlekin and MERN project panels once you send me their details.
4. Update the contact links in `contact.html` (email, LinkedIn, GitHub) and wire the form to
   Formspree or Netlify Forms if you want it to actually send messages — GitHub Pages can't
   run a backend, so the form is currently a placeholder.

## How the panning works

- Desktop: scrolling (even a normal vertical mouse wheel) pans horizontally between full-screen
  panels, snapping into place. Arrow keys and the on-screen arrows also work. The dot rail at
  the bottom shows position and is clickable.
- Mobile (< 860px): panels stack vertically instead, since horizontal panning doesn't translate
  well to touch scrolling on small screens.

## Deploying to GitHub Pages

1. Push this folder to a GitHub repo.
2. In the repo, go to **Settings → Pages**.
3. Under "Build and deployment," set Source to "Deploy from a branch," pick your default branch
   and `/ (root)`, then save.
4. Your site will be live at `https://yourusername.github.io/repo-name/` within a minute or two.

If you want it at the root of `yourusername.github.io` (no repo-name path), name the repo
exactly `yourusername.github.io`.
