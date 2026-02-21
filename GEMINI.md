# Moksh Upadhyay - Portfolio Frontend (v5.0)

A high-performance, responsive personal portfolio built for Moksh Upadhyay, a Software Development Engineer. The site showcases backend expertise, mobile applications, and full-stack web projects through a modern, interactive user experience.

## 🚀 Key Technologies

*   **Frontend Framework:** React (v19.2.0)
*   **Build Tool:** Vite (v7.3.1)
*   **Routing:** React Router (v7.13.0)
*   **Styling:** 
    *   Vanilla CSS with CSS Variables for global theming.
    *   Dynamic shadows and overlays using `color-mix`.
    *   Interactive animations (Scroll Reveal, Hover Effects).
*   **Icons:** Lucide React
*   **Form Handling:** EmailJS for Contact Form integration.
*   **Testing:** Vitest with JSDOM.

## 🏗️ Architecture

*   **Single Page Application (SPA):** Client-side routing with optimized page transitions.
*   **Component-Driven Design:**
    *   `src/pages/`: Dedicated components for main routes (`HomePage`, `ProjectsPage`, `ServicePage`, `ContactPage`, `AboutPage`).
    *   `src/components/sections/`: Reusable content blocks (`Timeline`, `FeaturedProjects`, `Skills`, `Recommendations`).
    *   `src/components/layouts/`: Global elements (`Navbar`, `BackToTop`).
    *   `src/components/data/`: Centralized static data for easy content updates.
*   **Global State:**
    *   `ThemeContext`: Manages Dark/Light mode persistence via local storage.
*   **Custom Hooks:**
    *   `useSEO`: Dynamic document title and meta tag management.
    *   `useScrollReveal`: Intersection Observer based animations for section entries.

## 🛠️ Development Workflow

### Setup & Commands
*   **Install:** `npm install`
*   **Development:** `npm run dev` (Vite HMR enabled)
*   **Build:** `npm run build` (Optimized production assets in `dist/`)
*   **Linting:** `npm run lint` (ESLint with React best practices)
*   **Testing:** `npm run test` (Vitest) | `npm run coverage` (v8 coverage)

### Content Management
Update the following files to modify site content:
*   `src/components/data/projectsData.js` - Projects and case studies.
*   `src/components/data/timelineData.js` - Professional career milestones.
*   `src/components/data/contactDetails.js` - Social links and platform URLs.
*   `src/components/data/serviceData.js` - Freelance service offerings.

## ✨ Version 5.0 Enhancements

*   **Career Timeline Integration:** Implemented an interactive experience visualization component on the Home Page.
*   **Professional Branding:** Integrated actual career history (Via/Ebix, CDAC), profile imagery, and the 1.7+ years experience resume.
*   **UI Standardization:** 
    *   Fluid typography using CSS `clamp()`.
    *   Unified button system (`.btn-primary`, `.btn-outline`).
    *   Global accent color implementation (`.accent`) across all headers.
*   **Enhanced SEO:** Improved metadata management and dynamic titles for better indexability.
*   **Refined Mobile UX:** Optimized grid layouts and navigation for mobile devices.

## 🔮 Future Roadmap (v6.0)

### 🛡️ Security & Robustness
*   **Backend Migration (Serverless):** Move email sending logic to **Netlify Functions** to keep API keys hidden from the client-side.
*   **Rate Limiting:** Implement IP-based rate limiting in serverless functions to prevent bot spam.
*   **Bot Protection:** Integrate **hCaptcha** or **reCAPTCHA** for verified form submissions.

### 📧 Professional Communication
*   **Service Transition:** Switch from EmailJS to **Resend.com** for professional-grade transactional email.
*   **Rich HTML Templates:** Implement beautiful, responsive email templates using **React Email**.
*   **Custom Domain Branding:** Configure emails to be sent from a branded custom domain (e.g., `inquiry@moksh.codes`).

### ⚙️ Automation & CRM
*   **Lead Management:** Integrate with **Notion API** to automatically log all inquiries into a project management dashboard.
*   **Instant Notifications:** Set up Discord/Slack webhooks for real-time inquiry alerts.
*   **Booking Integration:** Add automated meeting scheduling via **Calendly**.

---
*Maintained by Moksh Upadhyay*
