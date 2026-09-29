export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
  badge: string;
}

export interface SolutionItem {
  id: string;
  title: string;
  category: string;
  description: string;
  sampleFeatures: string[];
  idealFor: string;
  iconName: string;
}

export interface WorkStep {
  step: string;
  title: string;
  description: string;
  details: string;
}

export const COMPANY_INFO = {
  name: 'SoftwareDeveloper077',
  founder: 'Parmeshwar Metkar',
  email: 'parmeshwarmetkar07@gmail.com',
  tagline: 'Building digital solutions based on your ideas and requirements.',
  mission: 'If you have a software project idea, tell us your requirements and we can build it for you.',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'website-development',
    title: 'Website Development',
    description: 'Modern, responsive and business-focused websites.',
    iconName: 'Globe',
    badge: 'Responsive & Fast',
    features: [
      'Tailored landing pages & company portals',
      'Mobile-first responsive design on all screen sizes',
      'Search engine optimized (SEO) clean structure',
      'Fast loading speed & modern user experience',
    ],
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    description: 'Custom mobile applications designed around your requirements.',
    iconName: 'Smartphone',
    badge: 'iOS & Android',
    features: [
      'Custom interface built for mobile touchscreens',
      'Cross-platform compatibility & native device capabilities',
      'Seamless API & backend database synchronization',
      'Intuitive user flows designed around user needs',
    ],
  },
  {
    id: 'custom-software-development',
    title: 'Custom Software Development',
    description: 'Software solutions developed specifically for your business processes.',
    iconName: 'Code2',
    badge: 'Tailored Architecture',
    features: [
      'Purpose-built workflows matching your exact process',
      'Secure data storage and custom logic engines',
      'Scalable architecture built for reliable long-term use',
      'Easy-to-maintain and clean codebase',
    ],
  },
  {
    id: 'business-applications',
    title: 'Business Applications',
    description: 'Applications that help businesses manage their daily operations efficiently.',
    iconName: 'Briefcase',
    badge: 'Operations & ERP',
    features: [
      'Internal management portals & admin consoles',
      'Employee, task, and records management',
      'Role-based access controls and activity logging',
      'Centralized dashboards for operational clarity',
    ],
  },
  {
    id: 'automation-solutions',
    title: 'Automation Solutions',
    description: 'Automate repetitive business tasks and improve productivity.',
    iconName: 'Cpu',
    badge: 'Efficiency & Speed',
    features: [
      'Automated email/SMS notification triggers',
      'Data extraction, batch processing & report generation',
      'Third-party software & webhook integrations',
      'Reduction of manual human errors & time waste',
    ],
  },
  {
    id: 'custom-development-projects',
    title: 'Custom Development Projects',
    description: 'Have a unique idea? We can discuss your requirements and build a solution around them.',
    iconName: 'Sparkles',
    badge: 'Innovative & Flexible',
    features: [
      'Proof-of-concept (PoC) & Minimum Viable Products (MVP)',
      'Specialized algorithms & bespoke digital tools',
      'Step-by-step collaborative development',
      'Iterative refinement based on your practical feedback',
    ],
  },
];

