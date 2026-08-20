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
  date?: string;
  credentialUrl?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export const PERSONAL_INFO = {
  name: 'Aquib Rashid Shaikh',
  shortName: 'Aquib Shaikh',
  title: 'Senior Android Developer',
  subtitle: '8+ Years Building High-Scale Android & FinTech Applications',
  experienceYears: '8+',
  location: 'Mumbai, Maharashtra, India',
  email: 'shaikhaquib119@gmail.com',
  phone: '+91 84259 18611',
  linkedin: 'https://www.linkedin.com/in/aquib-rashid-shaikh/',
  github: 'https://github.com/shaikhaquib',
  portfolio: 'https://shaikhaquib.github.io/Portfolio',
  resumePdfUrl: './AQUIB-SHAIKH-RESUME.pdf',
  profileImageUrl: './profile.png',
  summary: `Senior Android Developer with 8+ years of experience architecting high-scale, production-grade mobile applications across banking, payments (FinTech), and enterprise domains. Proven track record building native Android and hybrid WebView-based features for applications serving 50M+ users, including ICICI iMobile, GCash Super App, and EnterCard. Skilled in Kotlin, Jetpack Compose, Clean Architecture, MVVM, JavaScript Bridge / hybrid app integration, Google Maps, Geofencing, and adaptive video streaming with ExoPlayer and HLS. Experienced in leading developer pods, driving legacy codebase modernization, and maintaining 99.9% crash-free production stability.`,
  metrics: [
    { label: 'Production Users', value: '50M+' },
    { label: 'Years Experience', value: '8+' },
    { label: 'Crash-Free Rate', value: '99.9%' },
    { label: 'Banking Services', value: '400+' },
  ],
};

export const WORK_EXPERIENCES: WorkExperience[] = [
  {
    id: 'perennial',
    company: 'Perennial Systems',
    role: 'Senior Android Developer & Team Lead',
    period: 'Dec 2024 - Present',
    location: 'Mumbai, India',
    type: 'Full-Time',
    domain: 'FinTech',
    summary: 'Leading Android feature development for core GCash Super App modules including GTourist, Digital Tax Refund, and Request Payment.',
    highlights: [
      'Spearheaded Android feature development for core GCash Super App modules (GTourist, Digital Tax Refund, Request Payment) using Kotlin, Jetpack Compose, and MVVM Clean Architecture.',
      'Architected the migration of legacy GCash payment modules from Java/MVP to Kotlin/MVVM, reducing technical debt by 30% and improving testability and scalability.',
      'Built and maintained JavaScript Bridge integrations and native JS Plugin components binding WebView-hosted modules to native Android functionality, enabling secure native-web interoperability within hybrid app flows.',
      'Steered cross-domain coordination across backend, iOS, UI/UX, and QA teams, delivering 100% of sprint milestones on time through structured Agile planning.'
    ],
    techStack: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Clean Architecture', 'StateFlow', 'Coroutines', 'Hilt', 'JavaScript Bridge', 'WebView Plugins'],
    impactMetric: '30% Tech Debt Reduced'
  },
  {
    id: 'tcs',
    company: 'Tata Consultancy Services',
    role: 'Information Technology Analyst (Senior Android Developer)',
    period: 'May 2023 - Dec 2024',
    location: 'Mumbai, India',
    type: 'Full-Time',
    domain: 'Banking',
    summary: 'Directed Android feature engineering for the official ICICI iMobile banking app, serving 50M+ active users across 400+ services.',
    highlights: [
      'Directed Android feature engineering for the official ICICI iMobile banking app, encompassing 400+ financial services and serving 50M+ active users.',
      'Engineered a reusable internal design system (DFF), published as Maven packages, reducing UI integration time by 40% across teams.',
      'Managed a pod of 3 developers, enforcing PR review standards and GitLab branching strategy, maintaining a 99.9% crash-free production rate.'
    ],
    techStack: ['Kotlin', 'Android SDK', 'Maven Artifacts', 'Design System (DFF)', 'RoomDB', 'Retrofit 2', 'GitLab CI/CD', 'Espresso'],
    impactMetric: '40% Faster UI Dev Time'
  },
  {
    id: 'capgemini',
    company: 'Capgemini India Ltd',
    role: 'Software Development Consultant',
    period: 'July 2021 - May 2023',
    location: 'Mumbai, India',
    type: 'Full-Time',
    domain: 'FinTech',
    summary: 'Led the Android developer pod for the EnterCard (re:member) credit card and financial management app across Scandinavia.',
    highlights: [
      'Led the Android developer pod for the EnterCard (re:member) credit card and financial management app, driving feature rollouts for 500,000+ active cardholders across Scandinavia.',
      'Drove a full architecture overhaul from Java to Kotlin and legacy patterns to MVVM, improving app launch speed by 20%.',
      'Integrated Google Maps SDK with custom geofencing logic to power location-aware features, enabling real-time proximity detection and location-triggered notifications.',
      'Developed JavaScript Bridge solutions and native JS Plugins binding WebView components to native modules, enabling seamless native-web interoperability for hybrid app features.',
      'Implemented FigmaToken integrations for design-system consistency and resolved 40+ critical technical debt issues during a rapid-response support initiative for Ola Electric.'
    ],
    techStack: ['Kotlin', 'Java', 'MVVM', 'Google Maps SDK', 'Geofencing', 'JavaScript Bridge', 'Figma Tokens', 'Biometric Prompt', 'OAuth2'],
    impactMetric: '20% Faster Cold Launch'
  },
  {
    id: 'proteus',
    company: 'Proteus Technologies Pvt Ltd',
    role: 'Software Programmer',
    period: 'July 2019 - June 2021',
    location: 'Mumbai, India',
    type: 'Full-Time',
    domain: 'AI / ML',
    summary: 'Sole Android developer architecting 3 enterprise applications from scratch: Proteus Vision (CRM), Vision Sense (TensorFlow Lite), and Vision Moment.',
    highlights: [
      'Sole Android developer architecting 3 enterprise applications from scratch: Proteus Vision (CRM), Vision Sense (TensorFlow Lite computer vision), and Vision Moment.',
      'Integrated TensorFlow Lite models for real-time edge computer vision, object classification, and low-latency offline sensor processing.',
      'Built native JS Plugin architecture bridging WebView-based modules with native Android functionality for hybrid application features.',
      'Leveraged Crashlytics and RoomDB offline caching to reduce application crash rates by over 50%.'
    ],
    techStack: ['Android SDK', 'TensorFlow Lite', 'Kotlin', 'Java', 'RoomDB', 'JavaScript Bridge', 'Crashlytics', 'Firebase'],
    impactMetric: '>50% Crash Rate Reduction'
  },
  {
    id: 'affalatus',
    company: 'Affalatus Creative Solutions Ltd',
    role: 'Android Developer',
    period: 'Mar 2018 - July 2019',
    location: 'Mumbai, India',
    type: 'Full-Time',
    domain: 'Enterprise',
    summary: 'Developed Complete Wallet, a payments and bill-payment application, coordinating with backend teams for API and payment gateway integration.',
    highlights: [
      'Developed Complete Wallet, a payments and bill-payment application, coordinating with backend teams for API and third-party payment gateway integration.',
      'Migrated legacy projects to the latest Android SDK, resolving migration-related compatibility issues across devices.'
    ],
    techStack: ['Java', 'Android SDK', 'Payment Gateways', 'RESTful APIs', 'SQLite']
  },
  {
    id: 'keights',
    company: 'Keights India Technology',
    role: 'Android Developer',
    period: 'Apr 2017 - Mar 2018',
    location: 'Mumbai, India',
    type: 'Full-Time',
    domain: 'Social',
    summary: 'Developed core features of Y Chat, a social media application with real-time messaging, group chat, and audio/video calling.',
    highlights: [
      'Developed core features of Y Chat, a social media application, including image/text posts, group and one-to-one chat, and audio/video calls.',
      'Utilized Java, XMPP Ejabberd server for real-time chat, and Twilio API for audio/video calling.'
    ],
    techStack: ['Java', 'XMPP Ejabberd', 'Twilio API', 'WebSockets', 'SQLite']
  }
];

