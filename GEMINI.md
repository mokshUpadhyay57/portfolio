# Project Overview

This is a personal portfolio website for Moksh Upadhyay, a software developer. The website showcases his projects, skills, and provides contact information.

**Key Technologies:**

*   **Frontend:** React, Vite, React Router
*   **Styling:** CSS

**Architecture:**

The application is a single-page application (SPA) built with React. It uses Vite for the build tooling and development server. The application is structured into several components and pages:

*   **`App.jsx`:** The main component that handles routing and the overall layout.
*   **`HomePage.jsx`:** The landing page, which includes a hero section, about, skills, featured projects, and contact sections.
*   **`ProjectsPage.jsx`:** A page that displays a grid of all projects.
*   **`components/`:** Contains reusable components like the navigation bar, project cards, and sections.
*   **`data/`:** Contains the data for the projects and services.

# Building and Running

**1. Install Dependencies:**

```bash
npm install
```

**2. Run the Development Server:**

```bash
npm run dev
```

This will start the development server, and you can view the application at `http://localhost:5173` (the port may vary).

**3. Build for Production:**

```bash
npm run build
```

This will create a `dist` folder with the optimized production build of the application.

**4. Lint the Code:**

```bash
npm run lint
```

This will run ESLint to check for any linting errors in the code.

# Development Conventions

*   **Component-Based Architecture:** The application follows a component-based architecture, with components organized into folders based on their function (layouts, sections, toggles).
*   **Styling:** Each component has its own CSS file for styling.
*   **Data Separation:** Project and service data is kept in separate JavaScript files in the `src/components/data` directory.
*   **Routing:** The application uses `react-router-dom` for client-side routing.
