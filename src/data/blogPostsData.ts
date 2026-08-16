export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: 'Android Architecture' | 'Performance' | 'Hybrid Architecture' | 'Edge ML';
  tags: string[];
  content: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'migrating-50m-users-compose',
    title: 'Architecting for 50 Million Users: Multi-Module Design Systems & Clean Architecture',
    excerpt: 'Lessons learned building reusable UI component libraries (DFF) and migrating legacy payment flows to Kotlin MVVM in high-traffic banking applications.',
    date: 'June 2024',
    readTime: '5 min read',
    category: 'Android Architecture',
    tags: ['Jetpack Compose', 'MVVM', 'Clean Architecture', 'Design Systems', 'Maven'],
    content: `
### Overview

When supporting mobile banking applications serving over 50 million active users (such as ICICI iMobile and GCash), architectural decisions directly impact production stability. A single unhandled state or memory leak can affect millions of transactions.

### 1. The Multi-Module Design System Approach (DFF)

Building an internal design framework for enterprise banking requires decoupling UI widgets from business logic:
- **Token Layer**: Pure color, typography, and spacing tokens matching design specs.
- **Component Layer**: Reusable, accessible widgets (AccountSelector, MaskedPinInput, AmountKeypad).
- **Maven Packaging**: Published as versioned AAR packages so 15+ feature pods can consume identical UI building blocks without code duplication.

### 2. State Management with StateFlow

Replacing legacy Presenters with Kotlin Coroutines and immutable StateFlow ensures strict unidirectional data flow (UDF), preventing concurrent state mutations during unstable network handoffs.

### 3. Quantified Outcomes
- 40% reduction in UI development time across feature pods.
- 30% reduction in technical debt across payment modules.
- 99.9% crash-free production rate maintained.
    `
  },
  {
    id: 'javascript-bridge-hybrid-apps',
    title: 'Building a Secure JavaScript Bridge for Hybrid Android Enterprise Apps',
    excerpt: 'How to build a clean native-to-web JS Plugin architecture allowing WebView-hosted modules to securely access device hardware, biometrics, and local storage.',
    date: 'February 2024',
    readTime: '6 min read',
    category: 'Hybrid Architecture',
    tags: ['WebView', 'JavaScript Bridge', 'Security', 'Android SDK', 'Kotlin'],
    content: `
### Why Hybrid WebView Flows Matter

In large-scale FinTech applications, certain promotional features, partner storefronts, or onboarding flows are hosted as web applications to allow instant over-the-air updates without submitting new app releases to Google Play.

### The Challenge

Allowing web pages to interact with native Android APIs (Camera, Biometrics, Keystore, Push Notifications) requires a secure bridge that prevents malicious script injections and memory leaks.

### Implementation Blueprint

1. **Strict Origin Validation**: Always verify the requesting URL hostname against an allowlist before executing privileged native operations.
2. **Asynchronous JS Callback Protocol**: Never block the WebView UI thread. Use Kotlin Coroutines on background dispatchers and evaluate callbacks asynchronously.
3. **Plugin Registry Pattern**: Separate native capabilities into modular JS plugins (e.g. BiometricPlugin, CameraScannerPlugin, SecureStoragePlugin) rather than one monolithic interface.
    `
  },
  {
    id: 'on-device-tflite-edge-ml',
    title: 'On-Device Computer Vision: Running Quantized TensorFlow Lite on Android',
    excerpt: 'Implementing real-time object classification with CameraX and INT8 quantized TensorFlow Lite models without cloud latency or active network dependencies.',
    date: 'November 2023',
    readTime: '7 min read',
    category: 'Edge ML',
    tags: ['TensorFlow Lite', 'CameraX', 'Edge ML', 'RoomDB', 'Performance'],
    content: `
### Offline-First Edge Intelligence

In field-worker and document-scanning applications, waiting for server-side image recognition introduces unacceptable latency and fails completely in low-connectivity environments.

### Optimization Strategies

1. **Model Quantization (INT8)**: Converting floating-point weights to 8-bit integers reduced model size by ~75% and boosted inference speeds on mobile CPUs and neural processing units.
2. **CameraX ImageAnalysis Pipeline**: Processing frames in background thread executors to maintain a smooth 60fps camera preview without dropping frames.
3. **RoomDB Offline Sync**: Caching scan metadata locally and batch-uploading upon reconnection.
    `
  }
];
