const projects = [
  {
    id: 6,
    title: "Travel Booking API Integrations",
    category: ["Backend", "Case Study", "API Integration"],
    description: "Integrated global hotel inventory suppliers (HotelBeds, Paximum) and DST Searcher into a travel-booking platform so real-time booking runs through one workflow.",
    tech: ["Java 8", "Spring MVC", "Hibernate", "REST APIs", "MySQL", "PostgreSQL"],
    github: "",
    featured: true,
    flow: ["Booking platform", "REST APIs", ["HotelBeds", "Paximum", "DST Searcher"]],
    hidden: false,
    problem: "A travel-booking platform needed hotel inventory from several external suppliers, each with its own API, and its booking APIs were slow under high traffic.",
    solution: "Integrated HotelBeds, Paximum and DST Searcher behind the platform's REST APIs and optimized the high-traffic booking endpoints.",
    whyBuilt: "Client work. Details kept general to respect confidentiality.",
    features: [
      "Hotel inventory from HotelBeds and Paximum available in one booking flow",
      "DST Searcher integrated into search",
      "Real-time availability and booking through REST APIs"
    ],
    architecture: "Java backend using Spring MVC and Hibernate, with REST APIs connecting the booking platform to HotelBeds, Paximum and DST Searcher.",
    myContribution: "Built the supplier integrations and optimized the high-traffic booking APIs, alongside resolving production defects.",
    outcomes: ["Booking API latency reduced by 25%"],
    howBuilt: "Java 8 with Spring MVC and Hibernate on MySQL and PostgreSQL.",
    problems: [
      "Slow, high-traffic booking APIs; optimized them for a 25% latency reduction.",
      "Several suppliers with different APIs; integrated them into a single real-time booking workflow."
    ],
    results: "Real-time booking workflows streamlined across multiple suppliers, and booking API latency cut by 25%.",
    images: []
  },
  {
    id: 1,
    title: "Lockify App",
    category: ["Mobile App", "FinTech", "Full Stack"],
    description: "A secure digital asset marketplace enabling independent creators to monetize 'locked' content via integrated payment gateways and instant cloud delivery.",
    tech: ["Flutter", "Firebase Cloud", "Cashfree FinTech", "GCP"],
    github: "https://github.com/mokshupadhyay57/LockifyFrontend",
    featured: true,
    hidden: false,
    problem: "Creators needed a way to monetize content without intermediary barriers or high fees.",
    solution: "A direct-to-consumer digital asset marketplace enabling instant access to 'locked' content after successful payment.",
    whyBuilt: "Strategic solution for the creator economy, removing intermediary barriers and providing a direct-to-consumer monetization infrastructure.",
    features: [
      "Instant content locking and management suite for creators",
      "Seamless INR payment processing via Cashfree integration",
      "Real-time asset delivery upon successful transaction verification",
      "Cross-platform mobile experience with high-fidelity UI"
    ],
    architecture: "Flutter frontend with a serverless Firebase backend, integrating Cashfree for payments.",
    myContribution: "Full-stack development, including mobile UI implementation, backend orchestration, and payment integration.",
    outcomes: [],
    howBuilt: "Developed with Flutter for consistent cross-platform UX. Leveraged Firebase for serverless backend orchestration and integrated localized FinTech APIs.",
    problems: [
      "Global state synchronization; implemented Riverpod for sophisticated state management.",
      "Unauthorized asset access; enforced signed URL strategies and Cloud Security Rules.",
      "Payment verification lag; engineered a robust webhook listener with idempotent logic."
    ],
    results: "Delivered a fully functional cross-platform application capable of secure transactions and real-time content delivery.",
    images: []
  },
  {
    id: 2,
    title: "BIZARRE Online Store",
    category: ["Web", "Full Stack", "E-commerce"],
    description: "A custom e-commerce store with session-based carts and Paytm payments, built end to end.",
    tech: ["Django", "Paytm", "SQLite", "JavaScript ES6"],
    github: "https://github.com/mokshUpadhyay57/BizarreEcom",
    featured: true,
    hidden: false,
    problem: "Need for a performant, custom-built e-commerce platform with complex session and inventory management.",
    solution: "A monolithic Django web application with a relational data model and Paytm checkout for online payments.",
    whyBuilt: "Designed to cover the full e-commerce cycle in one codebase: catalog, cart, checkout and payment.",
    features: [
      "Persistent session-based state management for complex cart lifecycles",
      "Relational schema for product catalog, carts and orders",
      "Dynamic AJAX-driven UI for a seamless, non-blocking user experience",
      "Paytm payment gateway integration at checkout"
    ],
    architecture: "Django MVT architecture backed by SQLite, with vanilla JavaScript for client-side interactivity and Paytm for payments.",
    myContribution: "Architected the database schema, developed the backend logic, integrated Paytm, and implemented the dynamic frontend interface.",
    outcomes: [],
    howBuilt: "Leveraged Django's robust MVT pattern for server-side logic and integrated ES6 JavaScript for dynamic client-side interactivity.",
    problems: [
      "Persistent state management; architected custom middleware for robust session handling.",
      "Relational query bottlenecks; optimized data retrieval via advanced prefetching."
    ],
    results: "A working end-to-end online store: browse, cart, checkout and Paytm payment.",
    images: []
  },
  {
    id: 3,
    title: "Pet Care & Aid Ecosystem",
    category: ["Mobile App", "HealthTech", "Full Stack"],
    description: "A comprehensive health-tech platform for pet owners, centralizing medical history, emergency services, and supply chain procurement.",
    tech: ["Flutter", "Firebase Cloud", "Supply Chain APIs"],
    github: "https://github.com/mokshUpadhyay57/PetCareApp",
    featured: true,
    hidden: false,
    problem: "Pet owners struggle with fragmented services for medical history, emergency care, and supplies.",
    solution: "A unified mobile platform consolidating health records, service discovery, and supply chain procurement.",
    whyBuilt: "Designed to solve the fragmented pet care market by consolidating health records and service procurement into a single, high-performance interface.",
    features: [
      "Centralized electronic health records and vaccination tracking",
      "Integrated supply chain procurement for emergency pet aid",
      "Real-time service discovery for local veterinary clinics",
      "Automated medication adherence and health check alerts"
    ],
    architecture: "Cross-platform Flutter application backed by Firebase for real-time NoSQL data synchronization.",
    myContribution: "Lead mobile application development, database schema design, and integration of external APIs.",
    outcomes: [],
    howBuilt: "Engineered with Flutter for cross-platform consistency. Utilized Firebase for scalable data management and integrated localized payment gateways.",
    problems: [
      "Alert precision; developed a robust local notification engine synced with cloud triggers.",
      "Product catalog performance; implemented a flattened NoSQL architecture for O(1) query speeds.",
      "Transaction integrity; engineered custom retry logic for sensitive procurement."
    ],
    results: "Launched a cohesive ecosystem that effectively centralizes critical pet care services.",
    images: []
  },
  {
    id: 4,
    title: "Esports Tournament App",
    category: ["Mobile App", "Real-time Systems"],
    description: "A specialized orchestration platform for esports logistics, providing real-time tournament management and automated scoring telemetry.",
    tech: ["Kotlin", "Android SDK", "Firebase Realtime DB", "MVVM"],
    github: "",
    featured: false,
    hidden: false,
    problem: "Manual tournament management and bracket generation is time-consuming and error-prone.",
    solution: "A native Android application automating tournament orchestration, bracket generation, and real-time score updates.",
    whyBuilt: "Engineered to professionalize competitive gaming management by automating complex registration and bracket lifecycles.",
    features: [
      "Dynamic bracket generation with recursive tournament logic",
      "Real-time live scoring telemetry and match status propagation",
      "Automated participant registration and player verification",
      "High-priority push notifications for match readiness alerts"
    ],
    architecture: "Native Android app using Kotlin and MVVM pattern, synchronized via Firebase Realtime Database.",
    myContribution: "Developed the core tournament logic, implemented the Android UI, and configured real-time data listeners.",
    outcomes: [],
    howBuilt: "Built natively in Kotlin for peak performance. Leveraged Firebase Realtime Database for instantaneous data synchronization across all clients.",
    problems: [
      "Complex bracket logic; engineered a flexible algorithm for variable participant counts.",
      "Network latency; optimized data listeners to minimize battery and bandwidth usage.",
      "Notification reliability; integrated high-priority FCM messaging for alerts."
    ],
    results: "Created a reliable, low-latency platform for seamless esports event management.",
    images: []
  },
  {
    id: 5,
    title: "Employee Payroll Batch Processor",
    category: ["Backend", "Automation"],
    description: "A batch processing engine to automate monthly payroll calculation and PDF payslip generation without manual intervention.",
    tech: ["Spring Batch", "Quartz Scheduler", "MySQL", "PDFBox"],
    github: "",
    featured: false,
    hidden: true,
    inProgress: true,
    problem: "Manual payroll processing for large workforces leads to operational friction and calculation errors.",
    solution: "An automated Spring Batch application orchestrating payroll calculations, PDF payslip generation, and data persistence.",
    whyBuilt: "Built to remove manual calculation errors from payroll and to practise production-style batch processing.",
    features: [
      "Chunk-oriented data processing",
      "Automated PDF generation for individual payslips",
      "Cron-based scheduling for hands-free monthly execution",
      "Error logging and skip-logic for corrupt records"
    ],
    architecture: "Java-based batch processor utilizing Spring Batch, scheduled with Quartz, and connected to a MySQL relational database.",
    myContribution: "Designing the batch jobs, calculation logic, and PDF generation.",
    outcomes: [],
    howBuilt: "Architected around the Spring Batch framework, with Quartz for job scheduling and Apache PDFBox for document generation.",
    problems: [
      "Large datasets; chunked processing keeps memory use low.",
      "Transient I/O failures; skip-and-retry logic for failed records.",
      "Changing payroll rules; a modular calculation layer so rules can be updated quickly."
    ],
    results: "In progress.",
    images: []
  },
  {
    id: 7,
    title: "Booking Management App (Spring MVC + Hibernate)",
    category: ["Backend", "Full Stack"],
    description: "A client-style booking and CRUD application built with Spring MVC, Hibernate and MySQL.",
    tech: ["Java", "Spring MVC", "Hibernate", "JSP", "MySQL"],
    github: "",
    featured: false,
    hidden: true,
    inProgress: true,
    problem: "Small businesses need a simple way to take bookings and manage them without spreadsheets.",
    solution: "A web application where customers create bookings and staff view, edit and cancel them.",
    whyBuilt: "A reference project showing the Java backend work I take on for clients, end to end.",
    features: [
      "Create, view, update and cancel bookings",
      "Hibernate-mapped MySQL schema",
      "Validation and clear error handling",
      "REST endpoints alongside JSP views"
    ],
    architecture: "Spring MVC controllers, service layer and Hibernate DAOs over MySQL, with JSP views.",
    myContribution: "Designing and building the whole application.",
    outcomes: [],
    howBuilt: "Java with Spring MVC, Hibernate and JSP.",
    problems: [
      "Double bookings; check availability inside a transaction.",
      "Messy input; validate on the server and return clear errors."
    ],
    results: "In progress.",
    images: []
  },
  {
    id: 8,
    title: "TextWizard (Text Utility)",
    category: ["Web", "Frontend", "Utility"],
    description: "A fast, privacy-first text utility that transforms and cleans text entirely in the browser.",
    tech: ["React", "JavaScript ES6", "RegEx"],
    github: "https://github.com/mokshUpadhyay57/TextWizard",
    website: "https://txtwiz.netlify.app",
    featured: true,
    hidden: false,
    problem: "Online text tools often send your text to a server, and many are slow or cluttered for quick everyday tasks.",
    solution: "A client-side React tool that processes text instantly in the browser, so nothing leaves the user's device.",
    features: [
      "Instant client-side text transformations",
      "Regex-based cleanup and formatting",
      "Works offline as a Progressive Web App",
      "Responsive, tool-first interface"
    ],
    architecture: "A React single-page app with all processing done client-side using JavaScript and RegEx, deployed on Netlify.",
    myContribution: "Designed and built the whole tool.",
    outcomes: [],
    problems: [
      "Large inputs freezing the UI; debounced processing and optimized rendering.",
      "Privacy; kept every operation 100% client-side."
    ],
    results: "A live, free tool that handles everyday text tasks instantly without sending data anywhere.",
    images: []
  },
  {
    id: 9,
    title: "XCom E-commerce Platform",
    category: ["Web", "Backend", "Python Training"],
    description: "A Django e-commerce platform built during a Python training program, covering product catalog, accounts and ordering.",
    tech: ["Django", "JavaScript", "SQL"],
    github: "https://github.com/mokshUpadhyay57/Xcom-Django-Summer-Training-Project",
    featured: false,
    hidden: false,
    problem: "The platform needed a structured product catalog with reliable data handling and secure user accounts.",
    solution: "A Django web application with a hierarchical product model, clean data handling and hardened authentication.",
    features: [
      "Hierarchical product and category data model",
      "Data cleaning and migration scripts",
      "Responsive UI with vanilla JavaScript",
      "Secure authentication and session handling"
    ],
    architecture: "Django MVT application on a relational SQL database, with vanilla JavaScript on the front end.",
    myContribution: "Worked on the data models, migration scripts, authentication and front-end behaviour.",
    outcomes: [],
    problems: [
      "Messy legacy data; wrote sanitization and validation scripts before migrating.",
      "Front-end responsiveness; tuned asset loading and scripts."
    ],
    results: "A working catalog-to-checkout e-commerce platform delivered during the Python training.",
    images: []
  },
  {
    id: 10,
    title: "Online Bookstore Backend",
    category: ["Backend", "Spring Boot"],
    description: "A Spring Boot backend for a bookstore with secure login, role-based access and order processing.",
    tech: ["Spring Boot", "Spring Security", "JPA/Hibernate", "MySQL"],
    featured: false,
    hidden: true,
    problem: "A multi-user bookstore needs secure accounts, controlled access by role, and orders that stay consistent under concurrent use.",
    solution: "A layered Spring Boot REST backend with JWT authentication, role-based access control and transactional order handling.",
    features: [
      "Stateless JWT authentication",
      "Role-based access control for customers and admins",
      "Catalog search and inventory management",
      "Transactional order processing"
    ],
    architecture: "Layered Spring Boot application (controller, service, repository) using Spring Security and Spring Data JPA over MySQL.",
    myContribution: "Designed and built the backend.",
    outcomes: [],
    problems: [
      "Concurrent orders; used database-level locking to protect stock.",
      "Credential safety; BCrypt password hashing and secure token handling.",
      "Slow searches; indexed and tuned catalog queries."
    ],
    results: "A secure, role-aware backend ready to power a bookstore front end.",
    images: []
  }
];

export default projects;
