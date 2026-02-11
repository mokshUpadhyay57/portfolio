const projects = [
  {
    id: 1,
    title: "Online Bookstore Backend",
    description:
      "Spring-based backend system for managing books, users, cart and orders with role-based authentication.",
    tech: [
      "Spring Core",
      "Spring Boot",
      "Spring MVC",
      "Spring Data JPA",
      "Spring Security (JWT)",
      "MySQL"
    ],
    features: [
      "User registration & login",
      "Role-based authorization",
      "Product CRUD operations",
      "Cart & order management",
      "REST APIs"
    ],
    github: "https://github.com/yourusername/bookstore",
    images: [
      "/assets/projects/bookstore1.png",
      "/assets/projects/bookstore2.png"
    ]
  },
  {
    id: 2,
    title: "Employee Payroll Batch Processor",
    description:
      "Batch processing application to calculate salaries and generate automated payslips.",
    tech: [
      "Spring Boot",
      "Spring Batch",
      "Spring Data JPA",
      "Scheduler",
      "MySQL"
    ],
    features: [
      "CSV upload processing",
      "Automated salary calculation",
      "Payslip PDF generation",
      "Email automation",
      "Admin dashboard"
    ],
    github: "https://github.com/yourusername/payroll",
    images: [
      "/assets/projects/payroll1.png"
    ]
  }
];

export default projects;
