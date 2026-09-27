const projects = [
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
    title: "E-commerce / Online Bookstore",
    category: ["Web", "Full Stack", "Systems"],
    description: "A sophisticated monolithic retail engine demonstrating deep state management and optimized database strategies for high-fidelity operations.",
    tech: ["Django", "JavaScript ES6", "PostgreSQL", "CSS3"],
    github: "https://github.com/mokshUpadhyay57/BizarreEcom",
    featured: true,
    hidden: false,
    problem: "Need for a performant, custom-built e-commerce platform with complex session and inventory management.",
    solution: "A monolithic web application leveraging Django and PostgreSQL for reliable relational data management and transactional integrity.",
    whyBuilt: "Designed as a technical masterclass in monolithic efficiency, focusing on end-to-end data persistence and relational integrity.",
    features: [
      "Persistent session-based state management for complex cart lifecycles",
      "Optimized PostgreSQL schema for high-volume product catalogs",
      "Dynamic AJAX-driven UI for a seamless, non-blocking user experience",
      "Hardened checkout orchestration with row-level database locking"
    ],
    architecture: "Django MVT architecture backed by a PostgreSQL database, with vanilla JavaScript for client-side interactivity.",
    myContribution: "Architected the database schema, developed the backend logic, and implemented the dynamic frontend interface.",
    outcomes: [],
    howBuilt: "Leveraged Django's robust MVT pattern for server-side logic and integrated ES6 JavaScript for dynamic client-side interactivity.",
    problems: [
      "Persistent state management; architected custom middleware for robust session handling.",
      "Relational query bottlenecks; optimized data retrieval via advanced prefetching.",
      "Concurrency control; implemented row-level locking to prevent inventory overselling."
    ],
    results: "Successfully built a high-performance e-commerce engine with reliable transactional consistency.",
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
    github: "https://github.com/yourusername/esports",
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
    description: "An enterprise-grade batch processing engine designed to automate complex payroll lifecycles with zero manual intervention and 100% calculation precision.",
    tech: ["Spring Batch", "Quartz Scheduler", "MySQL", "PDFBox"],
    github: "",
    featured: false,
    hidden: false,
    problem: "Manual payroll processing for large workforces leads to operational friction and calculation errors.",
    solution: "An automated Spring Batch application orchestrating payroll calculations, PDF payslip generation, and data persistence.",
    whyBuilt: "Built to eliminate operational friction and manual calculation errors in large-scale financial processing for enterprise workforces.",
    features: [
      "Resilient chunk-oriented data processing framework",
      "Automated PDF generation for individual payslip dispatch",
      "Cron-based scheduling for hands-free monthly execution",
      "Comprehensive error logging and skip-logic for corrupt records"
    ],
    architecture: "Java-based batch processor utilizing Spring Batch, scheduled with Quartz, and connected to a MySQL relational database.",
    myContribution: "Configured the batch jobs, wrote the calculation logic, and implemented dynamic PDF generation.",
    outcomes: [],
    howBuilt: "Architected around the Spring Batch framework. Implemented Quartz for robust job scheduling and Apache PDFBox for dynamic document generation.",
    problems: [
      "Memory exhaustion during large datasets; optimized memory footprint using chunking.",
      "Transient I/O failures; engineered a robust skip-and-retry logic framework.",
      "Regulatory variability; developed a modular calculation engine for rapid configuration."
    ],
    results: "Delivered a highly robust, scheduled automation tool capable of processing extensive datasets securely and accurately.",
    images: []
  }
];

export default projects;
