
import { SiteContent, Question } from './types';

export const QUESTIONS: Record<'es' | 'en', Question[]> = {
  es: [
    {
      id: 'q1',
      category: 'Personas',
      text: '¿Cuál es la principal característica del liderazgo servicial en proyectos ágiles?',
      options: ['Control centralizado', 'Eliminación de impedimentos', 'Asignación de tareas diaria', 'Reporte de horas'],
      correctAnswer: 1,
      explanation: 'El líder servicial se enfoca en eliminar obstáculos para que el equipo pueda entregar valor.'
    },
    {
      id: 'q2',
      category: 'Procesos',
      text: 'En PMBOK 8, ¿cómo se define el enfoque de desarrollo híbrido?',
      options: ['Solo Waterfall', 'Solo Agile', 'Combinación de predictivo y adaptativo', 'Gestión sin procesos'],
      correctAnswer: 2,
      explanation: 'El enfoque híbrido utiliza lo mejor de ambos mundos según las necesidades del proyecto.'
    }
    // Añadir más preguntas aquí para completar las 9 categorías
  ],
  en: [
    {
      id: 'q1',
      category: 'People',
      text: 'What is the primary characteristic of servant leadership in agile projects?',
      options: ['Centralized control', 'Removing impediments', 'Daily task assignment', 'Time tracking'],
      correctAnswer: 1,
      explanation: 'The servant leader focuses on clearing obstacles so the team can deliver value.'
    },
    {
      id: 'q2',
      category: 'Processes',
      text: 'In PMBOK 8, how is the hybrid development approach defined?',
      options: ['Waterfall only', 'Agile only', 'Combination of predictive and adaptive', 'Management without processes'],
      correctAnswer: 2,
      explanation: 'The hybrid approach uses the best of both worlds based on project needs.'
    }
  ]
};