export const INDEPENDENT_PROJECTS = [
  {
    title: 'OTT Video Streaming Platform',
    role: 'Android Developer',
    description: 'Implemented adaptive bitrate video streaming using ExoPlayer with HLS support, optimizing playback performance and buffering behavior across variable network conditions. Built player UI and playback state handling for an independent OTT media platform.',
    techStack: ['ExoPlayer', 'HLS Streaming', 'Adaptive Bitrate', 'Kotlin', 'Custom Player UI']
  }
];

export const EDUCATIONS: Education[] = [
  {
    degree: 'Master of Science, Information Technology (M.Sc. IT)',
    institution: 'University of Mumbai',
    period: '2019 - 2021'
  },
  {
    degree: 'Bachelor of Science, Information Technology (B.Sc. IT)',
    institution: 'University of Mumbai',
    period: '2014 - 2017'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'Cutshort Certified Java — Advanced',
    issuer: 'Cutshort',
  },
  {
    title: 'Cutshort Certified Android Development — Basic',
    issuer: 'Cutshort',
  },
  {
    title: 'Agile Software Development',
    issuer: 'Coursera',
  },
  {
    title: 'Agile with Atlassian Jira',
    issuer: 'Coursera',
  }
];

export const SKILL_GROUPS = [
  {
    category: 'Languages & Core Android',
    items: ['Kotlin', 'Java', 'Android SDK', 'Jetpack Compose', 'Coroutines & Flow', 'StateFlow', 'RxJava', 'Material Design', 'XML Layouts']
  },
  {
    category: 'Architecture & Design Patterns',
    items: ['Clean Architecture', 'MVVM', 'MVP', 'MVC', 'Repository Pattern', 'SOLID Principles', 'Multi-Module Modularization', 'Design Systems (DFF)']
  },
  {
    category: 'Dependency Injection & Storage',
    items: ['Hilt', 'Dagger 2', 'Room Database', 'SQLite', 'ObjectBox', 'Offline-First Caching', 'Encrypted SharedPreferences']
  },
  {
    category: 'Networking & APIs',
    items: ['Retrofit 2', 'RESTful APIs', 'GraphQL', 'WebSockets', 'OkHttp Interceptors', 'JSON Serialization']
  },
  {
    category: 'Hybrid & Web Integration',
    items: ['WebView', 'JavaScript Bridge', 'Native JS Plugin Architecture', 'HTML5 / CSS']
  },
  {
    category: 'Location, Media & Machine Learning',
    items: ['Google Maps SDK', 'Geofencing APIs', 'ExoPlayer', 'HLS Adaptive Streaming', 'TensorFlow Lite (TFLite)', 'On-Device Edge ML']
  },
  {
    category: 'Testing, Security & CI/CD',
    items: ['JUnit 5', 'Espresso', 'Mockito', 'OAuth2 / JWT', 'Biometric Prompt', 'Crashlytics', 'R8 / ProGuard', 'Jenkins', 'GitLab CI/CD', 'Git / GitHub', 'Gradle Scripts']
  },
  {
    category: 'Developer Tools & Methodologies',
    items: ['Android Studio', 'FigmaTokens', 'Jira', 'Agile / Scrum', 'Full SDLC Delivery']
  }
];
