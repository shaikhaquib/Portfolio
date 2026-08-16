export interface ProjectScreenshot {
  url: string;
  title: string;
  caption: string;
}

export interface Project {
  id: string;
  slug: string;
  route: string;
  title: string;
  subtitle: string;
  category: 'FinTech' | 'Banking' | 'Enterprise';
  company: string;
  role: string;
  teamSize: string;
  period: string;
  impactMetric: string;
  userScale: string;
  heroImage: string;
  screenshots: ProjectScreenshot[];
  summary: string;
  problem: string;
  myRole: string;
  technicalApproach: {
    architecture: string[];
    decisions: string[];
    tradeOffs: string[];
  };
  impactStats: { label: string; value: string; context: string }[];
  challengeAndSolution: {
    challengeTitle: string;
    challengeDetails: string;
    solutionTitle: string;
    solutionDetails: string;
  };
  techStack: string[];
  keyContributions: string[];
}

export const CASE_STUDIES: Project[] = [
  {
    id: 'gcash-super-app',
    slug: 'gcash',
    route: '/projects/gcash',
    title: 'GCash Super App',
    subtitle: 'GTourist, Digital Tax Refund Claims & High-Volume Payment Modules',
    category: 'FinTech',
    company: 'Perennial Systems',
    role: 'Senior Android Developer & Team Lead',
    teamSize: 'Led Android pod of 6 engineers; collaborated with iOS, Backend & QA',
    period: 'Dec 2024 - Present',
    impactMetric: '30% Tech Debt Reduced',
    userScale: 'Millions of Daily Active Users',
    heroImage: 'projects/gcash/wallet.png',
    screenshots: [
      {
        url: 'projects/gcash/wallet.png',
        title: 'GTourist Wallet & Balance Dashboard',
        caption: 'Main GTourist dashboard showing live balance (₱ 10,000.00), 30-day tourist account status, quick Send/Pay QR shortcuts, and local onboarding guide.'
      },
      {
        url: 'projects/gcash/wallet-1.png',
        title: 'GTourist Linked International Card View',
        caption: 'Active card management tab displaying bound international Visa card (ending in 1234) with instant unlink controls and travel payment shortcuts.'
      },
      {
        url: 'projects/gcash/payment-methods.png',
        title: 'Debit/Credit Card Payment Methods',
        caption: 'List of linked Visa cards with default card selector for PayQR merchant transactions and option to link additional cards.'
      },
      {
        url: 'projects/gcash/manage-card.png',
        title: 'Card Settings & Default Payment Toggle',
        caption: 'Granular card controls allowing users to set a card as the default method for PayQR merchant transactions or unlink the card.'
      },
      {
        url: 'projects/gcash/my-linked-accounts.png',
        title: 'My Linked Accounts Directory',
        caption: 'Integrated multi-channel payment sources including GCash Mastercard, Amex Virtual Pay, PayPal, Payoneer, GCredit, and direct bank links.'
      },
      {
        url: 'projects/gcash/cashier.png',
        title: 'Pay QR Cashier Checkout',
        caption: 'Checkout flow allowing multi-source payments across GCash balance, GCredit, GGives, or credit cards with itemized fee calculation.'
      },
      {
        url: 'projects/gcash/receipt.png',
        title: 'Payment Confirmation & Receipt',
        caption: 'Cryptographically verified transaction receipt detailing merchant, convenience fee, QRPH invoice number, bank reference, and download/share actions.'
      },
      {
        url: 'projects/gcash/inbox.jpg',
        title: 'Transaction Inbox & Real-Time Alerts',
        caption: 'In-app notification feed delivering real-time push confirmation of completed card payments with official reference numbers.'
      }
    ],
    summary: 'Led the Android development pod for core GCash Super App features including GTourist (international tourist onboarding), Digital Tax Refund, and Request Payment modules. Overhauled legacy Java/MVP presenter code to Kotlin MVVM and Jetpack Compose.',
    problem: 'The legacy GCash payment codebase contained tightly coupled MVP presenters with complex callback chains, making it difficult to write reliable unit tests and causing occasional payment state synchronization bugs when network dropped during transactions.',
    myRole: 'Served as Android Lead. Designed module boundaries, established clean MVVM architecture, built JavaScript Bridge plugins for WebView-based flows, and ensured 100% on-time sprint deliveries across all feature milestones.',
    technicalApproach: {
      architecture: [
        'Modular Clean Architecture (UI -> Domain UseCases -> Repository -> Network/Storage)',
        'Unidirectional Data Flow (UDF) powered by Jetpack Compose and StateFlow',
        'Custom JavaScript Bridge & Native JS Plugins binding WebView modules to native Android APIs',
        'Hilt Dependency Injection with feature-scoped components'
      ],
      decisions: [
        'Migrated payment presenter layers from Java MVP to Kotlin Coroutines and immutable StateFlow models.',
        'Extracted business validation and tax refund rules into pure Kotlin UseCases with unit tests.',
        'Built secure native-web JavaScript bridge plugins so web-hosted partner modules could invoke native camera, biometrics, and secure storage.'
      ],
      tradeOffs: [
        'Prioritized migrating high-traffic payment screens to Kotlin first, keeping stable legacy read-only modules in maintenance mode to minimize regression risks.'
      ]
    },
    impactStats: [
      { label: 'Technical Debt', value: '-30%', context: 'Reduced legacy MVP coupling across core payment modules' },
      { label: 'Sprint Milestones', value: '100%', context: 'Delivered on-time releases across all international sprint cycles' },
      { label: 'Crash-Free Rate', value: '99.95%', context: 'Maintained during high-volume international tourist releases' },
      { label: 'Code Testability', value: '85%+', context: 'Unit test coverage across critical refund & payment UseCases' }
    ],
    challengeAndSolution: {
      challengeTitle: 'Preventing Double-Submissions & Race Conditions During Network Handoffs',
      challengeDetails: 'Users making payments in subway stations or airport terminals frequently experience brief network drops. If a user tapped the submit button multiple times during a connection switch, duplicate API requests could trigger duplicate authorization errors.',
      solutionTitle: 'Mutex-Guarded StateFlow Pipeline with Idempotent Request Tokens',
      solutionDetails: 'Implemented an atomic submission lock using Kotlin Coroutines Mutex to block concurrent triggers from the UI. Paired this with a unique client-generated UUID idempotency key attached to every payment payload, allowing backend gateways to safely deduplicate retries.'
    },
    techStack: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Clean Architecture', 'StateFlow', 'Coroutines', 'Hilt', 'JavaScript Bridge', 'Retrofit 2', 'JUnit 5'],
    keyContributions: [
      'Engineered the GTourist module enabling international travelers to bind foreign payment methods and verify passport credentials.',
      'Developed the Digital Tax Refund feature from scratch, allowing users to track customs refund vouchers and view real-time payout receipts.',
      'Refactored legacy MVP payment components into Kotlin MVVM with StateFlow, reducing crash vulnerability and improving code maintainability by 30%.'
    ]
  },
  {
    id: 'icici-imobile-ecosystem',
    slug: 'icici-imobile',
    route: '/projects/icici-imobile',
    title: 'ICICI iMobile Banking',
    subtitle: 'Modular Banking Architecture & Reusable DFF Design System for 50M+ Users',
    category: 'Banking',
    company: 'Tata Consultancy Services',
    role: 'Information Technology Analyst (Senior Android Developer)',
    teamSize: 'Managed pod of 3 developers; coordinated with 15+ feature pods',
    period: 'May 2023 - Dec 2024',
    impactMetric: '40% Faster UI Feature Integration',
    userScale: '50M+ Active Banking Customers',
    heroImage: 'projects/icici/2.png',
    screenshots: [
      {
        url: 'projects/icici/1.png',
        title: 'iMobile Launch & Brand Splash Screen',
        caption: 'Clean splash entrypoint and security validation bootstrap for ICICI\'s official mobile banking application.'
      },
      {
        url: 'projects/icici/2.png',
        title: 'Banking Dashboard & Quick Actions Hub',
        caption: 'Unified account dashboard showing masked savings account cards, balance reveal, quick actions (UPI, Scan QR, Bank Transfer), and recent contact payees.'
      },
      {
        url: 'projects/icici/3.png',
        title: 'Upcoming Bills & Bookings Hub',
        caption: 'Automated bill fetch reminder feed (Airtel, BESCOM utilities) and integrated travel booking schedule (VRL bus).'
      },
      {
        url: 'projects/icici/4.png',
        title: 'Cashflow Analytics & Budget Planner',
        caption: 'Interactive monthly income vs. expense tracking charts with timeframe toggles (1 year, 6 months, 1 month, week) and UPI inflow breakdowns.'
      },
      {
        url: 'projects/icici/5.png',
        title: 'Mobile Recharge & Multi-Payment Bottom Sheet',
        caption: 'DFF component bottom sheet for operator circle bill payments with UPI account selector, debit/credit options, and iCash redemption.'
      },
      {
        url: 'projects/icici/6.png',
        title: 'Payment Complete Confirmation Receipt',
        caption: 'Verified payment completion screen with unique order ID, telecom operator reference ID, transaction date, and share receipt controls.'
      },
      {
        url: 'projects/icici/7.png',
        title: 'Scan & Pay UPI QR Viewfinder',
        caption: 'Optimized camera viewfinder with hardware flashlight toggle, gallery QR upload, and interoperable BHIM UPI barcode recognition.'
      }
    ],
    summary: 'Directed Android feature engineering for India’s premier mobile banking platform encompassing 400+ financial services. Designed, published, and maintained the internal Design Framework Foundation (DFF) Maven library used across multiple engineering pods.',
    problem: 'With 400+ banking services built by separate feature pods, teams were frequently re-writing common UI components (account pickers, PIN pads, amount inputs) with slight inconsistencies. This caused bloated APK sizes, fragmented user experiences, and high regression overhead during OS upgrades.',
    myRole: 'Served as Pod Lead and Core Design System Author. Managed a pod of 3 developers, published reusable DFF Maven packages, conducted code reviews, and enforced strict PR quality to maintain 99.9% crash-free production stability across 50M+ users.',
    technicalApproach: {
      architecture: [
        'Multi-Module Gradle Architecture separating core UI from feature modules',
        'Centralized Design Framework Foundation (DFF) published as versioned Maven AAR packages',
        'Repository Pattern with encrypted RoomDB local database',
        'Strict CI/CD verification with automated lint and Espresso tests'
      ],
      decisions: [
        'Decoupled the design system (DFF) into an isolated Maven artifact, allowing feature pods to upgrade UI dependencies independently.',
        'Created composable atomic widgets with built-in accessibility, error states, and theme tokens.',
        'Enforced strict binary backwards compatibility to prevent breaking changes when updating core library widgets.'
      ],
      tradeOffs: [
        'Maintained backwards-compatible API shims across release cycles so 15+ pods could upgrade at their own pace without blocking release schedules.'
      ]
    },
    impactStats: [
      { label: 'UI Dev Speedup', value: '+40%', context: 'Reduced implementation time for standardized banking screens' },
      { label: 'Active Users', value: '50M+', context: 'Retail and enterprise banking customers across India' },
      { label: 'Crash-Free Rate', value: '99.9%', context: 'Consistently maintained across hundreds of Android device models' },
      { label: 'Banking Services', value: '400+', context: 'Supported across accounts, loans, deposits, and cards' }
    ],
    challengeAndSolution: {
      challengeTitle: 'Maintaining Zero-Breaking-Change Releases for 15+ Distributed Pods',
      challengeDetails: 'When updating core UI components (such as form validation styles or Android 14 predictive back support), an accidental ABI or API signature break could block sprint releases for dozens of developers.',
      solutionTitle: 'Binary Compatibility Validation & Phased Deprecation Cycles',
      solutionDetails: 'Introduced the Android Binary Compatibility Validator plugin in Gradle to automatically flag public API signature changes during pull requests. Used Kotlin @Deprecated annotations across two release cycles before retiring older widget signatures.'
    },
    techStack: ['Kotlin', 'Android SDK', 'Maven Artifacts', 'Design System (DFF)', 'Multi-Module Gradle', 'RoomDB', 'Retrofit 2', 'GitLab CI/CD', 'Espresso'],
    keyContributions: [
      'Engineered and published reusable Design Framework (DFF) Maven packages utilized across 15+ engineering pods, cutting UI development time by 40%.',
      'Standardized security-critical components such as biometric authorization sheets, masked card inputs, and custom keypad dialogs.',
      'Managed a pod of 3 developers, enforcing rigorous PR review standards and maintaining 99.9% crash-free production uptime across 50M+ active users.'
    ]
  },
  {
    id: 'entercard-remember-hub',
    slug: 're-member',
    route: '/projects/re-member',
    title: 'EnterCard (re:member)',
    subtitle: 'Credit Card Management, Swedish BankID Authentication & Swish Invoices',
    category: 'FinTech',
    company: 'Capgemini India Ltd',
    role: 'Software Development Consultant',
    teamSize: 'Led Android pod of 4 engineers working with Scandinavian product teams',
    period: 'July 2021 - May 2023',
    impactMetric: '20% Faster App Launch',
    userScale: '500,000+ Active Cardholders (Sweden, Norway, Denmark)',
    heroImage: 'projects/entercard/2.webp',
    screenshots: [
      {
        url: 'projects/entercard/1.webp',
        title: 're:member App Launch & Swedish BankID Login',
        caption: 'Biometric and digital identity authentication gateway integrating official Swedish BankID for secure credit card access.'
      },
      {
        url: 'projects/entercard/2.webp',
        title: 'Credit Card & Loan Overview (Allt på ett ställe)',
        caption: 'Centralized credit limit tracker displaying utilized vs. available credit (15 000 kr / 45 000 kr) with quick navigation to cards, loans, and invoices.'
      },
      {
        url: 'projects/entercard/3.webp',
        title: 'Card Services & Transactions (Kortöversikt)',
        caption: 'Card management hub with actions to raise credit limits, add to digital wallets (Google Pay / Apple Pay), block cards, and inspect live merchant transactions (SL Stockholm, Bauhaus).'
      },
      {
        url: 'projects/entercard/4.webp',
        title: 'Invoice & Billing Overview (Fakturaöversikt with Swish)',
        caption: 'Monthly statement breakdown with unpaid status tracking, minimum due calculations, and integrated one-tap Swish payment gateway.'
      }
    ],
    summary: 'Led the Android developer pod for EnterCard’s re:member credit card management platform across Sweden, Norway, and Denmark. Drove codebase migration from Java to Kotlin, built Google Maps geofencing features, developed JavaScript Bridge plugins, and automated FigmaTokens design sync.',
    problem: 'The legacy Java/MVP codebase suffered from slow cold launch times, inconsistent UI tokens across iOS/Android/Web platforms, and high battery consumption from background location polling for merchant partner offers.',
    myRole: 'Served as Android Pod Lead. Spearheaded Java-to-Kotlin refactoring (boosting launch speed by 20%), engineered debounced geofencing algorithms, built JavaScript Bridge solutions for hybrid WebView modules, and automated FigmaToken design sync.',
    technicalApproach: {
      architecture: [
        'Modern MVVM Architecture with reactive Flow & LiveData observers',
        'Google Maps SDK & FusedLocationProviderClient with custom geofence debouncing',
        'JavaScript Bridge & Native JS Plugins binding WebView components to native Android modules',
        'Android BiometricPrompt API with AES-256 hardware keystore encryption',
        'Automated FigmaTokens JSON parser generating Android color and typography resources'
      ],
      decisions: [
        'Migrated Java code to Kotlin incrementally without halting ongoing feature delivery.',
        'Automated the design token pipeline to generate Android XML and Compose color resources directly from Figma token commits.',
        'Implemented a location debouncer with a 15-minute cooldown per merchant category to eliminate battery drain.'
      ],
      tradeOffs: [
        'Used a hybrid geofencing strategy combining passive location updates with hardware geofences to balance battery life with timely offer triggers.'
      ]
    },
    impactStats: [
      { label: 'Cold Launch Speed', value: '+20%', context: 'Achieved through Java-to-Kotlin refactoring and optimized dependency graphs' },
      { label: 'Cardholders', value: '500K+', context: 'Active credit card users across Sweden, Norway, and Denmark' },
      { label: 'Design Sync', value: 'Automated', context: 'Eliminated manual UI styling drift with FigmaTokens build integration' },
      { label: 'Tech Debt Fixed', value: '40+ Issues', context: 'Resolved critical issues during rapid-response support for Ola Electric' }
    ],
    challengeAndSolution: {
      challengeTitle: 'Eliminating GPS Multipath Jitter & Battery Drain in Urban Centers',
      challengeDetails: 'In dense Scandinavian city centers (Stockholm, Oslo), GPS multipath reflections caused continuous boundary triggers for merchant partner zones, draining battery life and spamming users with duplicate alerts.',
      solutionTitle: 'Fused Location Geofencing with Hysteresis Radius & Debounce Cooldowns',
      solutionDetails: 'Engineered a location manager wrapper that dynamically adjusts geofence responsiveness based on user activity recognition (STILL vs WALKING). Applied a 15-minute notification cooldown per merchant category and an inner hysteresis boundary to eliminate jitter triggers.'
    },
    techStack: ['Kotlin', 'Java', 'MVVM', 'Google Maps SDK', 'Geofencing', 'JavaScript Bridge', 'Figma Tokens', 'Biometric Prompt', 'OAuth2', 'Crashlytics'],
    keyContributions: [
      'Led the architecture migration from legacy Java/MVP to Kotlin/MVVM, improving application launch speed by 20%.',
      'Engineered the automated FigmaTokens workflow, ensuring 100% design fidelity between Figma specs and Android layouts.',
      'Developed custom JavaScript Bridge plugins binding WebView features to native modules for hybrid Scandinavian banking flows.'
    ]
  }
];

export const ALL_PROJECTS = CASE_STUDIES;
