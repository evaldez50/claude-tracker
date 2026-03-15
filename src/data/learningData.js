// ── TRACKS & MODULES ──────────────────────────────────────────────────────────

export const TRACKS = [
  {
    id: 'track1',
    name: 'AI Fluency',
    emoji: '🧠',
    color: '#E8A87C',
    bgColor: 'rgba(232,168,124,0.12)',
    borderColor: 'rgba(232,168,124,0.3)',
    phases: [
      {
        id: 'phase1',
        name: 'Fase 1',
        weekRange: 'Semanas 1–2',
        weekStart: 1,
        weekEnd: 2,
        modules: [
          {
            id: 'claude-101',
            name: 'Claude 101',
            hours: 3,
            hasCertificate: true,
            url: 'https://anthropic.skilljar.com/claude-101',
            trackId: 'track1',
            phaseId: 'phase1',
            description:
              'Aprende los fundamentos de Claude: qué es, cómo funciona y cómo aprovechar sus capacidades. Este curso oficial de Anthropic cubre los conceptos esenciales para empezar a trabajar con IA generativa de manera profesional.',
            checklist: [
              'Ver todos los videos del módulo completo',
              'Completar los ejercicios prácticos interactivos',
              'Tomar el quiz de evaluación final',
              'Obtener el certificado oficial de Anthropic',
              'Compartir el certificado en LinkedIn',
            ],
            expertTip:
              'Usa Claude.ai en paralelo mientras estudias. Experimenta en tiempo real cada concepto que aprendes. La práctica inmediata acelera 3× el aprendizaje.',
          },
          {
            id: 'prompt-engineering',
            name: 'Prompt Engineering Tutorial',
            hours: 4,
            hasCertificate: false,
            url: 'https://github.com/anthropics/courses',
            trackId: 'track1',
            phaseId: 'phase1',
            description:
              'Domina el arte del Prompt Engineering con el curso oficial de Anthropic en GitHub. Aprende técnicas avanzadas: few-shot, chain-of-thought, role prompting y más para comunicarte efectivamente con Claude.',
            checklist: [
              'Clonar el repositorio de cursos de Anthropic',
              'Completar el módulo de introducción a prompts',
              'Practicar las técnicas de few-shot prompting',
              'Implementar chain-of-thought en ejercicios reales',
              'Crear tu propio "Prompt Cookbook" personal',
            ],
            expertTip:
              'Crea un documento vivo con tus mejores prompts, categorizados por tarea. Este "Prompt Cookbook" será tu activo más valioso como usuario avanzado de Claude.',
          },
        ],
      },
      {
        id: 'phase2',
        name: 'Fase 2',
        weekRange: 'Semanas 3–4',
        weekStart: 3,
        weekEnd: 4,
        modules: [
          {
            id: 'real-world-prompting',
            name: 'Real World Prompting',
            hours: 5,
            hasCertificate: false,
            url: 'https://github.com/anthropics/courses',
            trackId: 'track1',
            phaseId: 'phase2',
            description:
              'Aplica Prompt Engineering en escenarios empresariales reales. Cubre automatización de flujos de trabajo, casos de uso por industria y estrategias para integrar Claude en procesos existentes de tu organización.',
            checklist: [
              'Estudiar los 5 casos de uso empresariales del curso',
              'Completar los ejercicios de automatización de workflows',
              'Implementar al menos un flujo real en tu trabajo actual',
              'Documentar resultados y métricas de mejora',
              'Compartir un caso de éxito con tu equipo',
            ],
            expertTip:
              'Identifica 3 tareas repetitivas en tu trabajo que puedas automatizar con Claude esta semana. El ROI inmediato te motivará a seguir aprendiendo y te dará credibilidad.',
          },
          {
            id: 'prompt-evaluations',
            name: 'Prompt Evaluations',
            hours: 3,
            hasCertificate: false,
            url: 'https://github.com/anthropics/courses',
            trackId: 'track1',
            phaseId: 'phase2',
            description:
              'Aprende a evaluar y mejorar sistemáticamente la calidad de tus prompts. Cubre métricas de evaluación, técnicas de A/B testing y metodologías para garantizar resultados consistentes y medibles en producción.',
            checklist: [
              'Entender las métricas clave de evaluación de prompts',
              'Configurar un framework de evaluación básico',
              'Realizar A/B testing de 3 de tus prompts actuales',
              'Crear un "golden dataset" de 20 ejemplos ideales',
              'Implementar proceso de mejora continua',
            ],
            expertTip:
              'Tu "golden dataset" de 20–30 ejemplos ideales para tu caso de uso se convierte en el criterio de éxito para cualquier prompt nuevo. Es tu brújula de calidad permanente.',
          },
        ],
      },
    ],
  },
  {
    id: 'track2',
    name: 'Developer Deep-Dives',
    emoji: '💻',
    color: '#6C8EBF',
    bgColor: 'rgba(108,142,191,0.12)',
    borderColor: 'rgba(108,142,191,0.3)',
    phases: [
      {
        id: 'phase3',
        name: 'Fase 3',
        weekRange: 'Semanas 5–7',
        weekStart: 5,
        weekEnd: 7,
        modules: [
          {
            id: 'api-fundamentals',
            name: 'API Fundamentals',
            hours: 6,
            hasCertificate: true,
            url: 'https://anthropic.skilljar.com/claude-with-the-anthropic-api',
            trackId: 'track2',
            phaseId: 'phase3',
            description:
              'Domina la API de Anthropic desde cero. Aprende autenticación, manejo de mensajes, streaming, gestión de tokens y mejores prácticas para construir aplicaciones robustas y escalables con Claude en producción.',
            checklist: [
              'Obtener tu API key en console.anthropic.com',
              'Instalar el SDK de Anthropic (Python o TypeScript)',
              'Implementar tu primera llamada a la API exitosa',
              'Configurar streaming de respuestas en tiempo real',
              'Implementar manejo de errores y retry con backoff',
              'Optimizar uso de tokens y gestionar costos',
              'Obtener el certificado oficial de la API',
            ],
            expertTip:
              'Implementa rate limiting y retry con exponential backoff desde el inicio. Un sistema robusto desde el día 1 te ahorrará horas de debugging en producción.',
          },
          {
            id: 'tool-use',
            name: 'Tool Use / Function Calling',
            hours: 4,
            hasCertificate: false,
            url: 'https://github.com/anthropics/courses',
            trackId: 'track2',
            phaseId: 'phase3',
            description:
              'Extiende las capacidades de Claude con herramientas personalizadas. El Tool Use permite que Claude ejecute código, consulte APIs externas, busque en bases de datos y realice acciones en sistemas reales del mundo.',
            checklist: [
              'Entender el ciclo de vida completo de una tool call',
              'Definir y registrar tu primera herramienta personalizada',
              'Implementar un agente simple con 2–3 herramientas',
              'Manejar errores y casos edge en tool responses',
              'Construir un agente que consulte una API externa real',
              'Testear comportamiento del agente con casos límite',
            ],
            expertTip:
              'Las descripciones de las herramientas son la clave. Claude decide cuándo y cómo usarlas basándose en tu descripción. Una descripción precisa = comportamiento predecible y correcto.',
          },
          {
            id: 'claude-code-in-action',
            name: 'Claude Code In Action',
            hours: 4,
            hasCertificate: true,
            url: 'https://anthropic.skilljar.com/claude-code',
            trackId: 'track2',
            phaseId: 'phase3',
            description:
              'Domina Claude Code, el asistente de programación AI de Anthropic. Aprende a usarlo para escribir, revisar, refactorizar y depurar código de manera efectiva en proyectos reales de cualquier escala.',
            checklist: [
              'Instalar Claude Code y configurar en tu entorno local',
              'Crear CLAUDE.md con contexto del proyecto',
              'Completar el flujo de trabajo de código asistido',
              'Revisar y mejorar código legacy existente con Claude',
              'Refactorizar un módulo real usando Claude Code',
              'Obtener el certificado oficial de Claude Code',
            ],
            expertTip:
              'El archivo CLAUDE.md en la raíz de tu repo es un superpoder. Documenta ahí las convenciones, arquitectura y reglas del proyecto. Claude recordará todo en cada sesión.',
          },
        ],
      },
      {
        id: 'phase4',
        name: 'Fase 4',
        weekRange: 'Semanas 8–10',
        weekStart: 8,
        weekEnd: 10,
        modules: [
          {
            id: 'mcp-intro',
            name: 'MCP Intro',
            hours: 5,
            hasCertificate: true,
            url: 'https://anthropic.skilljar.com/introduction-to-mcp',
            trackId: 'track2',
            phaseId: 'phase4',
            description:
              'Domina el Model Context Protocol (MCP), el estándar abierto de Anthropic para conectar AI con fuentes de datos y herramientas. Crea y usa servidores MCP para extender las capacidades de Claude a cualquier sistema.',
            checklist: [
              'Entender la arquitectura cliente-servidor de MCP',
              'Instalar y configurar un servidor MCP oficial (filesystem)',
              'Crear tu primer servidor MCP personalizado simple',
              'Conectar Claude a una fuente de datos via MCP',
              'Testear la integración end-to-end completa',
              'Obtener el certificado oficial de MCP Intro',
            ],
            expertTip:
              'MCP es el futuro de la integración AI-empresa. Empieza con los servidores oficiales (filesystem, git, databases) antes de crear los tuyos propios. El ecosistema crece cada semana con nuevas integraciones.',
          },
          {
            id: 'mcp-advanced',
            name: 'MCP Avanzado',
            hours: 6,
            hasCertificate: true,
            url: 'https://anthropic.skilljar.com/advanced-mcp',
            trackId: 'track2',
            phaseId: 'phase4',
            description:
              'Profundiza en MCP con casos de uso avanzados: autenticación OAuth, orquestación multi-servidor, optimización de rendimiento con caching y patrones arquitecturales para sistemas de producción con múltiples agentes.',
            checklist: [
              'Implementar autenticación OAuth en servidores MCP',
              'Orquestar 3+ servidores MCP simultáneamente',
              'Optimizar rendimiento con estrategias de caching',
              'Implementar logging y monitoring de producción',
              'Desplegar un servidor MCP en infraestructura real',
              'Obtener el certificado oficial de Advanced MCP',
            ],
            expertTip:
              'En producción usa un patrón de gateway MCP centralizado que maneje autenticación y logging. Tus servidores individuales quedan más limpios, seguros y fáciles de mantener.',
          },
          {
            id: 'agent-skills',
            name: 'Agent Skills',
            hours: 3,
            hasCertificate: true,
            url: 'https://anthropic.skilljar.com/introduction-to-agent-skills',
            trackId: 'track2',
            phaseId: 'phase4',
            description:
              'Aprende a crear y gestionar Agent Skills en Claude. Estas habilidades modulares permiten que los agentes realicen tareas complejas de manera autónoma, combinando herramientas y razonamiento en flujos de trabajo sofisticados.',
            checklist: [
              'Entender el modelo mental de agentes en Claude',
              'Crear y registrar tu primera skill de agente',
              'Combinar múltiples skills en un agente complejo',
              'Implementar memoria y contexto persistente entre sesiones',
              'Testear comportamiento en casos límite y adversariales',
              'Obtener el certificado oficial de Agent Skills',
            ],
            expertTip:
              'Diseña skills atómicas y componibles. Un agente con 10 skills pequeñas bien definidas supera en flexibilidad a uno con 2 skills monolíticas. La composabilidad es la clave de la escalabilidad.',
          },
        ],
      },
    ],
  },
  {
    id: 'track3',
    name: 'Maestría y Producción',
    emoji: '🚀',
    color: '#7CB87C',
    bgColor: 'rgba(124,184,124,0.12)',
    borderColor: 'rgba(124,184,124,0.3)',
    phases: [
      {
        id: 'phase5',
        name: 'Fase 5',
        weekRange: 'Semanas 11–14',
        weekStart: 11,
        weekEnd: 14,
        modules: [
          {
            id: 'proyecto-integrador-1',
            name: 'Proyecto Integrador #1',
            hours: 10,
            hasCertificate: false,
            url: 'https://docs.anthropic.com',
            trackId: 'track3',
            phaseId: 'phase5',
            description:
              'Construye tu primer proyecto real integrando múltiples tecnologías de Anthropic: API, Tool Use y MCP. Este proyecto demuestra tu dominio de los fundamentos y sirve como pieza central de tu portfolio profesional.',
            checklist: [
              'Definir caso de uso real y documentar requerimientos',
              'Diseñar arquitectura de la solución con diagrama',
              'Implementar integración core con la API de Claude',
              'Agregar al menos 2 herramientas personalizadas (Tool Use)',
              'Integrar mínimo un servidor MCP a la solución',
              'Escribir tests unitarios e integración (>60% coverage)',
              'Hacer deploy del proyecto a producción',
              'Publicar en GitHub con README completo y demo',
            ],
            expertTip:
              'Elige un problema real que tengas en tu trabajo actual. Los mejores portfolios resuelven problemas genuinos. La autenticidad y el impacto medible venden más que la complejidad técnica.',
          },
          {
            id: 'proyecto-integrador-2',
            name: 'Proyecto Integrador #2',
            hours: 12,
            hasCertificate: false,
            url: 'https://github.com/anthropics/courses',
            trackId: 'track3',
            phaseId: 'phase5',
            description:
              'Construye un proyecto avanzado de nivel producción que integre agentes autónomos, MCP avanzado y buenas prácticas empresariales: seguridad, monitoring, optimización de costos y documentación de arquitectura.',
            checklist: [
              'Diseñar sistema multi-agente con roles bien definidos',
              'Implementar arquitectura de agentes con orquestación',
              'Integrar múltiples servidores MCP especializados',
              'Implementar autenticación, autorización y auditoría',
              'Configurar monitoring, alertas y dashboards de métricas',
              'Optimizar costos de API con estrategias de caching',
              'Documentar arquitectura con diagramas C4 o similares',
              'Crear demo grabada de 3–5 min del proyecto en acción',
            ],
            expertTip:
              'Documenta todas las decisiones de arquitectura y los trade-offs que evaluaste. Los ingenieros y directores técnicos valoran el "por qué" tanto como el "cómo". Muestra tu razonamiento.',
          },
          {
            id: 'enterprise-adoption',
            name: 'Enterprise Adoption',
            hours: 3,
            hasCertificate: true,
            url: 'https://anthropic.skilljar.com/driving-enterprise-adoption-of-claude',
            trackId: 'track3',
            phaseId: 'phase5',
            description:
              'Aprende estrategias para implementar Claude exitosamente en organizaciones empresariales. Cubre change management, construcción de business cases, métricas de ROI, gestión de riesgos y planes de adopción por etapas.',
            checklist: [
              'Estudiar el framework completo de adopción empresarial',
              'Crear un business case para tu organización específica',
              'Identificar 3 casos de uso de alto impacto y bajo riesgo',
              'Diseñar plan de capacitación escalonado para equipos',
              'Establecer KPIs y métricas de éxito medibles',
              'Obtener el certificado oficial de Enterprise Adoption',
            ],
            expertTip:
              'Empieza siempre con un "quick win" visible para la alta dirección. Un caso de éxito pequeño pero medible (ahorro de X horas, aumento de Y%) abre más puertas que el proyecto más ambicioso en papel.',
          },
        ],
      },
    ],
  },
]

