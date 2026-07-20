export interface AIWorkflowPillar {
  title: string;
  category: string;
  iconName: string;
  description: string;
  traditionalApproach: string;
  aiDrivenApproach: string;
  productivityGain: string;
  toolsUsed: string[];
  exampleUseCases: string[];
}

export const AI_WORKFLOW_PILLARS: AIWorkflowPillar[] = [
  {
    title: 'Legacy Refactoring & Modernization',
    category: 'Architecture Overhaul',
    iconName: 'RefreshCw',
    description: 'Transforming legacy Java / MVP codebase into idiomatic Kotlin and Jetpack Compose stateful UIs.',
    traditionalApproach: 'Manual line-by-line rewrite taking weeks with high risk of introducing subtle regression bugs.',
    aiDrivenApproach: 'Utilizing Cursor AI & LLM context prompts to generate structured MVVM patterns, state interfaces, and preview wrappers in minutes.',
    productivityGain: '3.5x Faster Codebase Migration',
    toolsUsed: ['Cursor AI', 'Claude 3.5 Sonnet', 'Android Studio AI'],
    exampleUseCases: [
      'Converting Java AsyncTasks into Kotlin Coroutines & Flow',
      'Refactoring legacy XML layouts into declarative Jetpack Compose composables',
      'Generating Hilt Dependency Injection modules from manual Dagger graphs'
    ]
  },
  {
    title: 'Automated Test Generation & Edge Cases',
    category: 'Quality Assurance',
    iconName: 'CheckCircle2',
    description: 'Generating comprehensive Unit & UI test suites to achieve 90%+ branch coverage.',
    traditionalApproach: 'Writing boiler-plate mock setup with Mockito line-by-line, often skipping boundary edge cases.',
    aiDrivenApproach: 'Prompting LLMs with state machine definitions to auto-generate parameterized JUnit 5 & Mockito test matrices for edge error states.',
    productivityGain: '60% Reduction in Test Writing Time',
    toolsUsed: ['GitHub Copilot', 'ChatGPT', 'JUnit 5', 'Mockito'],
    exampleUseCases: [
      'Generating Mockito responses for network timeout and HTTP 500 scenarios',
      'Creating Compose UI test selectors for dynamic list rendering',
      'Simulating RoomDB migration edge cases'
    ]
  },
  {
    title: 'Edge ML & TensorFlow Lite Acceleration',
    category: 'Mobile AI Integration',
    iconName: 'Cpu',
    description: 'Deploying optimized machine learning models for real-time computer vision on mobile hardware.',
    traditionalApproach: 'Manual quantization tuning, custom JNI bindings, and trial-and-error frame buffers.',
    aiDrivenApproach: 'Leveraging Auto-ML pipelines and AI prompt engineering to profile model latency, select INT8 quantization, and wrap CameraX streams cleanly.',
    productivityGain: 'Instant On-Device Inference Setup',
    toolsUsed: ['TensorFlow Lite', 'Auto ML', 'Cursor AI'],
    exampleUseCases: [
      'Real-time document recognition in Proteus Vision Sense app',
      'Intelligent image preprocessing pipelines using Android RenderScript / NDK',
      'Low-power background sensor inferencing'
    ]
  },
  {
    title: 'Instant Documentation & Architecture Diagrams',
    category: 'Team Communication',
    iconName: 'FileText',
    description: 'Converting complex Android multi-module architectures into interactive Mermaid diagrams and developer guides.',
    traditionalApproach: 'Outdated wiki pages requiring manual diagramming tools and hours of formatting.',
    aiDrivenApproach: 'Feeding codebase AST maps to LLMs to automatically generate up-to-date Mermaid.js diagrams and KDoc API documentation.',
    productivityGain: 'Self-Updating Documentation',
    toolsUsed: ['Claude 3.5', 'Mermaid.js', 'ChatGPT'],
    exampleUseCases: [
      'Auto-generating sequence diagrams for OAuth2 token refresh flows',
      'Creating Maven package integration guides for the DFF UI library',
      'Standardizing PR review guidelines and team onboarding notes'
    ]
  }
];
