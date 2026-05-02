# Kallepalli Durga Bhavani — Personal Portfolio

A fully responsive, animated personal portfolio website built from scratch with React, Vite, Tailwind CSS, and Framer Motion.

**Author:** Kallepalli Durga Bhavani  
**Live URL:** _Add your Vercel/Netlify URL here after deployment_

---

## Tech Stack

| Category      | Technology                        |
|---------------|-----------------------------------|
| Framework     | React 18 + Vite                   |
| Styling       | Tailwind CSS v3                   |
| Animations    | Framer Motion, react-scroll-parallax |
| Fonts         | Cormorant Garamond + Inter (Google Fonts) |
| Deployment    | Vercel / Netlify                  |

---

## Features

- ✅ Fully responsive — mobile, tablet, desktop (375 / 768 / 1280px)
- ✅ Multi-page SPA (Home, Skills, Projects, Certifications, Contact)
- ✅ Parallax scrolling effect on Hero section
- ✅ 3+ on-scroll Framer Motion animations
- ✅ Animated skill bars with category filtering
- ✅ Contact form with validation
- ✅ `prefers-reduced-motion` accessibility support
- ✅ SEO meta tags in `index.html`
- ✅ Lighthouse ready (Performance 80+, Accessibility 90+)

---

## Local Setup

### Prerequisites
- Node.js ≥ 18
- npm ≥ 9

### Install & Run

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview  # preview the production build locally
```

---

## Customisation

All personal content is centralised in **`src/data/index.js`**:

- `personal` — name, bio, links, stats
- `skills` — skill list with proficiency percentages
- `projects` — project cards with GitHub/demo links
- `certifications` — credential cards

Edit that one file and everything updates automatically.

---

## Deployment

### Vercel (Recommended)
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import repo
3. Framework: **Vite** — Vercel auto-detects it
4. Click **Deploy**

### Netlify
1. Push to GitHub
2. Go to [netlify.com](https://netlify.com) → Add new site → Import from Git
3. Build command: `npm run build`  
4. Publish directory: `dist`
5. Click **Deploy**

---

## License

MIT — free to use and adapt for personal portfolio purposes.
"# Portfolio" 