// ── FLAT MODULE LIST ──────────────────────────────────────────────────────────

export const ALL_MODULES = TRACKS.flatMap(t =>
  t.phases.flatMap(p => p.modules)
)

export const getModuleById = (id) => ALL_MODULES.find(m => m.id === id)

export const getTrackById = (id) => TRACKS.find(t => t.id === id)

export const getTrackForModule = (moduleId) =>
  TRACKS.find(t => t.phases.some(p => p.modules.some(m => m.id === moduleId)))

// ── CERTIFICATES ──────────────────────────────────────────────────────────────

export const CERTIFICATES = [
  {
    id: 'cert-claude-101',
    name: 'Claude 101',
    description: 'Fundamentos oficiales de Claude y IA generativa',
    moduleId: 'claude-101',
    url: 'https://anthropic.skilljar.com/claude-101',
    trackId: 'track1',
    linkedinTitle: 'Claude 101 – Anthropic Certified',
  },
  {
    id: 'cert-api-fundamentals',
    name: 'Claude with the Anthropic API',
    description: 'Dominio de la API de Anthropic para desarrollo',
    moduleId: 'api-fundamentals',
    url: 'https://anthropic.skilljar.com/claude-with-the-anthropic-api',
    trackId: 'track2',
    linkedinTitle: 'Claude API Fundamentals – Anthropic Certified',
  },
  {
    id: 'cert-claude-code',
    name: 'Claude Code In Action',
    description: 'Asistencia de código con IA en proyectos reales',
    moduleId: 'claude-code-in-action',
    url: 'https://anthropic.skilljar.com/claude-code',
    trackId: 'track2',
    linkedinTitle: 'Claude Code In Action – Anthropic Certified',
  },
  {
    id: 'cert-mcp-intro',
    name: 'Introduction to MCP',
    description: 'Model Context Protocol: fundamentos y primeros servidores',
    moduleId: 'mcp-intro',
    url: 'https://anthropic.skilljar.com/introduction-to-mcp',
    trackId: 'track2',
    linkedinTitle: 'Introduction to MCP – Anthropic Certified',
  },
  {
    id: 'cert-mcp-advanced',
    name: 'Advanced MCP',
    description: 'MCP avanzado para sistemas de producción empresarial',
    moduleId: 'mcp-advanced',
    url: 'https://anthropic.skilljar.com/advanced-mcp',
    trackId: 'track2',
    linkedinTitle: 'Advanced MCP – Anthropic Certified',
  },
  {
    id: 'cert-agent-skills',
    name: 'Introduction to Agent Skills',
    description: 'Creación y gestión de habilidades para agentes Claude',
    moduleId: 'agent-skills',
    url: 'https://anthropic.skilljar.com/introduction-to-agent-skills',
    trackId: 'track2',
    linkedinTitle: 'Introduction to Agent Skills – Anthropic Certified',
  },
  {
    id: 'cert-enterprise',
    name: 'Enterprise Adoption of Claude',
    description: 'Estrategias de adopción empresarial de IA con Claude',
    moduleId: 'enterprise-adoption',
    url: 'https://anthropic.skilljar.com/driving-enterprise-adoption-of-claude',
    trackId: 'track3',
    linkedinTitle: 'Enterprise Adoption of Claude – Anthropic Certified',
  },
]

