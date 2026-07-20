export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'FinTech' | 'Banking' | 'AI / ML' | 'Enterprise';
  company: string;
  period: string;
  impactMetric: string;
  userScale: string;
  description: string;
  architecture: string[];
  techStack: string[];
  keyContributions: string[];
  challenges: string;
  solution: string;
  codeSnippet?: {
    language: string;
    filename: string;
    code: string;
  };
  imageGradient: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'gcash-app',
    title: 'GCash Super App',
    subtitle: 'Features: GTourist, Digital Tax Refund, & Request Payment',
    category: 'FinTech',
    company: 'Perennial Systems',
    period: '2024 - Present',
    impactMetric: '30% Tech Debt Reduction',
    userScale: 'Millions of Active Users',
    description: 'Spearheaded Android feature engineering for the GCash mobile app ecosystem, architecting core modules including GTourist (international tourist services), Digital Tax Refund, and Request Payment utilizing Jetpack Compose and MVVM Clean Architecture.',
    architecture: ['MVVM Pattern', 'Clean Architecture', 'Jetpack Compose UI', 'Hilt DI', 'Coroutines & Flow'],
    techStack: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Clean Architecture', 'StateFlow', 'Retrofit', 'Material 3'],
    keyContributions: [
      'Architected the full migration of legacy GCash payment modules from Java/MVP to Kotlin/MVVM.',
      'Engineered the GTourist & Digital Tax Refund feature modules, enabling frictionless international refund claims.',
      'Achieved 100% sprint milestone delivery through cross-domain leadership across iOS, Backend, and QA teams.'
    ],
    challenges: 'Legacy GCash codebase had tightly coupled MVP components across payment modules, leading to technical debt, slow launch speeds, and testability hurdles.',
    solution: 'Introduced a modular MVVM layer powered by Jetpack Compose UI state management and StateFlow, isolating network logic and enabling unit test coverage across all business use cases.',
    codeSnippet: {
      language: 'kotlin',
      filename: 'DigitalTaxViewModel.kt',
      code: `class DigitalTaxViewModel @Inject constructor(
    private val getTaxRefundUseCase: GetTaxRefundUseCase,
    private val analyticsTracker: AnalyticsTracker
) : ViewModel() {

    private val _uiState = MutableStateFlow<TaxUiState>(TaxUiState.Idle)
    val uiState: StateFlow<TaxUiState> = _uiState.asStateFlow()

    fun submitRefundClaim(claimId: String) {
        viewModelScope.launch {
            _uiState.value = TaxUiState.Loading
            getTaxRefundUseCase(claimId)
                .catch { error -> _uiState.value = TaxUiState.Error(error.message) }
                .collect { refund ->
                    analyticsTracker.logRefundClaimed(refund.amount)
                    _uiState.value = TaxUiState.Success(refund)
                }
        }
    }
}`
    },
    imageGradient: 'from-emerald-900/60 via-obsidian-900 to-obsidian-950'
  },
  {
    id: 'icici-imobile',
    title: 'ICICI iMobile Banking Ecosystem',
    subtitle: 'Official Mobile Banking App for 50M+ Users',
    category: 'Banking',
    company: 'Tata Consultancy Services',
    period: '2023 - 2024',
    impactMetric: '40% Faster Integration Time',
    userScale: '50M+ Active Banking Customers',
    description: 'Directed Android feature engineering for India’s premier mobile banking platform encompassing 400+ financial services, funds transfer, credit management, and real-time alerts.',
    architecture: ['Multi-Module Architecture', 'Reusable Design Library (DFF)', 'Repository Pattern', 'Maven Artifacts'],
    techStack: ['Kotlin', 'Android SDK', 'Maven', 'RoomDB', 'Retrofit', 'Espresso', 'GitLab Workflows'],
    keyContributions: [
      'Engineered and published reusable Design Framework (DFF) Maven packages utilized across multiple developer pods.',
      'Maintained a 99.9% crash-free application rate across 50 million active users through strict PR reviews.',
      'Managed a pod of 3 developers, accelerating UI feature delivery by 40%.'
    ],
    challenges: 'Supporting 400+ disparate services in a single app while ensuring absolute design consistency and 99.9%+ crash-free uptime.',
    solution: 'Designed and published an internal Design System Framework (DFF) as versioned Maven artifacts, allowing team members to integrate tested UI widgets with plug-and-play ease.',
    codeSnippet: {
      language: 'kotlin',
      filename: 'DffButtonWidget.kt',
      code: `@Composable
fun DffPrimaryButton(
    text: String,
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    enabled: Boolean = true
) {
    Button(
        onClick = onClick,
        modifier = modifier
            .fillMaxWidth()
            .height(52.dp),
        enabled = enabled,
        shape = RoundedCornerShape(12.dp),
        colors = ButtonDefaults.buttonColors(
            containerColor = DffTheme.colors.primaryOrange,
            contentColor = Color.White
        )
    ) {
        Text(
            text = text.uppercase(),
            style = DffTheme.typography.buttonLabel
        )
    }
}`
    },
    imageGradient: 'from-cyber-900/60 via-obsidian-900 to-obsidian-950'
  },
  {
    id: 'vision-sense-tflite',
    title: 'Vision Sense (TensorFlow Lite ML)',
    subtitle: 'On-Device Computer Vision & Edge Intelligence',
    category: 'AI / ML',
    company: 'Proteus Technologies',
    period: '2019 - 2021',
    impactMetric: '>50% Crash Reduction',
    userScale: 'Enterprise Operations',
    description: 'Built a full-stack mobile AI computer vision application leveraging TensorFlow Lite models directly on Android devices for offline object detection and document scanning.',
    architecture: ['On-Device Inference', 'TensorFlow Lite Interpreter', 'Offline-First Database', 'CameraX API'],
    techStack: ['TensorFlow Lite', 'Kotlin', 'CameraX', 'RoomDB', 'Crashlytics', 'AutoML'],
    keyContributions: [
      'Integrated edge ML models capable of real-time object classification under low latency.',
      'Designed offline-first local cache synchronization with RoomDB to enable un-interrupted field operations.',
      'Reduced total application crash rate by >50% via Crashlytics telemetry.'
    ],
    challenges: 'Executing heavy machine learning models on mid-tier Android devices caused frame rate drops and high battery drain.',
    solution: 'Optimized TFLite model quantization (INT8), coupled with CameraX image analysis pipelines on a dedicated background thread execution pool.',
    codeSnippet: {
      language: 'kotlin',
      filename: 'TFLiteObjectDetector.kt',
      code: `class TFLiteObjectDetector(
    private val context: Context,
    private val modelPath: String = "vision_model_quant.tflite"
) {
    private var interpreter: Interpreter? = null

    init {
        val model = FileUtil.loadMappedFile(context, modelPath)
        val options = Interpreter.Options().apply {
            setNumThreads(4)
            setUseNNAPI(true)
        }
        interpreter = Interpreter(model, options)
    }

    fun detect(bitmap: Bitmap): List<DetectionResult> {
        val tensorImage = TensorImage.fromBitmap(bitmap)
        val outputMap = HashMap<Int, Any>()
        // Execute fast edge inference...
        return parseResults(outputMap)
    }
}`
    },
    imageGradient: 'from-purple-900/60 via-obsidian-900 to-obsidian-950'
  },
  {
    id: 'entercard-remember',
    title: 'EnterCard (re:member) Financial Hub',
    subtitle: 'Credit Card Management App for European Markets',
    category: 'FinTech',
    company: 'Capgemini India',
    period: '2021 - 2023',
    impactMetric: '20% Launch Speed Boost',
    userScale: '500,000+ Active Cardholders',
    description: 'Led the Android development pod responsible for credit card transactions, account overview, e-invoices, and security management across Scandinavian markets.',
    architecture: ['MVVM Architecture', 'Java to Kotlin Migration', 'FigmaToken Integration', 'OAuth2 / Security'],
    techStack: ['Kotlin', 'Java', 'MVVM', 'Figma Tokens', 'Biometric Auth', 'Crashlytics'],
    keyContributions: [
      'Drove complete codebase overhaul migrating Java & legacy MVP to Kotlin & MVVM, improving launch times by 20%.',
      'Integrated FigmaToken automation for unified design-token sync across iOS, Web, and Android.',
      'Resolved 40+ critical technical debt issues during a rapid-response support initiative for Ola Electric.'
    ],
    challenges: 'Ensuring absolute banking security and regulatory compliance while synchronizing design tokens across cross-platform teams.',
    solution: 'Implemented FigmaToken automation combined with Android BiometricPrompt security wrappers and robust OAuth2 token refreshes.',
    imageGradient: 'from-amber-900/60 via-obsidian-900 to-obsidian-950'
  }
];