export const SOLUTIONS: SolutionItem[] = [
  {
    id: 'business-websites',
    title: 'Business Websites',
    category: 'Web Presence',
    description: 'Professional online presence built to represent your company, showcase services, and convert visitors into clients.',
    sampleFeatures: ['Company branding', 'Contact & inquiry forms', 'Services showcase', 'Fast page speeds'],
    idealFor: 'Businesses, consultancies, agencies, and local services',
    iconName: 'Layout',
  },
  {
    id: 'ecommerce-websites',
    title: 'E-commerce Websites',
    category: 'Online Commerce',
    description: 'Custom digital stores with product catalogs, shopping cart functionality, checkout workflows, and order tracking.',
    sampleFeatures: ['Product catalog', 'Shopping cart & checkout', 'Order management', 'Customer accounts'],
    idealFor: 'Retailers, direct-to-consumer brands, and digital product sellers',
    iconName: 'ShoppingBag',
  },
  {
    id: 'mobile-applications',
    title: 'Mobile Applications',
    category: 'Mobile',
    description: 'On-the-go mobile applications providing quick access to services, push notifications, and seamless device experiences.',
    sampleFeatures: ['Clean mobile UI', 'Offline caching', 'User authentication', 'Push notifications'],
    idealFor: 'Startups, service businesses, and customer-facing platforms',
    iconName: 'Smartphone',
  },
  {
    id: 'management-systems',
    title: 'Management Systems',
    category: 'Operations',
    description: 'Comprehensive software systems designed to organize internal operations, inventory, assets, and scheduling.',
    sampleFeatures: ['Inventory tracking', 'Resource scheduling', 'Audit logs', 'Multi-department access'],
    idealFor: 'Enterprises, logistics, clinics, and manufacturing firms',
    iconName: 'Layers',
  },
  {
    id: 'customer-management-applications',
    title: 'Customer Management Applications',
    category: 'CRM',
    description: 'Tailored CRM applications to track customer interactions, lead pipelines, communication logs, and follow-ups.',
    sampleFeatures: ['Lead pipeline tracking', 'Customer history records', 'Follow-up reminders', 'Communication logs'],
    idealFor: 'Sales teams, service providers, and client-driven businesses',
    iconName: 'Users',
  },
  {
    id: 'business-dashboards',
    title: 'Business Dashboards',
    category: 'Analytics & Reporting',
    description: 'Visual data dashboards that display key performance metrics, daily statistics, and revenue insights in real time.',
    sampleFeatures: ['Interactive charts', 'KPI metric tracking', 'Data export (CSV/PDF)', 'Real-time updates'],
    idealFor: 'Founders, operations managers, and business decision makers',
    iconName: 'BarChart3',
  },
  {
    id: 'automation-systems',
    title: 'Automation Systems',
    category: 'Automation',
    description: 'Custom scheduled and event-driven automation scripts that handle data sync, alerts, and recurring workflows.',
    sampleFeatures: ['Scheduled batch jobs', 'Webhook triggers', 'Alert notifications', 'Multi-app sync'],
    idealFor: 'Teams looking to eliminate repetitive manual computer work',
    iconName: 'Zap',
  },
  {
    id: 'custom-software',
    title: 'Custom Software',
    category: 'Bespoke Software',
    description: 'Unique custom software applications developed from scratch to solve your specific technical or industry challenge.',
    sampleFeatures: ['Custom algorithms', 'Bespoke database schema', 'Specialized logic', 'Custom API integrations'],
    idealFor: 'Founders with novel software ideas and specialized operational requirements',
    iconName: 'Terminal',
  },
];

export const WORK_STEPS: WorkStep[] = [
  {
    step: '01',
    title: 'Share Your Idea',
    description: 'Tell us about your project and requirements.',
    details: 'You provide an initial overview of what you want to create, the problem it solves, or the features you have in mind.',
  },
  {
    step: '02',
    title: 'Requirement Discussion',
    description: 'We understand your business needs and project expectations.',
    details: 'We dive deep into your project scope, target audience, technical needs, and timeline expectations to ensure total alignment.',
  },
  {
    step: '03',
    title: 'Planning',
    description: 'We plan the features, technology and development approach.',
    details: 'We map out the architecture, user flows, database structure, and select the most reliable, modern tech stack for your project.',
  },
  {
    step: '04',
    title: 'Development',
    description: 'Our development process turns the plan into a working product.',
    details: 'Code is written cleanly and modularly, building the user interface, backend logic, and required integrations step-by-step.',
  },
  {
    step: '05',
    title: 'Testing',
    description: 'We test the solution and fix issues before delivery.',
    details: 'Rigorous testing across screen resolutions, edge cases, responsiveness, and performance to ensure stable, bug-free operation.',
  },
  {
    step: '06',
    title: 'Delivery',
    description: 'Your completed project is delivered according to the agreed requirements.',
    details: 'We hand over the verified, completed solution along with necessary deployment assistance and guidance.',
  },
];

export const FAQS = [
  {
    q: 'How do I start a project with SoftwareDeveloper077?',
    a: 'Simply fill out the project enquiry form below or email us directly at parmeshwarmetkar07@gmail.com. Share a brief summary of what you want to build, and founder Parmeshwar Metkar will connect with you to discuss the details.',
  },
  {
    q: 'What information should I provide in my requirements?',
    a: 'You do not need a complex technical document. Just describe the main goal of your project, who will use it, the key features you envision, and any timeline or budget expectations. We will help structure the technical specifics.',
  },
  {
    q: 'Can you work with clients who are non-technical?',
    a: 'Yes, absolutely. We specialize in translating non-technical business concepts and ideas into clean, functional, and reliable software without overwhelming you with confusing jargon.',
  },
  {
    q: 'Are project details and business ideas kept confidential?',
    a: 'Yes. We treat all client ideas, business requirements, and conversations with strict privacy and professional confidentiality.',
  },
  {
    q: 'What types of technologies do you use?',
    a: 'We use modern, dependable technologies including React, TypeScript, Next.js, Node.js, Express, Tailwind CSS, PostgreSQL, modern mobile frameworks, and RESTful APIs tailored to project demands.',
  },
];
