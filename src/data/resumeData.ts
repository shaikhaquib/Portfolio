export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: 'Full-Time';
  domain: 'FinTech' | 'Banking' | 'Enterprise' | 'AI / ML' | 'Social';
  summary: string;
  highlights: string[];
  techStack: string[];
  impactMetric?: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: { name: string; level: number; featured?: boolean; badge?: string }[];
}

export const PERSONAL_INFO = {
  name: 'Aquib Rashid Shaikh',
  shortName: 'Aquib Shaikh',
  title: 'Senior Android Lead & AI-Driven Mobile Architect',
  experienceYears: '8+',
  location: 'Mumbai, Maharashtra, India',
  email: 'Shaikhaquib119@gmail.com',
  phone: '+91 84259 18611',
  linkedin: 'https://www.linkedin.com/in/aquib-shaikh-200bba127',
  github: 'https://github.com/shaikhaquib',
  resumePdfUrl: './AQUIB-SHAIKH-RESUME.pdf',
  profileImageUrl: './profile.png',
  summary: `Senior Mobile App Developer and Android Lead with 8+ years of experience architecting high-traffic applications in banking, payments, and enterprise domains. Proven track record of directing cross-functional teams, driving legacy modernization (MVP to MVVM / Compose), and embedding AI-assisted engineering into daily development workflows.`,
  metrics: [
    { label: 'Years Experience', value: '8+' },
    { label: 'Active Users Served', value: '50M+' },
    { label: 'Banking Services', value: '400+' },
    { label: 'Crash-Free Rate', value: '99.9%' },
  ],
};

export const WORK_EXPERIENCES: WorkExperience[] = [
  {
    id: 'perennial',
    company: 'Perennial Systems',
    role: 'Senior Android Developer & Team Lead',
    period: 'Dec 2024 - Present',
    location: 'Mumbai',
    type: 'Full-Time',
    domain: 'FinTech',
    summary: 'Lead Android feature development for the GCash app, architecting core modules including GTourist, Digital Tax Refund, and Request Payment.',
    highlights: [
      'Spearheaded Android feature development for core GCash app modules (GTourist, Digital Tax Refund, Request Payment), delivering scalable solutions utilizing Kotlin, Jetpack Compose, and MVVM.',
      'Architected the migration of legacy GCash payment modules from MVP to MVVM, effectively reducing technical debt by 30%.',
      'Steered cross-domain coordination across backend, iOS, UI/UX, and QA teams, achieving 100% on-time sprint milestones.'
    ],
    techStack: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Clean Architecture', 'Coroutines', 'Flow', 'Hilt'],
    impactMetric: '30% Tech Debt Reduction'
  },
  {
    id: 'tcs',
    company: 'Tata Consultancy Services',
    role: 'I.T. Analyst (Senior Android Developer)',
    period: 'May 2023 - Dec 2024',
    location: 'Mumbai',
    type: 'Full-Time',
    domain: 'Banking',
    summary: 'Directed feature development for ICICI iMobile (50M+ active users) and built reusable design system libraries.',
    highlights: [
      'Directed Android feature development for official mobile banking app encompassing 400+ services serving over 50M users.',
      'Engineered a reusable design library (DFF) and published Maven packages, cutting UI development time by 40%.',
      'Managed a pod of 3 developers, enforcing rigorous code quality and maintaining a 99.9% crash-free rate.'
    ],
    techStack: ['Kotlin', 'Android SDK', 'Design System (DFF)', 'Maven', 'MVVM', 'RoomDB', 'Retrofit', 'GitLab CI'],
    impactMetric: '40% Faster UI Integration'
  },
  {
    id: 'capgemini',
    company: 'Capgemini India Ltd',
    role: 'Software Development Consultant',
    period: 'July 2021 - May 2023',
    location: 'Mumbai',
    type: 'Full-Time',
    domain: 'FinTech',
    summary: 'Led developer pod for EnterCard credit card app and supported rapid-response design token integration.',
    highlights: [
      'Led Android pod for EnterCard (re:member) credit card app driving feature rollouts for 500,000+ active users.',
      'Drove architecture overhaul from Java to Kotlin and MVVM, boosting application launch speed by 20%.',
      'Implemented FigmaToken integrations for design system consistency and resolved 40+ technical debt issues for Ola Electric.'
    ],
    techStack: ['Kotlin', 'Java', 'MVVM', 'Figma Tokens', 'Crashlytics', 'RxJava', 'Dagger2'],
    impactMetric: '20% Launch Speed Boost'
  },
  {
    id: 'proteus',
    company: 'Proteus Technologies Pvt Ltd',
    role: 'Software Programmer',
    period: 'July 2019 - June 2021',
    location: 'Mumbai',
    type: 'Full-Time',
    domain: 'AI / ML',
    summary: 'Sole Android developer architecting 3 enterprise applications from scratch, including TensorFlow Lite computer vision.',
    highlights: [
      'Architected and built 3 enterprise applications from scratch: Proteus Vision (CRM), Vision Sense (TensorFlow Lite), and Vision Moment.',
      'Integrated TensorFlow Lite models for real-time mobile object recognition and intelligent sensor processing.',
      'Collaborated with backend teams for API integration and leveraged Crashlytics to cut application crash rates by >50%.'
    ],
    techStack: ['Android SDK', 'TensorFlow Lite', 'Kotlin', 'Java', 'RoomDB', 'SQLite', 'Firebase'],
    impactMetric: '>50% Crash Rate Reduction'
  },
  {
    id: 'affalatus',
    company: 'Affalatus Creative Solution Ltd',
    role: 'Android Developer',
    period: 'March 2018 - July 2019',
    location: 'Mumbai',
    type: 'Full-Time',
    domain: 'Enterprise',
    summary: 'Developed custom high-volume daily transaction applications directly interacting with client stakeholders.',
    highlights: [
      'Engineered multiple client applications from scratch including Complete Wallet for high-volume transactions.',
      'Migrated legacy applications to latest Android SDKs, ensuring 100% cross-device compatibility.'
    ],
    techStack: ['Java', 'Android SDK', 'RESTful APIs', 'SQLite'],
  },
  {
    id: 'keights',
    company: 'Keights India Technology',
    role: 'Android Developer',
    period: 'April 2017 - March 2018',
    location: 'Mumbai',
    type: 'Full-Time',
    domain: 'Social',
    summary: 'Built real-time social messaging app Y Chat from scratch.',
    highlights: [
      'Developed Y Chat social media app from scratch supporting thousands of concurrent users.',
      'Integrated real-time chat infrastructure using Java, XMPP Ejabberd server, and Twilio API.'
    ],
    techStack: ['Java', 'XMPP Ejabberd', 'Twilio API', 'WebSockets'],
  }
];

