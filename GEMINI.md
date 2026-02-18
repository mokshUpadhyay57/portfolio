# Project Overview

This is a personal portfolio website for **Moksh Upadhyay**, a Java Backend Engineer and Full Stack Developer. The website showcases his diverse range of projects including backend systems, mobile applications (Flutter/Kotlin), and full-stack web applications.

**Key Technologies:**

*   **Frontend:** React (v19), Vite (v7), React Router (v7)
*   **Styling:** Vanilla CSS with CSS Variables for theming (Dark/Light mode). Uses `color-mix` for dynamic shadows and highlights.
*   **State Management:** React `useState` and `useEffect` for basic state; `ThemeContext` for global theme persistence.
*   **Data:** Static data files for projects, services, and contact details (located in `src/components/data/`).

**Architecture:**

The application is a Single Page Application (SPA) built with React and Vite. It features a component-based architecture organized as follows:

*   **`src/App.jsx`:** The main router and layout container.
*   **`src/pages/`:** Contains the main page components:
    *   `HomePage.jsx`: Landing page with hero (typing animation), intro, and featured sections.
    *   `ProjectsPage.jsx`: Detailed view of all projects with stats.
    *   `ServicePage.jsx`: Information about services offered with glassmorphism cards.
    *   `ContactPage.jsx`: Contact form with success state and dynamic social links.
*   **`src/components/`:** Reusable components divided into:
    *   `layouts/`: Global layout elements like `Navbar`.
    *   `sections/`: Specific sections used within pages (e.g., `About`, `Skills`, `FeaturedProjects`).
    *   `toggles/`: UI controls like `ThemeToggle`.
    *   `data/`: JavaScript files serving as the "database" for the portfolio's content.
*   **`src/context/`:** Context providers for global state (e.g., `ThemeContext.jsx` for dark/light mode).
*   **`src/hooks/`:** Custom React hooks (e.g., `useTitle.js` for dynamic document titles).

# Building and Running

**1. Install Dependencies:**

```bash
npm install
```

**2. Run the Development Server:**

```bash
npm run dev
```
Starts the Vite development server with Hot Module Replacement (HMR).

**3. Build for Production:**

```bash
npm run build
```
Generates a `dist` folder with optimized production assets.

**4. Lint the Code:**

```bash
npm run lint
```
Runs ESLint to ensure code quality and adherence to React best practices.

**5. Preview Production Build:**

```bash
npm run preview
```
Locally previews the production build.

# Development Conventions

*   **Theming:** The application supports dark and light modes using the `data-theme` attribute on the root element (`<html>`) and CSS variables defined in `src/index.css`. Theme state is managed globally via `ThemeContext`.
*   **Component Structure:** Each component typically has its own JSX file and an accompanying CSS file (located in `styles/` sub-directories for sections or alongside the JSX for pages).
*   **Data-Driven:** To update projects, services, or contact details, modify the respective files in `src/components/data/`.
*   **Routing:** Uses `react-router-dom` (v7) for client-side navigation.
*   **Styling:** Prefers Vanilla CSS for maximum flexibility and performance. Modern CSS features like `backdrop-filter` and `color-mix` are used for sophisticated UI effects.
*   **Dynamic Titles:** Every page component should use the `useTitle` hook to update the browser tab title according to the current view.
