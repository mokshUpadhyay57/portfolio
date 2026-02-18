# Project Overview

This is a personal portfolio website for Moksh Upadhyay, a Java Backend Engineer and Full Stack Developer. The website showcases his diverse range of projects including backend systems, mobile applications (Flutter/Kotlin), and full-stack web applications.

**Key Technologies:**

*   **Frontend:** React (v19), Vite, React Router (v7)
*   **Styling:** Vanilla CSS with CSS Variables for theming (Dark/Light mode)
*   **State Management:** React `useState` and `useEffect` for basic state and theme persistence.
*   **Data:** Static data files for projects, services, and contact details.

**Architecture:**

The application is a Single Page Application (SPA) built with React and Vite. It features a component-based architecture organized as follows:

*   **`src/App.jsx`:** The entry point for the React application, handling routing and global theme state.
*   **`src/pages/`:** Contains the main page components:
    *   `HomePage.jsx`: Landing page with hero, intro, and featured sections.
    *   `ProjectsPage.jsx`: Detailed view of all projects.
    *   `ServicePage.jsx`: Information about services offered.
    *   `ContactPage.jsx`: Contact form and details.
*   **`src/components/`:** Reusable components divided into:
    *   `layouts/`: Global layout elements like `Navbar`.
    *   `sections/`: Specific sections used within pages (e.g., `About`, `Skills`, `FeaturedProjects`).
    *   `toggles/`: UI controls like `ThemeToggle`.
    *   `data/`: JavaScript files serving as the "database" for the portfolio's content.
*   **`src/context/`:** Context providers for global state (e.g., `ThemeContext.jsx`).

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

*   **Theming:** The application supports dark and light modes using the `data-theme` attribute on the root element and CSS variables defined in `src/index.css`.
*   **Component Structure:** Each component typically has its own JSX file and an accompanying CSS file (often located in a `styles/` sub-directory or alongside the JSX).
*   **Data-Driven:** To update projects or services, modify the respective files in `src/components/data/`.
*   **Routing:** Uses `react-router-dom` for client-side navigation.
*   **Styling:** Prefers Vanilla CSS for maximum flexibility and performance.
