export interface SampleQuestion {
  id: string;
  question: string;
  category: 'Overview' | 'Experience' | 'AI Engineering' | 'Architecture';
  answer: string;
}

export const SAMPLE_QUESTIONS: SampleQuestion[] = [
  {
    id: 'summary',
    question: 'Who is Aquib Rashid Shaikh? Give a brief summary.',
    category: 'Overview',
    answer: 'Aquib Rashid Shaikh is a Senior Android Developer & Team Lead with 8+ years of experience building high-traffic applications in banking, payments, and enterprise domains. He has spearheaded mobile app features for ICICI iMobile (50M+ users), GCash (GTourist, Digital Tax Refund, Request Payment), and EnterCard credit cards, with deep expertise in Kotlin, Jetpack Compose, Clean Architecture, and AI-driven development workflows.'
  },
  {
    id: 'tcs-icici',
    question: 'What did Aquib accomplish at Tata Consultancy Services (TCS)?',
    category: 'Experience',
    answer: 'At TCS (May 2023 - Dec 2024), Aquib served as an I.T. Analyst (Senior Android Developer). He directed feature engineering for the ICICI iMobile banking app (400+ services, 50M+ users), built and published a reusable Design Framework (DFF) as Maven packages (cutting UI integration time by 40%), and managed a developer pod maintaining a 99.9% crash-free rate.'
  },
  {
    id: 'perennial-gcash',
    question: 'What is his current role at Perennial Systems?',
    category: 'Experience',
    answer: 'At Perennial Systems (Dec 2024 - Present), Aquib is a Senior Android Developer & Team Lead spearheading feature development for the GCash app (including GTourist, Digital Tax Refund, and Request Payment modules) using Kotlin, Jetpack Compose, and MVVM. He architected the migration of legacy payment modules from MVP to MVVM, reducing technical debt by 30%.'
  },
  {
    id: 'ai-workflow',
    question: 'How does Aquib integrate AI into his engineering process?',
    category: 'AI Engineering',
    answer: 'Aquib is an AI-driven engineer who leverages tools like Cursor AI, ChatGPT, Claude, and GitHub Copilot throughout the software lifecycle: accelerating legacy Java/MVP to Kotlin/Compose migrations, auto-generating unit tests for edge cases, creating architecture diagrams, and deploying on-device ML models via TensorFlow Lite.'
  },
  {
    id: 'compose-architecture',
    question: 'What is Aquib\'s experience with Jetpack Compose & Architecture?',
    category: 'Architecture',
    answer: 'Aquib specializes in Clean Architecture, MVVM, and Jetpack Compose stateful UIs. He has designed modular unidirectional data flows with Kotlin Coroutines & StateFlow, implemented Hilt/Dagger dependency injection, built design systems, and implemented offline-first database caching with RoomDB.'
  },
  {
    id: 'tflite-experience',
    question: 'Has he worked with Machine Learning or TensorFlow Lite on Android?',
    category: 'AI Engineering',
    answer: 'Yes! As the sole Android Developer at Proteus Technologies, he architected "Vision Sense"—an enterprise app that embedded TensorFlow Lite models directly on Android hardware for real-time computer vision and object detection, achieving low latency and offline execution.'
  },
  {
    id: 'contact-hiring',
    question: 'How can recruiters or engineering leads contact Aquib for opportunities?',
    category: 'Overview',
    answer: 'Aquib is based in Mumbai, India and can be reached directly via Email at Shaikhaquib119@gmail.com, Phone/WhatsApp at +91 84259 18611, LinkedIn at aquib-shaikh-200bba127, or GitHub at shaikhaquib. You can also download his PDF Resume directly from this site!'
  }
];