export const EDUCATIONS: Education[] = [
  {
    degree: 'Master of Science in Information Technology (M.Sc. IT)',
    institution: 'Mumbai University',
    period: '2019 - 2021'
  },
  {
    degree: 'Bachelor of Science in Information Technology (B.Sc. IT)',
    institution: 'Mumbai University',
    period: '2014 - 2017'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'Agile with Atlassian Jira',
    issuer: 'Coursera',
    date: 'May 2022',
    credentialUrl: 'https://coursera.org'
  },
  {
    title: 'Agile Software Development',
    issuer: 'Coursera',
    date: 'Dec 2021',
    credentialUrl: 'https://coursera.org'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: 'Languages & Core Android',
    icon: 'Smartphone',
    skills: [
      { name: 'Kotlin', level: 95, featured: true, badge: 'Expert' },
      { name: 'Jetpack Compose', level: 90, featured: true, badge: 'Modern UI' },
      { name: 'Android SDK', level: 95, featured: true },
      { name: 'Java', level: 90 },
      { name: 'Coroutines & Flow', level: 92, featured: true },
      { name: 'RxJava', level: 85 }
    ]
  },
  {
    name: 'Architecture & Design',
    icon: 'Layers',
    skills: [
      { name: 'Clean Architecture', level: 95, featured: true },
      { name: 'MVVM & MVP', level: 95, featured: true },
      { name: 'Dependency Injection (Hilt / Dagger)', level: 90, featured: true },
      { name: 'Design Systems (DFF / Tokens)', level: 92 },
      { name: 'Offline-First Architecture', level: 88 }
    ]
  },
  {
    name: 'AI & Modern Workflows',
    icon: 'Cpu',
    skills: [
      { name: 'Cursor AI & Windsurf', level: 92, featured: true, badge: 'AI-Native' },
      { name: 'Prompt Engineering', level: 90, featured: true },
      { name: 'TensorFlow Lite', level: 85, featured: true, badge: 'On-Device ML' },
      { name: 'ChatGPT / Claude / Gemini API', level: 92 },
      { name: 'Auto ML & Edge Intelligence', level: 80 }
    ]
  },
  {
    name: 'Networking & Data',
    icon: 'Database',
    skills: [
      { name: 'Retrofit & RESTful APIs', level: 95 },
      { name: 'RoomDB & SQLite', level: 92 },
      { name: 'GraphQL & WebSockets', level: 85 },
      { name: 'Firebase & Cloud Services', level: 88 }
    ]
  },
  {
    name: 'Testing, Security & DevOps',
    icon: 'ShieldCheck',
    skills: [
      { name: 'JUnit / Espresso / Mockito', level: 88 },
      { name: 'Git & GitLab Workflows', level: 92 },
      { name: 'Crashlytics & Performance Tuning', level: 92 },
      { name: 'Jenkins & Gradle Scripts', level: 85 },
      { name: 'Encryption (OAuth2 / JWT)', level: 88 }
    ]
  }
];
