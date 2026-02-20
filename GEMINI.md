# Project Overview

*   **Project Name:** portfolio-frontend
*   **Description:** A personal portfolio website for Moksh Upadhyay, showcasing his diverse range of projects including backend systems, mobile applications (Flutter/Kotlin), and full-stack web applications.
*   **Key Technologies:**
    *   **Frontend:** React (v19.2.0), Vite (v7.3.1), React Router (v7.13.0)
    *   **Styling:** Vanilla CSS with CSS Variables for theming (Dark/Light mode), `color-mix` for dynamic shadows and highlights.
    *   **State Management:** React `useState` and `useEffect` for basic state; `ThemeContext` for global theme persistence.
    *   **Data:** Static data files for projects, services, and contact details (located in `src/components/data/`).
    *   **Other:** EmailJS for contact forms.
*   **Architecture:**
    *   Single Page Application (SPA) built with React and Vite.
    *   Component-based architecture:
        *   `src/App.jsx`: Main router and layout container.
        *   `src/pages/`: Main page components (`HomePage`, `ProjectsPage`, `ServicePage`, `ContactPage`, `AboutPage`, `NotFound`).
        *   `src/components/`: Reusable components (`layouts`, `sections`, `toggles`, `data`).
        *   `src/context/`: Context providers for global state (`ThemeContext`, `ThemeProvider`).
        *   `src/hooks/`: Custom React hooks (`useSEO`, `useScrollReveal`).
*   **Entry Points:**
    *   `index.html`: Main HTML file.
    *   `src/main.jsx`: React entry point, sets up `StrictMode`, `BrowserRouter`, `ThemeProvider`, and renders `App`.
    *   `src/App.jsx`: Main application component, defines routing using `react-router-dom`.

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

**6. Run Tests:**

```bash
npm test
```
Runs tests using Vitest. Configuration includes `jsdom` environment and `src/setupTests.js`.

**7. Test Coverage:**

```bash
npm run coverage
```
Runs tests and generates a coverage report using `@vitest/coverage-v8`.

# Development Conventions

*   **Theming:** Supports dark and light modes using the `data-theme` attribute on the root `<html>` element and CSS variables defined in `src/index.css`. Theme state managed globally via `ThemeContext`.
*   **Component Structure:** Components typically have their own JSX file and an accompanying CSS file (either in `styles/` sub-directories for sections or alongside the JSX for pages).
*   **Data-Driven:** Update project, service, or contact details by modifying respective files in `src/components/data/`.
*   **Routing:** Uses `react-router-dom` (v7) for client-side navigation.
*   **Styling:** Prefers Vanilla CSS for flexibility and performance. Modern CSS features like `backdrop-filter` and `color-mix` are used.
*   **Dynamic Titles:** Page components use the `useSEO` hook to update browser tab titles and metadata.
*   **Testing:** Uses Vitest for unit testing.
*   **Linting:** Uses ESLint for code quality and adherence to best practices.

