export const personalInfo = {
  name: "Muhammad Imam Nurokhi",
  title: "IT Product Architect & Full Stack Developer",
  taglines: [
    "IT Product Architect",
    "React & Node.js Developer",
    "ERP (Odoo) Specialist",
    "UI/UX Enthusiast",
  ],
  summary:
    "Bridging complex system architecture with exceptional user experience. Passionate about building scalable, clean systems that make a real business impact.",
  location: "Indonesia",
  email: "imam.nurokhi@gmail.com",
  linkedin: "https://www.linkedin.com/in/muhammad-imam-nurokhi",
  github: "https://github.com/imam-nurokhi",
};

export const metrics = [
  { value: "5+", label: "Years Experience" },
  { value: "50K+", label: "Users Impacted" },
  { value: "15+", label: "Projects Delivered" },
];

export const expertise = [
  {
    icon: "🏗️",
    title: "System Architecture",
    description:
      "Designing scalable, resilient microservices architectures and SaaS platforms that handle enterprise-grade workloads.",
    highlights: ["Microservices", "API Design", "Scalability", "Cloud-native"],
  },
  {
    icon: "⚡",
    title: "Full Stack Development",
    description:
      "End-to-end development with React.js, Next.js on the frontend and Node.js, Express.js on the backend.",
    highlights: ["React / Next.js", "Node.js", "REST & GraphQL", "TypeScript"],
  },
  {
    icon: "🔧",
    title: "Odoo / ERP",
    description:
      "Custom Odoo module development, system integration, and business process automation for enterprise clients.",
    highlights: ["Odoo v14–v16", "Python Modules", "XML Views", "Integration"],
  },
  {
    icon: "🧪",
    title: "QA & DevOps",
    description:
      "Establishing testing standards, CI/CD pipelines, and leading QA teams to ensure product quality at scale.",
    highlights: ["CI/CD", "Docker", "GitHub Actions", "Test Strategy"],
  },
];

export const techStack = [
  { name: "JavaScript", category: "language", icon: "JS" },
  { name: "TypeScript", category: "language", icon: "TS" },
  { name: "Python", category: "language", icon: "PY" },
  { name: "PHP", category: "language", icon: "PHP" },
  { name: "React.js", category: "frontend", icon: "⚛️" },
  { name: "Next.js", category: "frontend", icon: "▲" },
  { name: "Vue.js", category: "frontend", icon: "V" },
  { name: "Tailwind CSS", category: "frontend", icon: "🌊" },
  { name: "Framer Motion", category: "frontend", icon: "✦" },
  { name: "Node.js", category: "backend", icon: "🟢" },
  { name: "Express.js", category: "backend", icon: "EX" },
  { name: "FastAPI", category: "backend", icon: "🚀" },
  { name: "GraphQL", category: "backend", icon: "◈" },
  { name: "Odoo", category: "erp", icon: "O" },
  { name: "PostgreSQL", category: "database", icon: "🐘" },
  { name: "MongoDB", category: "database", icon: "🍃" },
  { name: "Redis", category: "database", icon: "♦" },
  { name: "MySQL", category: "database", icon: "🐬" },
  { name: "Docker", category: "devops", icon: "🐳" },
  { name: "AWS", category: "devops", icon: "☁️" },
  { name: "GitHub Actions", category: "devops", icon: "⚙️" },
  { name: "Figma", category: "tool", icon: "🎨" },
];