export function getAIResponse(userQuery: string): string {
  const q = userQuery.toLowerCase().trim();

  // Greetings
  if (q.match(/^(hi|hello|hey|greetings|hola|good morning|good afternoon|good evening)/)) {
    return `Hello! 👋 I'm Aquib's AI Resume Assistant. I can help you evaluate his 8+ years of Senior Android experience, key projects (ICICI 50M+ users, GCash, TFLite), or contact details. What would you like to know?`;
  }

  // Summary / Bio / Who is
  if (q.includes('summary') || q.includes('who is') || q.includes('about') || q.includes('bio') || q.includes('profile')) {
    return SAMPLE_QUESTIONS.find(item => item.id === 'summary')?.answer || '';
  }

  // TCS / ICICI
  if (q.includes('tcs') || q.includes('icici') || q.includes('imobile') || q.includes('50m') || q.includes('tata')) {
    return SAMPLE_QUESTIONS.find(item => item.id === 'tcs-icici')?.answer || '';
  }

  // Perennial / GCash / GTourist / Tax Refund
  if (q.includes('perennial') || q.includes('gcash') || q.includes('gtourist') || q.includes('tax') || q.includes('current')) {
    return SAMPLE_QUESTIONS.find(item => item.id === 'perennial-gcash')?.answer || '';
  }

  // AI / Cursor / Workflows
  if (q.includes('ai') || q.includes('cursor') || q.includes('copilot') || q.includes('gpt') || q.includes('workflow') || q.includes('claude')) {
    return SAMPLE_QUESTIONS.find(item => item.id === 'ai-workflow')?.answer || '';
  }

  // Compose / Kotlin / Architecture / MVVM
  if (q.includes('compose') || q.includes('kotlin') || q.includes('architecture') || q.includes('mvvm') || q.includes('clean') || q.includes('hilt') || q.includes('coroutine')) {
    return SAMPLE_QUESTIONS.find(item => item.id === 'compose-architecture')?.answer || '';
  }

  // TensorFlow / ML / AI Vision
  if (q.includes('tensorflow') || q.includes('tflite') || q.includes('ml') || q.includes('vision') || q.includes('proteus')) {
    return SAMPLE_QUESTIONS.find(item => item.id === 'tflite-experience')?.answer || '';
  }

  // Capgemini / EnterCard / Ola Electric
  if (q.includes('capgemini') || q.includes('entercard') || q.includes('remember') || q.includes('ola')) {
    return `At Capgemini (2021-2023), Aquib led the Android pod for the EnterCard (re:member) credit card app serving 500,000+ active users across Scandinavia. He drove a Java->Kotlin migration that improved app launch speed by 20% and resolved 40+ tech debt issues for Ola Electric.`;
  }

  // Education / Degree
  if (q.includes('education') || q.includes('degree') || q.includes('university') || q.includes('msc') || q.includes('bsc')) {
    return `Aquib holds a Master of Science in Information Technology (M.Sc. IT, 2019-2021) and a Bachelor of Science in Information Technology (B.Sc. IT, 2014-2017) from Mumbai University.`;
  }

  // Certifications / Jira / Agile
  if (q.includes('certif') || q.includes('jira') || q.includes('agile') || q.includes('coursera')) {
    return `Aquib holds Coursera certifications in "Agile with Atlassian Jira" (May 2022) and "Agile Software Development" (Dec 2021).`;
  }

  // Location / Relocation
  if (q.includes('location') || q.includes('mumbai') || q.includes('relocat') || q.includes('remote')) {
    return `Aquib is based in Mumbai, Maharashtra, India. He is experienced in leading remote and hybrid engineering teams across international projects.`;
  }

  // Contact / Email / Phone / Hire
  if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('hire') || q.includes('reach') || q.includes('interview') || q.includes('resume')) {
    return SAMPLE_QUESTIONS.find(item => item.id === 'contact-hiring')?.answer || '';
  }

  // Salary / Notice Period / Availability
  if (q.includes('notice') || q.includes('salary') || q.includes('availab') || q.includes('join')) {
    return `Aquib is currently Senior Android Lead & Team Lead at Perennial Systems. For notice period, salary discussions, or interview scheduling, please reach out directly to him at Shaikhaquib119@gmail.com or +91 84259 18611.`;
  }

  // Fallback for Random / Unexpected Message: Friendly, Helpful, & Guiding!
  return `I'm Aquib's AI Resume Assistant! While I might not have an answer for "${userQuery}", I can answer anything about Aquib's 8+ years of Senior Android experience, ICICI iMobile (50M+ users), GCash, Jetpack Compose, AI tools, or how to contact him. Try asking:
• "Tell me about his work on GCash or ICICI iMobile"
• "What is his experience with Jetpack Compose & Clean Architecture?"
• "How does he use Cursor & AI tools in daily coding?"
• "How can I contact Aquib for a Senior Lead role?"`;
}
