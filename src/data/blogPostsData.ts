export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: 'Android Architecture' | 'AI Engineering' | 'Performance' | 'Kotlin';
  tags: string[];
  content: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'migrating-50m-users-compose',
    title: 'Architecting for 50 Million Users: Migrating Banking Apps to Jetpack Compose',
    excerpt: 'Lessons learned spearheading UI library modernization and architecture overhauls in high-traffic FinTech applications.',
    date: 'June 18, 2026',
    readTime: '6 min read',
    category: 'Android Architecture',
    tags: ['Jetpack Compose', 'MVVM', 'FinTech', 'Kotlin', 'Clean Architecture'],
    content: `
### Introduction

When dealing with a mobile banking application serving over 50 million active users (such as ICICI iMobile or GCash financial services), every architectural decision carries immense weight. A single uncaught regression or rendering memory leak can impact millions of daily transactions.

In this article, I share key insights from building reusable UI component libraries (DFF) and migrating legacy MVP payment flows to Jetpack Compose and MVVM.

### 1. The Multi-Module Design System Approach

Building a design framework (DFF) for enterprise apps requires decoupling visual components from business logic:
* Token Layer: Pure color, typography, and shape tokens.
* Component Layer: Stateless Jetpack Compose composables (DffPrimaryButton, DffInputField).
* Packaging: Published as internal Maven packages so multiple developer pods can consume identical UI building blocks.

### 2. State Management with StateFlow

Replacing RxJava single-events or legacy LiveData with Kotlin StateFlow ensures strict unidirectional data flow (UDF):

sealed interface PaymentUiState {
    data object Idle : PaymentUiState
    data object Processing : PaymentUiState
    data class Success(val transactionId: String) : PaymentUiState
    data class Error(val message: String) : PaymentUiState
}

### 3. Measuring Impact
- 40% Reduction in UI integration time for new sprint features.
- 30% Reduction in technical debt across payment modules.
- 99.9% Crash-Free Uptime maintained.
    `
  },
  {
    id: 'ai-driven-android-development',
    title: 'Supercharging Mobile Development with AI-Native Workflows: Cursor & TFLite',
    excerpt: 'How AI tools (Cursor AI, ChatGPT, Claude) transform daily Android engineering while preserving code quality and architectural integrity.',
    date: 'May 10, 2026',
    readTime: '8 min read',
    category: 'AI Engineering',
    tags: ['AI Engineering', 'Cursor AI', 'TensorFlow Lite', 'Kotlin', 'Prompt Engineering'],
    content: `
### The AI-Augmented Engineer

Artificial Intelligence is no longer just a autocomplete tool; it is a collaborative peer reviewer, test generator, and architecture accelerator.

### Core Workflow Strategies

#### A. Prompt Engineering for Complex State Machines
When building complex financial checkout flows or edge TensorFlow Lite pipelines, I write structured prompts defining:
1. Expected Sealed Class State Machine.
2. Threading Model (Dispatchers.IO vs Dispatchers.Default).
3. Unit Test Mocking strategy.

#### B. On-Device AI with TensorFlow Lite
In the Proteus Vision Sense app, we deployed TensorFlow Lite models directly on Android hardware:
* INT8 Model Quantization for low latency.
* CameraX YUV to RGB bitmap conversions in background coroutines.
* Real-time local inference without requiring active cloud connectivity.

### Conclusion
By blending 8+ years of deep Android domain knowledge with AI assistance, we deliver enterprise-grade features in fraction of the time without compromising security or software architecture.
    `
  }
];