// ── WEEKLY SCHEDULE ───────────────────────────────────────────────────────────

export const WEEKLY_SCHEDULE = [
  {
    week: 1,
    focus: 'Fundamentos de Claude',
    description: 'Empieza tu journey con los conceptos esenciales de Claude AI',
    moduleIds: ['claude-101'],
    hours: 3,
    trackId: 'track1',
  },
  {
    week: 2,
    focus: 'Claude 101 + Prompt Engineering',
    description: 'Finaliza Claude 101 e inicia las técnicas de prompting avanzado',
    moduleIds: ['claude-101', 'prompt-engineering'],
    hours: 4,
    trackId: 'track1',
  },
  {
    week: 3,
    focus: 'Prompt Engineering avanzado',
    description: 'Profundiza en few-shot, chain-of-thought y prompts en el mundo real',
    moduleIds: ['prompt-engineering', 'real-world-prompting'],
    hours: 5,
    trackId: 'track1',
  },
  {
    week: 4,
    focus: 'Evaluaciones y métricas de prompts',
    description: 'Aprende a medir y mejorar la calidad de tus prompts sistemáticamente',
    moduleIds: ['real-world-prompting', 'prompt-evaluations'],
    hours: 4,
    trackId: 'track1',
  },
  {
    week: 5,
    focus: 'API de Anthropic: fundamentos',
    description: 'Configura tu entorno y haz tus primeras llamadas a la API de Claude',
    moduleIds: ['api-fundamentals'],
    hours: 6,
    trackId: 'track2',
  },
  {
    week: 6,
    focus: 'API avanzada + Tool Use',
    description: 'Finaliza API Fundamentals e inicia la integración de herramientas',
    moduleIds: ['api-fundamentals', 'tool-use'],
    hours: 5,
    trackId: 'track2',
  },
  {
    week: 7,
    focus: 'Claude Code en acción',
    description: 'Domina Claude Code y obtén tu segundo certificado oficial',
    moduleIds: ['tool-use', 'claude-code-in-action'],
    hours: 5,
    trackId: 'track2',
  },
  {
    week: 8,
    focus: 'Model Context Protocol (MCP)',
    description: 'Conecta Claude a sistemas externos con el estándar MCP de Anthropic',
    moduleIds: ['mcp-intro'],
    hours: 5,
    trackId: 'track2',
  },
  {
    week: 9,
    focus: 'MCP intermedio y avanzado',
    description: 'Profundiza en MCP con autenticación y múltiples servidores',
    moduleIds: ['mcp-intro', 'mcp-advanced'],
    hours: 6,
    trackId: 'track2',
  },
  {
    week: 10,
    focus: 'MCP Avanzado + Agent Skills',
    description: 'Completa MCP avanzado y crea tus primeros agentes autónomos',
    moduleIds: ['mcp-advanced', 'agent-skills'],
    hours: 5,
    trackId: 'track2',
  },
  {
    week: 11,
    focus: 'Proyecto Integrador #1',
    description: 'Empieza tu primer proyecto real combinando API, Tool Use y MCP',
    moduleIds: ['proyecto-integrador-1'],
    hours: 10,
    trackId: 'track3',
  },
  {
    week: 12,
    focus: 'Proyecto #1 + inicio Proyecto #2',
    description: 'Finaliza el Proyecto #1 y diseña la arquitectura del Proyecto #2',
    moduleIds: ['proyecto-integrador-1', 'proyecto-integrador-2'],
    hours: 11,
    trackId: 'track3',
  },
  {
    week: 13,
    focus: 'Proyecto #2 + Enterprise Adoption',
    description: 'Desarrolla el Proyecto #2 y estudia estrategias empresariales',
    moduleIds: ['proyecto-integrador-2', 'enterprise-adoption'],
    hours: 8,
    trackId: 'track3',
  },
  {
    week: 14,
    focus: '¡Finalización y Certificación!',
    description: 'Completa Proyecto #2, obtén el último certificado y celebra tu logro',
    moduleIds: ['proyecto-integrador-2', 'enterprise-adoption'],
    hours: 6,
    trackId: 'track3',
  },
]

