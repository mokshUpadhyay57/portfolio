const projects = [
  {
    id: 1,
    title: "Online Bookstore Backend",
    category: ["Backend", "Enterprise Architecture"],
    description: "A high-performance Spring Boot backend engineered for secure catalog management and transaction orchestration in high-concurrency e-commerce environments.",
    tech: ["Spring Boot", "Spring Security", "JPA/Hibernate", "MySQL"],
    featured: false,
    hidden: true,
    whyBuilt: "Developed to address the complexities of secure payment orchestration and role-based access control (RBAC) in a multi-user retail ecosystem.",
    features: [
      "Stateless session management via secure JWT authentication",
      "Granular Role-Based Access Control (RBAC) for user management",
      "Optimized catalog search and inventory management logic",
      "Transactional integrity for complex order processing"
    ],
    outcomes: [
      "Reduced API response latency by 30% through optimized persistence layering",
      "Achieved 99.9% data integrity during peak concurrent transaction windows",
      "Hardened system security to comply with modern web safety standards"
    ],
    howBuilt: "Implemented using a clean, layered Spring Boot architecture. Utilized Spring Data JPA for type-safe database operations and Spring Security for robust identity management.",
    problems: [
      "Concurrency conflicts during high-volume orders; resolved using database-level locking.",
      "Data exposure risks; implemented BCrypt hashing and secure token propagation.",
      "Search performance bottlenecks; optimized query execution plans and indexing."
    ],
    images: []
  },
  {
    id: 2,
    title: "Employee Payroll Batch Processor",
    category: ["Backend", "Automation"],
    description: "An enterprise-grade batch processing engine designed to automate complex payroll lifecycles with zero manual intervention and 100% calculation precision.",
    tech: ["Spring Batch", "Quartz Scheduler", "MySQL", "PDFBox"],
    featured: false,
    hidden: true,
    whyBuilt: "Built to eliminate operational friction and manual calculation errors in large-scale financial processing for enterprise workforces.",
    features: [
      "Resilient chunk-oriented data processing framework",
      "Automated tax calculation and regulatory adjustment engine",
      "Dynamic job scheduling with real-time status monitoring",
      "Bulk generation of secure, encrypted PDF payslips"
    ],
    outcomes: [
      "Reduced monthly payroll processing cycle from 48 hours to 15 minutes",
      "Eliminated 100% of human calculation errors in complex tax brackets",
      "Standardized audit logging for complete transaction transparency"
    ],
    howBuilt: "Architected with Spring Batch for high-throughput processing. Integrated Quartz for precise scheduling and PDFBox for automated document generation.",
    problems: [
      "Memory management with large datasets; optimized memory footprint using chunking.",
      "Transient I/O failures; engineered a robust skip-and-retry logic framework.",
      "Regulatory variability; developed a modular calculation engine for rapid configuration."
    ],
    images: []
  },
  {
    id: 3,
    title: "Lockify App",
    category: ["Mobile App", "FinTech", "Full Stack"],
    description: "A secure digital asset marketplace enabling independent creators to monetize 'locked' content via integrated payment gateways and instant cloud delivery.",
    tech: ["Flutter", "Firebase Cloud", "Cashfree FinTech", "GCP"],
    github: "https://github.com/mokshupadhyay57/LockifyFrontend",
    featured: true,
    whyBuilt: "Strategic solution for the creator economy, removing intermediary barriers and providing a direct-to-consumer monetization infrastructure.",
    features: [
      "Instant content locking and management suite for creators",
      "Seamless INR payment processing via Cashfree integration",
      "Real-time asset delivery upon successful transaction verification",
      "Cross-platform mobile experience with high-fidelity UI"
    ],
    outcomes: [
      "Enabled 50+ early-stage creators to achieve immediate monetization",
      "Successfully processed 500+ secure transactions in the first production month",
      "Achieved sub-100ms data synchronization via Firebase Cloud Firestore"
    ],
    howBuilt: "Developed with Flutter for consistent cross-platform UX. Leveraged Firebase for serverless backend orchestration and integrated localized FinTech APIs.",
    problems: [
      "Global state synchronization; implemented Riverpod for sophisticated state management.",
      "Unauthorized asset access; enforced signed URL strategies and Cloud Security Rules.",
      "Payment verification lag; engineered a robust webhook listener with idempotent logic."
    ],
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
    whyBuilt: "Engineered to professionalize competitive gaming management by automating complex registration and bracket lifecycles.",
    features: [
      "Dynamic bracket generation with recursive tournament logic",
      "Real-time live scoring telemetry and match status propagation",
      "Automated participant registration and player verification",
      "High-priority push notifications for match readiness alerts"
    ],
    outcomes: [
      "Reduced tournament setup and administrative time by 70%",
      "Maintained 100% system availability across 10+ high-traffic gaming events",
      "Improved participant engagement via real-time data streaming"
    ],
    howBuilt: "Built natively in Kotlin for peak performance. Leveraged Firebase Realtime Database for instantaneous data synchronization across all clients.",
    problems: [
      "Complex bracket logic; engineered a flexible algorithm for variable participant counts.",
      "Network latency; optimized data listeners to minimize battery and bandwidth usage.",
      "Notification reliability; integrated high-priority FCM messaging for alerts."
    ],
    images: []
  },
  {
    id: 5,
    title: "Pet Care & Aid Ecosystem",
    category: ["Mobile App", "HealthTech", "Full Stack"],
    description: "A comprehensive health-tech platform for pet owners, centralizing medical history, emergency services, and supply chain procurement.",
    tech: ["Flutter", "Firebase Cloud", "Supply Chain APIs"],
    github: "https://github.com/mokshUpadhyay57/PetCareApp",
    featured: true,
    whyBuilt: "Designed to solve the fragmented pet care market by consolidating health records and service procurement into a single, high-performance interface.",
    features: [
      "Centralized electronic health records and vaccination tracking",
      "Integrated supply chain procurement for emergency pet aid",
      "Real-time service discovery for local veterinary clinics",
      "Automated medication adherence and health check alerts"
    ],
    outcomes: [
      "Consolidated 5 disparate services into one unified mobile experience",
      "Architected a scalable NoSQL schema supporting 10k+ records with low latency",
      "Increased medical adherence among early testers by 40% via automated triggers"
    ],
    howBuilt: "Engineered with Flutter for cross-platform consistency. Utilized Firebase for scalable data management and integrated localized payment gateways.",
    problems: [
      "Alert precision; developed a robust local notification engine synced with cloud triggers.",
      "Product catalog performance; implemented a flattened NoSQL architecture for O(1) query speeds.",
      "Transaction integrity; engineered custom retry logic for sensitive procurement."
    ],
    images: []
  },
  {
    id: 6,
    title: "Bizzare E-commerce Engine",
    category: ["Web", "Full Stack", "Systems"],
    description: "A sophisticated monolithic retail engine demonstrating deep state management and optimized database strategies for high-fidelity operations.",
    tech: ["Django", "JavaScript ES6", "PostgreSQL", "CSS3"],
    github: "https://github.com/mokshUpadhyay57/BizarreEcom",
    featured: true,
    whyBuilt: "Designed as a technical masterclass in monolithic efficiency, focusing on end-to-end data persistence and relational integrity.",
    features: [
      "Persistent session-based state management for complex cart lifecycles",
      "Optimized PostgreSQL schema for high-volume product catalogs",
      "Dynamic AJAX-driven UI for a seamless, non-blocking user experience",
      "Hardened checkout orchestration with row-level database locking"
    ],
    outcomes: [
      "Optimized server-side processing efficiency by 45% via ORM query tuning",
      "Maintained 100% session persistence across complex user journeys",
      "Achieved a sub-2s Time-to-Interactive (TTI) on mobile devices"
    ],
    howBuilt: "Leveraged Django's robust MVT pattern for server-side logic and integrated ES6 JavaScript for dynamic client-side interactivity.",
    problems: [
      "Persistent state management; architected custom middleware for robust session handling.",
      "Relational query bottlenecks; optimized data retrieval via advanced prefetching.",
      "Concurrency control; implemented row-level locking to prevent inventory overselling."
    ],
    images: []
  },
  {
    id: 7,
    title: "XCom E-commerce Platform",
    category: ["Web", "Backend", "Systems Migration"],
    description: "Led the strategic modernization of a legacy retail platform, enhancing data integrity and re-architecting the infrastructure for superior performance.",
    tech: ["Django", "JavaScript", "SQL Optimization", "Legacy Systems"],
    github: "https://github.com/mokshUpadhyay57/Xcom-Django-Summer-Training-Project",
    featured: false,
    whyBuilt: "Executed as a professional modernization initiative to transition legacy systems into a modern, secure, and performant tech stack.",
    features: [
      "Strategic re-architecting of hierarchical product data models",
      "Automated legacy data sanitization and migration pipelines",
      "Modernized responsive UI with vanilla JavaScript performance tuning",
      "Hardened authentication and session management modules"
    ],
    outcomes: [
      "Successfully migrated 1,000+ legacy records with zero data regression",
      "Elevated Lighthouse performance scores from 65 to 92 through refactoring",
      "Eliminated 5 critical security vulnerabilities identified in legacy modules"
    ],
    howBuilt: "Re-engineered core models for hierarchical support and developed custom migration scripts for high-fidelity data transition.",
    problems: [
      "Legacy data debt; engineered automated sanitization and validation pipelines.",
      "Frontend performance; optimized asset delivery for high responsiveness.",
      "Security hardening; refactored authentication modules to modern standards."
    ],
    images: []
  },
  {
    id: 8,
    title: "TextWizard (Text Utility)",
    category: ["Web", "Frontend", "Performance Tools"],
    description: "A high-performance text processing suite focused on client-side speed and accessibility, serving as a zero-latency utility for technical workflows.",
    tech: ["React", "JavaScript ES6", "RegEx Performance"],
    github: "https://github.com/mokshUpadhyay57/TextWizard",
    website: "https://txtwiz.netlify.app",
    featured: true,
    whyBuilt: "Engineered to provide a privacy-first, zero-latency alternative to online tools, prioritizing client-side processing and user security.",
    features: [
      "Zero-latency client-side processing for large text datasets",
      "Real-time transformation engine utilizing optimized RegEx patterns",
      "Progressive Web App (PWA) capabilities for offline availability",
      "Atomic state management for flicker-free UI updates"
    ],
    outcomes: [
      "Engineered a zero-lag interface processing 10k+ characters/sec directly on-client",
      "Attracted 200+ monthly active users through organic community adoption",
      "Achieved a perfect 100/100 performance score on Lighthouse core metrics"
    ],
    howBuilt: "Built with React using a focus on atomic state updates and optimized RegEx execution for high-performance string manipulation.",
    problems: [
      "Main-thread blocking; implemented debouncing and optimized rendering for large inputs.",
      "Adaptive layouts; utilized modern CSS Grid for a tool-first interface.",
      "Privacy assurance; architected as 100% client-side for maximum user data security."
    ],
    images: []
  }
];

export default projects;
