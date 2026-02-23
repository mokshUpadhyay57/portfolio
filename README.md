# Moksh Upadhyay | Software Development Engineer

[![React](https://img.shields.io/badge/React-19.0-blue?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.0-purple?logo=vite)](https://vitejs.dev/)
[![Netlify](https://img.shields.io/badge/Deployed_on-Netlify-00C7B7?logo=netlify)](https://mokshcodes.netlify.app)
[![SEO](https://img.shields.io/badge/SEO-Optimized-success)](https://mokshcodes.netlify.app)

A high-performance, professional portfolio showcasing backend expertise, mobile applications, and full-stack web projects. Built with a focus on engineering standards, performance, and modern UI/UX.

🔗 **Live Portfolio:** [mokshcodes.netlify.app](https://mokshcodes.netlify.app)

---

## 🚀 Key Features

*   **Professional Branding:** Career timeline highlighting 1.7+ years of experience at **Via (Ebix Technologies)** and CDAC.
*   **Performance First:** Optimized assets (4.7MB image reduced to **95KB**) and 1.2s build times with Vite.
*   **Security & Protection:** Integrated **Honeypot protection** to prevent automated bot spam in the contact form.
*   **Theme-Aware Design:** Full dark/light mode support with a **dynamic theme-aware favicon** (SVG media queries).
*   **Custom UI/UX:** Branded custom scrollbars, fluid typography using `clamp()`, and interactive terminal animations.
*   **SEO Optimized:** Dynamic metadata management via custom `useSEO` hooks for indexability across all routes.

## 🛠️ Tech Stack

- **Frontend:** React 19 (Hooks, Context API)
- **Tooling:** Vite 7, ESLint
- **Styling:** Vanilla CSS (Modern CSS Variables + `color-mix`)
- **Icons:** Lucide React
- **Infrastructure:** Netlify (Client-side routing with `_redirects`)
- **Testing:** Vitest + JSDOM

---

## 🏗️ Architecture

The project follows a component-driven architecture for scalability:

```text
src/
├── components/
│   ├── data/        # Centralized project & timeline data
│   ├── layouts/     # Persistent global components (Navbar, Footer)
│   ├── sections/    # Reusable page building blocks
│   └── toggles/     # UI state controllers (ThemeToggle)
├── hooks/           # Custom business logic (useSEO)
├── pages/           # High-level route components
└── context/         # Global state (ThemeContext)
```

---

## 🛠️ Development

### Setup
```bash
# Install dependencies
npm install

# Run development server (HMR enabled)
npm run dev

# Build for production
npm run build

# Run linting
npm run lint

# Run tests
npm run test
```

---

## 🔮 Roadmap (v6.0)

- **Serverless Backend:** Migration of contact logic to **Netlify Functions** for enhanced API key security.
- **Enhanced Verification:** Integration of **hCaptcha** and professional transactional email via **Resend.com**.
- **Case Studies:** Deep-dive technical documentation for major backend projects.

---

### 👨‍💻 Maintained by
**Moksh Upadhyay**  
*Java Backend Engineer | Full Stack Developer*  
[GitHub](https://github.com/mokshUpadhyay57) | [LinkedIn](https://www.linkedin.com/in/mokshupadhyay57)