// ── QUICK RESOURCES ───────────────────────────────────────────────────────────

export const RESOURCES = [
  {
    id: 'academy',
    name: 'Anthropic Academy',
    description: 'Cursos oficiales con certificados de Anthropic',
    url: 'https://anthropic.skilljar.com',
    icon: '🎓',
    color: '#E8A87C',
  },
  {
    id: 'github-courses',
    name: 'GitHub Courses',
    description: 'Repositorio oficial de notebooks y tutoriales',
    url: 'https://github.com/anthropics/courses',
    icon: '📚',
    color: '#6C8EBF',
  },
  {
    id: 'docs',
    name: 'Documentación Oficial',
    description: 'Referencia técnica completa de Claude y la API',
    url: 'https://docs.claude.com',
    icon: '📖',
    color: '#7CB87C',
  },
  {
    id: 'console',
    name: 'Anthropic Console',
    description: 'Panel de control: API keys, créditos y playground',
    url: 'https://console.anthropic.com',
    icon: '⚡',
    color: '#9B87D9',
  },
  {
    id: 'learn',
    name: 'Learn Hub',
    description: 'Centro de aprendizaje y recursos de la comunidad',
    url: 'https://www.anthropic.com/learn',
    icon: '🌐',
    color: '#E87C9B',
  },
]
