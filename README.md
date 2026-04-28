# Nitish Devadiga — Portfolio

> Personal portfolio site for **Nitish Devadiga**, Full-Stack Software Developer based in Bengaluru, India.

🌐 **Live:** [nitishdevadiga.github.io](https://nitishdevadiga.github.io/)

---

## ✨ Features

- 🎨 Dark, modern aesthetic with custom typography (Fraunces + Inter + JetBrains Mono)
- ⚡ Smooth scroll-reveal animations using `IntersectionObserver`
- ⌨️ Animated typewriter effect on the hero subtitle
- 📍 Active-section highlighting in the navigation
- 🧩 Modular SCSS architecture with BEM-style class naming
- 📦 Vanilla ES6 modules — no frameworks, no build bloat
- ♿ Respects `prefers-reduced-motion`
- 📱 Fully responsive

---

## 🛠️ Tech Stack

| Layer        | Tools                                |
| ------------ | ------------------------------------ |
| Markup       | Semantic HTML5                       |
| Styling      | SCSS (Sass) with modular partials    |
| Scripting    | Vanilla JavaScript (ES Modules)      |
| Icons        | [Devicon](https://devicon.dev/) CDN  |
| Fonts        | Google Fonts                         |

---

## 📁 Project Structure

```
portfolio/
├── index.html              # Main HTML entry point
├── styles/
│   ├── main.scss           # SCSS entry — imports all partials
│   ├── main.css            # Compiled CSS (committed for GitHub Pages)
│   ├── _variables.scss     # Design tokens (colors, fonts, breakpoints)
│   ├── _base.scss          # Resets, layout helpers, buttons
│   ├── _navigation.scss    # Top nav
│   ├── _hero.scss          # Landing hero
│   ├── _about.scss         # About section
│   ├── _skills.scss        # Skills grid + spoken languages
│   ├── _experience.scss    # Work experience card
│   ├── _contact.scss       # Contact + footer + back-to-top
│   ├── _animations.scss    # Keyframes & reveal classes
│   └── _responsive.scss    # Mobile / tablet overrides
├── scripts/
│   ├── main.js             # Entry — initializes all modules
│   ├── nav.js              # Scroll-based nav state + active link
│   ├── reveal.js           # IntersectionObserver scroll reveal
│   ├── typewriter.js       # Hero subtitle typewriter effect
│   └── ui.js               # Year, back-to-top button
├── package.json
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v16 or newer (only needed if you want to recompile SCSS)

### Local development

```bash
# 1. Clone the repo
git clone https://github.com/nitishdevadiga/nitishdevadiga.github.io.git
cd nitishdevadiga.github.io

# 2. Install dev dependencies (just Sass)
npm install

# 3a. Watch SCSS changes & rebuild on save
npm run watch:css

# 3b. Or do a one-off build (for production / GitHub Pages)
npm run build:css

# 4. Serve locally — pick any of these
npx serve .
# or
python3 -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000) (or whatever port your server prints).

> **Heads up:** because `index.html` uses `<script type="module">`, you need to serve the files over HTTP. Opening the file directly via `file://` won't work due to module CORS rules.

---

## 📜 Available Scripts

| Command              | What it does                                            |
| -------------------- | ------------------------------------------------------- |
| `npm run build:css`  | Compiles `main.scss` → `main.css` (compressed)          |
| `npm run watch:css`  | Watches SCSS files and rebuilds on save (expanded mode) |
| `npm run serve`      | Serves the site locally via `npx serve`                 |
| `npm run dev`        | Watches SCSS *and* runs the local server                |

---

## 🚢 Deploying to GitHub Pages

Since `main.css` is committed to the repo, deployment is dead simple:

1. Push to the `main` branch (or whichever branch GitHub Pages points to).
2. In **Settings → Pages**, select the source branch and root folder.
3. Done — your site is live at `https://<username>.github.io/`.

If you'd rather keep the compiled CSS *out* of source control, add `styles/main.css` to `.gitignore` and use a GitHub Actions workflow to compile and deploy on push.

---

## 📬 Contact

- 📧 [devadignitish@gmail.com](mailto:devadignitish@gmail.com)
- 💼 [LinkedIn](https://www.linkedin.com/in/nitish-devadiga-870828214)
- 📱 +91-8095402486

---

## 📄 License

[MIT](LICENSE) — feel free to fork and customize for your own portfolio.