export const CONTENT: Record<'es' | 'en', SiteContent> = {
  es: {
    nav: {
      principles: 'Principios',
      domains: 'Dominios',
      processes: 'Procesos',
      exam: 'Simulador',
      cta: 'Iniciar Examen'
    },
    hero: {
      badge: 'Guía de Maestría PMBOK 8 - PMP 2024/2025',
      title: 'Domina el Futuro de la',
      titleAccent: 'Gestión de Proyectos.',
      desc: 'Prepárate para el examen PMP con el estándar PMBOK 8. Enfoque en principios, entrega de valor, inteligencia artificial y sostenibilidad.',
      ctaPrimary: 'Simulador de Examen',
      ctaSecondary: 'Explorar Dominios'
    },
    principles: {
      title: '6 Principios de Gestión',
      items: [
        { id: 'p1', title: 'Responsabilidad', desc: 'Ser un administrador diligente y respetuoso.', icon: 'fa-shield-halved' },
        { id: 'p2', title: 'Equipo', desc: 'Crear un entorno colaborativo.', icon: 'fa-users' },
        { id: 'p3', title: 'Interesados', desc: 'Involucrar eficazmente a los stakeholders.', icon: 'fa-handshake' },
        { id: 'p4', title: 'Valor', desc: 'Enfoque continuo en la entrega de beneficios.', icon: 'fa-gem' },
        { id: 'p5', title: 'Sistemas', desc: 'Reconocer y responder a las interacciones.', icon: 'fa-diagram-project' },
        { id: 'p6', title: 'Liderazgo', desc: 'Motivar, influir y aprender.', icon: 'fa-crown' }
      ]
    },
    domains: {
      title: '7 Dominios de Desempeño',
      desc: 'Áreas críticas para la entrega efectiva de resultados del proyecto.',
      items: [
        { id: 'd1', title: 'Interesados', desc: 'Gestión proactiva de expectativas.', topics: ['Identificación', 'Compromiso'], icon: 'fa-user-group' },
        { id: 'd2', title: 'Equipo', desc: 'Desarrollo de capacidades y cultura.', topics: ['Liderazgo', 'Cultura'], icon: 'fa-people-group' },
        { id: 'd3', title: 'Enfoque de Desarrollo', desc: 'Cadencia de entrega y ciclo de vida.', topics: ['Agile', 'Predictivo', 'Híbrido'], icon: 'fa-code-branch' },
        { id: 'd4', title: 'Planificación', desc: 'Organización de recursos y tiempo.', topics: ['Estimación', 'Cronograma'], icon: 'fa-calendar-check' },
        { id: 'd5', title: 'Trabajo del Proyecto', desc: 'Gestión de procesos físicos y técnicos.', topics: ['Recursos', 'Adquisiciones'], icon: 'fa-briefcase' },
        { id: 'd6', title: 'Entrega', desc: 'Alcance y calidad de los entregables.', topics: ['Valor', 'Calidad'], icon: 'fa-truck-fast' },
        { id: 'd7', title: 'Medición', desc: 'Evaluación del progreso y desempeño.', topics: ['KPIs', 'Métricas'], icon: 'fa-chart-simple' }
      ]
    },
    processes: {
      title: '40 Procesos en 5 Áreas de Foco',
      desc: 'El flujo de trabajo estructurado para la excelencia operativa.',
      areas: [
        { name: 'Iniciación', count: 2, desc: 'Definición inicial y autorización.' },
        { name: 'Planificación', count: 24, desc: 'Ruta detallada de ejecución.' },
        { name: 'Ejecución', count: 10, desc: 'Realización del trabajo.' },
        { name: 'Monitoreo', count: 12, desc: 'Control de variaciones.' },
        { name: 'Cierre', count: 1, desc: 'Finalización formal.' }
      ]
    },
    business: {
      title: 'Evolución del Negocio',
      aiTitle: 'IA en Gestión de Proyectos',
      aiDesc: 'Optimización de cronogramas y análisis predictivo de riesgos mediante algoritmos avanzados.',
      sustainTitle: 'Sostenibilidad',
      sustainDesc: 'Integración de criterios ESG y economía circular en el ciclo de vida del proyecto.'
    },
    exam: {
      title: 'Simulador PMP 8',
      desc: 'Banco de preguntas categorizado para tu certificación.',
      categories: ['Personas', 'Procesos', 'Negocio', 'Agile', 'Híbrido', 'Riesgos', 'Valor', 'IA', 'Sostenibilidad'],
      startBtn: 'Comenzar Práctica',
      nextBtn: 'Siguiente Pregunta',
      finishBtn: 'Finalizar y Ver Puntaje',
      scoreTitle: 'Tu Resultado Final'
    },
    calc: {
      title: 'Calculadora de Ahorro',
      desc: 'Estima el impacto financiero de la optimización de procesos.',
      labelBudget: 'Presupuesto CAPEX',
      labelComplexity: 'Complejidad del Proyecto',
      complexities: ['Simple', 'Media', 'Compleja'],
      note: 'Los cálculos son estimaciones basadas en benchmarks de la industria.',
      resultTitle: 'Ahorro Estimado',
      labelFee: 'Honorarios Típicos',
      labelRoi: 'Multiplicador de Retorno',
      btn: 'Solicitar Auditoría'
    },
    comparison: {
      title: 'Diferencia Competitiva',
      desc: 'Por qué el enfoque Lean Engineering supera la gestión tradicional.',
      thPillar: 'Pilar',
      thTrad: 'Gestión Tradicional',
      thLean: 'Lean Engineering',
      rows: [
        { feature: 'Tiempo de Entrega', traditional: 'Lento / Secuencial', leanEngineering: 'Rápido / Ágil' },
        { feature: 'Costo', traditional: 'Rígido / Sobre-presupuesto', leanEngineering: 'Optimizado / Bajo Demanda' },
        { feature: 'Calidad', traditional: 'Basada en Inspección', leanEngineering: 'Basada en el Proceso' }
      ],
      ctaTitle: '¿Listo para el cambio?',
      ctaDesc: 'Mejora tus márgenes operativos hoy mismo.',
      ctaBtn: 'Comenzar ahora'
    },
    whyChoose: {
      title: 'Por qué elegirnos',
      description: 'Combinamos experiencia técnica con metodologías ágiles avanzadas.',
      features: [
        { title: 'Certificación Global', desc: 'Expertos certificados en PMP y PMBOK 8.' },
        { title: 'IA Aplicada', desc: 'Automatización de tareas repetitivas.' }
      ],
      cta: 'Ver Detalles',
      cards: [
        { highlight: '15%', subtitle: 'AHORRO MEDIO', title: 'Reducción de Costos', description: 'Optimizamos el gasto operativo sin sacrificar calidad.' },
        { highlight: '2X', subtitle: 'VELOCIDAD', title: 'Entrega Acelerada', description: 'Reducimos el time-to-market de tus proyectos.' }
      ]
    }
  },
  en: {
    nav: {
      principles: 'Principles',
      domains: 'Domains',
      processes: 'Processes',
      exam: 'Simulator',
      cta: 'Start Exam'
    },
    hero: {
      badge: 'PMBOK 8 Mastery Guide - PMP 2024/2025',
      title: 'Master the Future of',
      titleAccent: 'Project Management.',
      desc: 'Prepare for the PMP exam with the PMBOK 8 standard. Focus on principles, value delivery, artificial intelligence, and sustainability.',
      ctaPrimary: 'Exam Simulator',
      ctaSecondary: 'Explore Domains'
    },
    principles: {
      title: '6 Management Principles',
      items: [
        { id: 'p1', title: 'Stewardship', desc: 'Be a diligent, respectful steward.', icon: 'fa-shield-halved' },
        { id: 'p2', title: 'Team', desc: 'Create a collaborative environment.', icon: 'fa-users' },
        { id: 'p3', title: 'Stakeholders', desc: 'Engage effectively with stakeholders.', icon: 'fa-handshake' },
        { id: 'p4', title: 'Value', desc: 'Continuous focus on benefit delivery.', icon: 'fa-gem' },
        { id: 'p5', title: 'Systems', desc: 'Recognize and respond to interactions.', icon: 'fa-diagram-project' },
        { id: 'p6', title: 'Leadership', desc: 'Motivate, influence, and learn.', icon: 'fa-crown' }
      ]
    },
    domains: {
      title: '7 Performance Domains',
      desc: 'Critical areas for effective project outcome delivery.',
      items: [
        { id: 'd1', title: 'Stakeholders', desc: 'Proactive expectation management.', topics: ['Identification', 'Engagement'], icon: 'fa-user-group' },
        { id: 'd2', title: 'Team', desc: 'Capacity and culture development.', topics: ['Leadership', 'Culture'], icon: 'fa-people-group' },
        { id: 'd3', title: 'Development Approach', desc: 'Delivery cadence and lifecycle.', topics: ['Agile', 'Predictive', 'Hybrid'], icon: 'fa-code-branch' },
        { id: 'd4', title: 'Planning', desc: 'Resource and time organization.', topics: ['Estimation', 'Schedule'], icon: 'fa-calendar-check' },
        { id: 'd5', title: 'Project Work', desc: 'Managing physical and technical processes.', topics: ['Resources', 'Procurement'], icon: 'fa-briefcase' },
        { id: 'd6', title: 'Delivery', desc: 'Scope and quality of deliverables.', topics: ['Value', 'Quality'], icon: 'fa-truck-fast' },
        { id: 'd7', title: 'Measurement', desc: 'Assessing progress and performance.', topics: ['KPIs', 'Metrics'], icon: 'fa-chart-simple' }
      ]
    },
    processes: {
      title: '40 Processes in 5 Focus Areas',
      desc: 'The structured workflow for operational excellence.',
      areas: [
        { name: 'Initiating', count: 2, desc: 'Initial definition and authorization.' },
        { name: 'Planning', count: 24, desc: 'Detailed execution roadmap.' },
        { name: 'Executing', count: 10, desc: 'Performing the work.' },
        { name: 'Monitoring', count: 12, desc: 'Controlling variations.' },
        { name: 'Closing', count: 1, desc: 'Formal completion.' }
      ]
    },
    business: {
      title: 'Business Evolution',
      aiTitle: 'AI in Project Management',
      aiDesc: 'Schedule optimization and predictive risk analysis through advanced algorithms.',
      sustainTitle: 'Sustainability',
      sustainDesc: 'ESG criteria integration and circular economy within the project lifecycle.'
    },
    exam: {
      title: 'PMP 8 Simulator',
      desc: 'Categorized question bank for your certification.',
      categories: ['People', 'Process', 'Business', 'Agile', 'Hybrid', 'Risk', 'Value', 'AI', 'Sustainability'],
      startBtn: 'Start Practice',
      nextBtn: 'Next Question',
      finishBtn: 'Finish and View Score',
      scoreTitle: 'Your Final Score'
    },
    calc: {
      title: 'Savings Calculator',
      desc: 'Estimate the financial impact of process optimization.',
      labelBudget: 'CAPEX Budget',
      labelComplexity: 'Project Complexity',
      complexities: ['Simple', 'Medium', 'Complex'],
      note: 'Calculations are estimates based on industry benchmarks.',
      resultTitle: 'Estimated Savings',
      labelFee: 'Typical Fees',
      labelRoi: 'Return Multiplier',
      btn: 'Request Audit'
    },
    comparison: {
      title: 'Competitive Difference',
      desc: 'Why Lean Engineering outperforms traditional management.',
      thPillar: 'Pillar',
      thTrad: 'Traditional Management',
      thLean: 'Lean Engineering',
      rows: [
        { feature: 'Delivery Time', traditional: 'Slow / Sequential', leanEngineering: 'Fast / Agile' },
        { feature: 'Cost', traditional: 'Rigid / Over-budget', leanEngineering: 'Optimized / On-demand' },
        { feature: 'Quality', traditional: 'Inspection-based', leanEngineering: 'Process-based' }
      ],
      ctaTitle: 'Ready for a change?',
      ctaDesc: 'Improve your operating margins today.',
      ctaBtn: 'Start Now'
    },
    whyChoose: {
      title: 'Why Choose Us',
      description: 'We combine technical expertise with advanced agile methodologies.',
      features: [
        { title: 'Global Certification', desc: 'Certified experts in PMP and PMBOK 8.' },
        { title: 'Applied AI', desc: 'Automation of repetitive tasks.' }
      ],
      cta: 'View Details',
      cards: [
        { highlight: '15%', subtitle: 'AVG SAVINGS', title: 'Cost Reduction', description: 'We optimize operating expenses without sacrificing quality.' },
        { highlight: '2X', subtitle: 'SPEED', title: 'Accelerated Delivery', description: 'We reduce the time-to-market of your projects.' }
      ]
    }
  }
};
