const projects = [
  {
    id: 1,
    title: "Online Bookstore Backend",
    category: ["Backend", "REST API"],
    description: "Spring-based backend system for managing books, users, cart and orders with role-based authentication.",
    tech: ["Spring Boot", "Spring Data JPA", "Spring Security (JWT)", "MySQL"],
    featured: false,
    hidden: true,
    whyBuilt: "Developed to master the complexities of role-based access control (RBAC) and secure payment processing in a multi-user environment.",
    howBuilt: "Built using Spring Boot with a layered architecture. Implemented JWT for stateless authentication and used Spring Data JPA for efficient database interaction with MySQL.",
    problems: [
      "Handling concurrent order requests; implemented database transactions and optimistic locking.",
      "Securing sensitive user data; used BCrypt for password hashing and JWT for secure API access.",
      "Optimizing search queries for a large catalog; added indexing to frequently searched columns."
    ],
    images: []
  },
  {
    id: 2,
    title: "Employee Payroll Batch Processor",
    category: ["Backend", "Automation"],
    description: "Batch processing application to calculate salaries and generate automated payslips.",
    tech: ["Spring Boot", "Spring Batch", "Scheduler", "MySQL"],
    featured: false,
    hidden: true,
    whyBuilt: "Built to automate the repetitive and error-prone task of monthly payroll calculation for large organizations.",
    howBuilt: "Leveraged Spring Batch for high-volume data processing. Integrated a scheduler to trigger monthly runs and used PDFBox for automated payslip generation.",
    problems: [
      "Processing thousands of records without memory leaks; used chunk-based processing in Spring Batch.",
      "Handling partial failures during execution; implemented skip and retry logic for individual records.",
      "Ensuring accurate tax calculations across different regions; used a modular calculation engine."
    ],
    images: []
  },
  {
    id: 3,
    title: "Lockify App",
    category: ["Mobile App", "Web", "Full Stack"],
    description: "Flutter app for Android and iOS enabling users to create and sell locked content with admin panel and integrated payments.",
    tech: ["Flutter", "Firebase", "Cashfree", "Android", "iOS"],
    github: "https://github.com/mokshupadhyay57/LockifyFrontend",
    featured: true,
    whyBuilt: "Lockify was built to solve the challenge of content monetization for independent creators. Many platforms take high commissions or have complex entry barriers. This app provides a direct way to sell 'locked' content to a dedicated audience.",
    howBuilt: "Developed using Flutter for a cross-platform mobile experience. Firebase handles real-time database needs, authentication, and secure cloud storage. Integrated Cashfree for seamless INR payments and a custom admin dashboard for content moderation.",
    problems: [
      "Real-time state management across multiple screens was complex; solved using Provider/Riverpod.",
      "Securing content from unauthorized access; implemented Firebase security rules and signed URLs.",
      "Handling payment webhooks reliably; set up a robust server-side verification flow."
    ],
    images: []
  },
  {
    id: 4,
    title: "Esports Tournament App",
    category: ["Mobile App", "Backend"],
    description: "Android application for managing esports tournaments, registrations, match scheduling and real-time updates.",
    tech: ["Kotlin", "Android SDK", "Firebase", "MVVM"],
    github: "https://github.com/yourusername/esports",
    featured: false,
    whyBuilt: "Designed to bridge the gap between amateur gamers and professional tournament organizers by providing a mobile-first registration and tracking platform.",
    howBuilt: "Built with native Kotlin and Android SDK for peak performance. Used Firebase Realtime Database to provide live score updates and MVVM architecture for a clean separation of concerns.",
    problems: [
      "Generating dynamic tournament brackets; developed a custom algorithm for single and double elimination.",
      "Real-time data synchronization; optimized Firebase listeners to minimize data usage.",
      "Push notification delivery for match reminders; integrated FCM with high-priority messaging."
    ],
    images: []
  },
  {
    id: 5,
    title: "Pet Care & Aid Ecosystem",
    category: ["Mobile App", "Full Stack"],
    description: "Engineered a comprehensive mobile platform for pet health management and supply chain procurement as a post-graduate technical project.",
    tech: ["Flutter", "Firebase", "Payments"],
    github: "https://github.com/mokshUpadhyay57/PetCareApp",
    featured: true,
    whyBuilt: "Developed as a final-year post-graduate implementation to solve service fragmentation by consolidating health records and procurement into a high-performance mobile interface.",
    howBuilt: "Engineered with Flutter for cross-platform consistency. Utilized Firebase Realtime Database for instantaneous data synchronization and implemented a modular catalog system with secure payment gateway integration.",
    problems: [
      "Reliability of time-sensitive health alerts; implemented a robust local notification system synced with background processes.",
      "Scalability of product data; architected a flattened NoSQL schema to ensure low-latency queries across thousands of items.",
      "Transaction integrity; developed custom retry logic and comprehensive logging for payment processing."
    ],
    images: []
  },
  {
    id: 6,
    title: "Bizzare E-commerce Engine",
    category: ["Web", "Full Stack"],
    description: "Architected a high-performance monolithic e-commerce solution with complex state management as an undergraduate technical thesis.",
    tech: ["Django", "JavaScript", "HTML5", "CSS3", "SQLite"],
    github: "https://github.com/mokshUpadhyay57/BizarreEcom",
    featured: true,
    whyBuilt: "Developed as an undergraduate thesis project to demonstrate the efficiency of monolithic architectures in handling end-to-end retail operations and persistent state management.",
    howBuilt: "Leveraged Django's MVT pattern for robust backend logic. Integrated custom JavaScript for dynamic UI updates and employed optimized CSS3 for a responsive, high-fidelity user experience.",
    problems: [
      "State persistence across sessions; implemented custom middleware for sophisticated cart management via Django's session framework.",
      "Database query bottlenecks; optimized ORM performance using advanced 'select_related' and 'prefetch_related' strategies.",
      "Checkout security; enforced strict server-side validation and inventory locks to prevent race conditions during high-concurrency events."
    ],
    images: []
  },
  {
    id: 7,
    title: "XCom E-commerce Platform",
    category: ["Web", "Backend"],
    description: "Refined core backend logic and UI scalability for a high-traffic e-commerce platform during a professional internship engagement.",
    tech: ["Django", "JavaScript", "SQLite", "HTML", "CSS"],
    github: "https://github.com/mokshUpadhyay57/Xcom-Django-Summer-Training-Project",
    featured: false,
    whyBuilt: "As part of a professional internship, this project focused on modernizing an e-commerce platform's legacy systems to improve data integrity and ensure cross-platform performance.",
    howBuilt: "Extended core Django models to support complex product hierarchies and developed automated data migration scripts. Refined frontend interactivity using vanilla JavaScript for lightweight, cross-platform compatibility.",
    problems: [
      "Legacy data migration; engineered custom scripts to transition sensitive data into new relational schemas without downtime.",
      "Frontend performance; optimized asset delivery and refactored CSS media queries to achieve high responsiveness scores.",
      "Authentication vulnerabilities; refactored the password reset and session management modules to align with modern security best practices."
    ],
    images: []
  },
  {
    id: 8,
    title: "TextWizard (Text Utility)",
    category: ["Web", "Frontend"],
    description: "Lightweight web utility for text transformations and analysis.",
    tech: ["React", "JavaScript", "HTML5", "CSS3"],
    github: "https://github.com/mokshUpadhyay57/TextWizard",
    website: "https://txtwiz.netlify.app",
    featured: true,
    whyBuilt: "A developer-focused tool to quickly clean, format, and analyze text. Built to be lightweight, fast, and accessible directly from any browser.",
    howBuilt: "Built with React and focused on high performance. All text transformations are handled on the client-side using efficient RegEx and string manipulation techniques. Deployed on Netlify for instant global availability.",
    problems: [
      "Handling large text inputs without freezing the UI; implemented debouncing and optimized state updates.",
      "Maintaining a clean, responsive layout across all device types; used modern CSS Grid and Flexbox.",
      "Dark mode persistence; implemented local storage sync for user preferences."
    ],
    images: []
  }
];

export default projects;