export const experience = [
  {
    id: 1,
    role: "Product Architect",
    company: "Qasir.id",
    period: "2022 – Present",
    type: "Full-time",
    description:
      "Designed and implemented end-to-end product architecture for a SaaS POS platform serving over 50,000 SMEs across Indonesia.",
    bullets: [
      "Designed and implemented end-to-end product architecture for SaaS POS platform",
      "Led cross-functional teams in delivering scalable microservices",
      "Drove system integration between payment, inventory, and reporting modules",
      "Improved system performance by 40% through architectural refactoring",
    ],
    tech: ["React", "Node.js", "PostgreSQL", "AWS", "Docker", "Microservices"],
    color: "blue",
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "PT Inti (Industri Telekomunikasi Indonesia)",
    period: "2020 – 2022",
    type: "Full-time",
    description:
      "Developed and maintained enterprise web applications, implemented Odoo ERP customizations, and led a QA team of 5 engineers.",
    bullets: [
      "Developed and maintained enterprise web applications using React.js and Node.js",
      "Implemented Odoo ERP customizations and modules for business process automation",
      "Led QA team of 5 engineers in establishing testing standards and CI/CD pipelines",
      "Delivered 15+ features for internal enterprise portal",
    ],
    tech: ["React.js", "Node.js", "Odoo", "Python", "MongoDB", "CI/CD"],
    color: "gold",
  },
  {
    id: 3,
    role: "Web Developer",
    company: "Freelance",
    period: "2018 – 2020",
    type: "Freelance",
    description:
      "Built custom web applications, e-commerce solutions, and CMS integrations for various clients.",
    bullets: [
      "Built custom web applications for various clients",
      "Developed e-commerce solutions and CMS integrations",
      "Created responsive UI/UX designs",
    ],
    tech: ["HTML/CSS", "JavaScript", "PHP", "WordPress", "MySQL"],
    color: "purple",
  },
];

export const projects = [
  {
    id: 1,
    title: "Qasir POS Architecture",
    shortDesc: "Scalable SaaS POS system serving 50,000+ SMEs",
    description:
      "Architected and led the development of a comprehensive SaaS Point-of-Sale platform serving over 50,000 small and medium enterprises across Indonesia. The system handles real-time transaction processing, inventory management, and business analytics.",
    tech: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
    role: "Product Architect",
    impact: "50,000+ SMEs served",
    gradient: "from-blue-600/30 to-cyan-600/30",
    accentColor: "blue",
    highlights: [
      "Microservices architecture with 99.9% uptime",
      "Real-time payment processing integration",
      "Multi-tenant SaaS architecture",
      "40% performance improvement through refactoring",
    ],
  },
  {
    id: 2,
    title: "Odoo ERP Implementation",
    shortDesc: "Custom Odoo modules reducing manual work by 60%",
    description:
      "Designed and developed custom Odoo ERP modules for HR management, inventory tracking, and accounting automation for enterprise clients. Significantly reduced manual processes through intelligent automation.",
    tech: ["Odoo", "Python", "PostgreSQL", "XML"],
    role: "Lead Developer",
    impact: "60% reduction in manual work",
    gradient: "from-amber-600/30 to-yellow-600/30",
    accentColor: "gold",
    highlights: [
      "Custom HR and payroll module development",
      "Automated inventory reconciliation",
      "Integrated accounting workflows",
      "Multi-company configuration support",
    ],
  },
  {
    id: 3,
    title: "Enterprise Portal",
    shortDesc: "Internal portal with RBAC and real-time dashboards",
    description:
      "Built a comprehensive internal enterprise portal for PT Inti featuring role-based access control, real-time operational dashboards, and seamless integrations with existing systems.",
    tech: ["React", "Node.js", "MongoDB", "WebSocket"],
    role: "Full Stack Developer & QA Lead",
    impact: "500+ internal users",
    gradient: "from-purple-600/30 to-pink-600/30",
    accentColor: "purple",
    highlights: [
      "Role-based access control (RBAC)",
      "Real-time operational dashboards",
      "WebSocket-powered live data feeds",
      "Comprehensive audit logging",
    ],
  },
  {
    id: 4,
    title: "Smart Inventory System",
    shortDesc: "Real-time inventory tracking with barcode scanning",
    description:
      "Developed a real-time inventory tracking system with mobile barcode scanning capabilities, instant stock level alerts, and predictive reorder analytics powered by Redis caching.",
    tech: ["React Native", "Node.js", "Redis", "PostgreSQL"],
    role: "Full Stack Developer",
    impact: "Real-time tracking at scale",
    gradient: "from-green-600/30 to-teal-600/30",
    accentColor: "green",
    highlights: [
      "Mobile barcode scanning integration",
      "Sub-second Redis-powered inventory updates",
      "Predictive reorder point analytics",
      "Multi-warehouse support",
    ],
  },
];
