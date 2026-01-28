
import { SiteContent } from './types';

export const CONTENT: Record<'es' | 'en', SiteContent> = {
  es: {
    nav: {
      services: 'Especialidades',
      whyUs: 'Nosotros',
      calc: 'Ahorros',
      contact: 'Contacto',
      cta: 'Cotizar'
    },
    hero: {
      badge: 'Expertos en Ingeniería Estructural, Geotécnica y Civil',
      title: 'Ingeniería Lean.',
      titleAccent: 'Optimizamos CAPEX en Energía y Minería.',
      desc: 'Soporte técnico especializado para proyectos Utility-Scale, Líneas de Transmisión e Infraestructura Minera. Reducimos costos entre un 10-25% mediante una red de ingenieros expertos senior freelance.',
      ctaPrimary: 'Optimizar mi Proyecto',
      ctaSecondary: 'Nuestras Especialidades'
    },
    whyChoose: {
      title: '¿Por qué elegir Lean Engineering?',
      description: 'El modelo de ingeniería tradicional está obsoleto. Las grandes firmas priorizan las horas facturables y la cobertura de sus gastos fijos. Nosotros priorizamos la eficiencia del proyecto y el ahorro real del cliente.',
      features: [
        { title: 'Red Freelance Curada', desc: 'Las mejores mentes, ensambladas según la necesidad de cada proyecto.' },
        { title: 'Ahorros Mensurables', desc: 'Foco en el resultado final del negocio, siempre.' }
      ],
      cta: 'Únase a nuestra Red de Clientes',
      cards: [
        {
          highlight: '40%',
          subtitle: 'MENORES HONORARIOS',
          title: 'Gastos fijos ultra-bajos',
          description: 'Las firmas tradicionales cargan oficinas masivas en su factura. Nuestro modelo los reduce casi a cero, traspasando el 100% de ese ahorro a usted.'
        },
        {
          highlight: '100%',
          subtitle: 'EXPERTOS SENIOR',
          title: 'Solo Talento Senior',
          description: 'Su proyecto no será un campo de entrenamiento para juniors. Solo desplegamos ingenieros con más de 15 años de experiencia técnica específica.'
        },
        {
          highlight: 'LatAm',
          subtitle: 'EXPERTISE LOCAL',
          title: 'Especialidad Regional',
          description: 'Basados en Chile, entendemos los matices regulatorios, climáticos y logísticos de los proyectos de infraestructura en toda Latinoamérica.'
        },
        {
          highlight: 'ROI',
          subtitle: 'ENFOCADO EN DATOS',
          title: 'Ahorros Transparentes',
          description: 'No nos escondemos tras tecnicismos. Entregamos KPIs claros y medibles para cada cambio de diseño propuesto, mostrando exactamente cuánto ahorra.'
        }
      ]
    },
    valueModels: {
      title: 'Modelos de Creación de Valor y Riesgo Compartido',
      description: 'Enfoques comerciales diseñados para alinear nuestros incentivos con el éxito financiero de su proyecto.',
      items: [
        {
          title: 'Revisión y Optimización de Diseño',
          description: 'Auditorías técnicas profundas para identificar ineficiencias y simplificar sistemas.',
          points: ['Reducción 10-25% CAPEX/OPEX', 'Menos desperdicio de materiales', 'Mejor rendimiento']
        },
        {
          title: 'Ingeniería de Valor',
          description: 'Análisis riguroso para asegurar funciones al menor costo de ciclo de vida.',
          points: ['Análisis de constructibilidad', 'Materiales alternativos', 'Modelado de costos']
        },
        {
          title: 'Soporte Senior On-Demand',
          description: 'Acceso a ingenieros senior sin los costos fijos de una gran firma.',
          points: ['Retainers flexibles', 'Tarifas por proyecto', 'Expertos especialistas']
        },
        {
          title: 'Modelo de Riesgo Compartido',
          description: 'Cobramos en base a los ahorros reales generados para su proyecto.',
          points: ['Cero riesgo inicial', 'Incentivos por desempeño', 'ROI transparente']
        }
      ]
    },
    services: {
      title: 'Áreas de Soporte Técnico',
      items: [
        {
          id: 'renewable-energy',
          title: 'Energía Renovable (Wind, Solar & BESS)',
          description: 'Soporte en ingeniería civil y estructural para proyectos Utility-scale. Revisión de geotecnia y diseño de fundaciones para aerogeneradores y parques solares.',
          icon: 'fa-wind',
          benefits: ['Revisión Geotécnica Senior', 'Optimización de Fundaciones', 'Sistemas BESS y Skids']
        },
        {
          id: 'mining-structural',
          title: 'Estructuras Metálicas y Minería',
          description: 'Revisión técnica de ingeniería estructural para bodegas, edificios industriales y naves logísticas en el sector minero e industrial.',
          icon: 'fa-helmet-safety',
          benefits: ['Optimización de Peso (Acero)', 'Bodegas e Infraestructura', 'Diseño de Racks y Soportes']
        },
        {
          id: 'power-transmission',
          title: 'Transmisión y Torres Eléctricas',
          description: 'Optimización estructural avanzada de torres de alta tensión (celosía y postes). Reducción de CAPEX mediante ingeniería de valor en líneas de transmisión.',
          icon: 'fa-bolt',
          benefits: ['Optimización de Torres AT', 'Ingeniería de Detalle', 'Reducción de Materiales']
        },
        {
          id: 'seismic-certification',
          title: 'Certificación Sísmica de Equipos',
          description: 'Calificación y certificación sísmica de equipos críticos (transformadores, tableros, inversores) para plantas industriales y subestaciones.',
          icon: 'fa-house-crack',
          benefits: ['Certificación bajo Norma', 'Análisis de Anclajes', 'Continuidad Operativa']
        }
      ]
    },
    whyUs: {
      title: 'Ingeniería con',
      titleAccent: 'Enfoque en Valor',
      items: [
        {
          title: 'Disciplinas Especializadas',
          content: 'Contamos con expertos senior en Ingeniería Estructural, Civil y Geotécnica enfocados exclusivamente en sectores críticos.',
          icon: 'fa-compass-drafting'
        },
        {
          title: 'Reducción de Cantidades',
          content: 'Auditamos diseños existentes para reducir el sobre-dimensionamiento en acero y concreto sin comprometer la seguridad.',
          icon: 'fa-weight-hanging'
        },
        {
          title: 'Soporte en Normativa LatAm',
          content: 'Expertos en normas sísmicas y de viento de Chile y la región, garantizando diseños seguros y eficientes.',
          icon: 'fa-globe-americas'
        }
      ]
    },
    comparison: {
      title: 'Por qué elegir nuestro soporte especializado',
      desc: 'A diferencia de las consultoras generales, aplicamos ingeniería de precisión para maximizar el ROI de su proyecto.',
      thPillar: 'Pilar Estratégico',
      thTrad: 'Consultora Tradicional',
      thLean: 'Nuestro Soporte Lean',
      ctaTitle: '¿Busca reducir el CAPEX de su proyecto?',
      ctaDesc: 'Nuestras revisiones técnicas en geotecnia y estructuras suelen pagarse solas con los ahorros en materiales.',
      ctaBtn: 'Solicitar Auditoría Técnica',
      rows: [
        { feature: 'Especialización', traditional: 'Generalista / Multidisciplina', leanEngineering: 'Foco en Energía, Minería e Infra' },
        { feature: 'Ingeniería de Valor', traditional: 'Diseño conservador estándar', leanEngineering: 'Optimización proactiva de costos' },
        { feature: 'Diseño de Fundaciones', traditional: 'Sobre-dimensionado por defecto', leanEngineering: 'Ajuste Geotécnico Preciso' },
        { feature: 'Certificación Sísmica', traditional: 'Sub-contratado o genérico', leanEngineering: 'Especialista In-house Senior' }
      ]
    },
    calc: {
      title: 'Estimador de Ahorros',
      desc: 'Calcule el potencial de ahorro en su proyecto de infraestructura o energía mediante optimización técnica.',
      labelBudget: 'Presupuesto del Proyecto (Miles de USD)',
      labelComplexity: 'Complejidad del Diseño',
      complexities: ['Estándar', 'Avanzado', 'Crítico'],
      note: '*Cálculos basados en ahorros históricos de 10-25% en partidas estructurales y civiles. Valores en miles de USD.',
      resultTitle: 'Ahorros Est. (Miles de USD)',
      labelFee: 'Honorarios Est. (Miles)',
      labelRoi: 'ROI del Servicio',
      btn: 'Obtener Informe de Ahorros'
    },
    contact: {
      title: 'Iniciemos la Optimización',
      desc: 'Comparta los detalles de su proyecto de energía, minería o infraestructura para una evaluación técnica preliminar.',
      labels: {
        name: 'Nombre Completo',
        email: 'Correo Electrónico',
        sector: 'Sector del Proyecto',
        service: 'Especialidad Requerida',
        brief: 'Resumen (Renovables, Torres, Minería...)',
        submit: 'Enviar Solicitud de Soporte'
      },
      sectors: ['Energía Solar / Eólica', 'Sistemas BESS', 'Transmisión Eléctrica', 'Minería / Industrial'],
      services: ['Revisión Geotécnica / Fundaciones', 'Optimización Estructural', 'Certificación Sísmica', 'Ingeniería de Valor'],
      info: {
        location: 'Santiago, Chile',
        email: 'leaneng@proton.me',
        phone: '+56 9 5250 4101'
      }
    }
  },
  en: {
    nav: {
      services: 'Specialties',
      whyUs: 'Why Us',
      calc: 'Savings',
      contact: 'Contact',
      cta: 'Get Quote'
    },
    hero: {
      badge: 'Specialists in Structural, Geotechnical & Civil Engineering',
      title: 'Lean Engineering.',
      titleAccent: 'CAPEX Optimization in Energy & Mining.',
      desc: 'Expert technical support for Utility-Scale projects, Transmission Lines, and Mining Infrastructure. We reduce costs between 10-25% through a network of freelance senior expert engineers.',
      ctaPrimary: 'Optimize My Project',
      ctaSecondary: 'Our Specialties'
    },
    whyChoose: {
      title: 'Why Choose Lean Engineering?',
      description: 'The traditional engineering model is broken. Large firms prioritize billable hours and overhead coverage. We prioritize project efficiency and client savings.',
      features: [
        { title: 'Curated Freelance Network', desc: 'The best minds, assembled per project need.' },
        { title: 'Measurable Client Savings', desc: 'Focus on the bottom line, always.' }
      ],
      cta: 'Join Our Client Network',
      cards: [
        {
          highlight: '40%',
          subtitle: 'LOWER SERVICE FEES',
          title: 'Ultra-Low Overhead',
          description: 'Traditional firms bake massive office and partner salaries into your bill. Our network model keeps fixed costs near zero, passing 100% of those savings to you.'
        },
        {
          highlight: '100%',
          subtitle: 'SENIOR EXPERTS',
          title: 'Senior Talent Only',
          description: "Your project won't be a training ground for juniors. We only deploy engineers with 15+ years of experience in their specific technical domain."
        },
        {
          highlight: 'LatAm',
          subtitle: 'LOCAL EXPERTISE',
          title: 'LatAm Specialty',
          description: 'Based in Chile, we understand the regulatory, climatic, and logistical nuances of Latin American infrastructure projects.'
        },
        {
          highlight: 'ROI',
          subtitle: 'DATA-FOCUSED',
          title: 'Transparent Savings',
          description: "We don't hide behind jargon. We provide clear, measurable KPIs for every design change we suggest, showing exactly how much you save."
        }
      ]
    },
    valueModels: {
      title: 'Value Creation and Shared Risk Models',
      description: 'Business approaches designed to align our incentives with the financial success of your project.',
      items: [
        {
          title: 'Design Review & Optimization',
          description: 'Deep technical audits to identify inefficiencies and streamline systems.',
          points: ['10-25% CAPEX/OPEX Reduction', 'Reduced material waste', 'Enhanced performance']
        },
        {
          title: 'Value Engineering',
          description: 'Rigorous analysis to ensure functions at the lowest lifecycle cost.',
          points: ['Constructability analysis', 'Alternative assessment', 'Cost modeling']
        },
        {
          title: 'On-Demand Senior Support',
          description: 'Access senior engineers without the fixed costs of a full-time firm.',
          points: ['Flexible retainers', 'Project-based fees', 'Specialist expertise']
        },
        {
          title: 'Shared Risk Model',
          description: 'We bill based on the actual savings generated for your project.',
          points: ['Zero upfront risk', 'Performance-based incentives', 'Transparent ROI']
        }
      ]
    },
    services: {
      title: 'Technical Support Areas',
      items: [
        {
          id: 'renewable-energy',
          title: 'Renewable Energy (Wind, Solar & BESS)',
          description: 'Civil and structural engineering support for Utility-scale projects. Geotechnical review and foundation design for turbines and solar farms.',
          icon: 'fa-wind',
          benefits: ['Senior Geotechnical Review', 'Foundation Optimization', 'BESS & Skid Systems']
        },
        {
          id: 'mining-structural',
          title: 'Mining & Industrial Steel Structures',
          description: 'Technical structural engineering review for warehouses, industrial buildings, and mining facilities.',
          icon: 'fa-helmet-safety',
          benefits: ['Steel Weight Optimization', 'Warehouses & Infrastructure', 'Rack & Support Design']
        },
        {
          id: 'power-transmission',
          title: 'Power Lines & Transmission Towers',
          description: 'Advanced structural optimization of high-voltage towers (lattice & poles). CAPEX reduction through value engineering in transmission lines.',
          icon: 'fa-bolt',
          benefits: ['HV Tower Optimization', 'Detail Engineering', 'Material Reduction']
        },
        {
          id: 'seismic-certification',
          title: 'Seismic Equipment Certification',
          description: 'Seismic qualification and certification of critical equipment (transformers, switchgear, inverters) for industrial plants and substations.',
          icon: 'fa-house-crack',
          benefits: ['Code Compliance Certs', 'Anchorage Analysis', 'Operational Continuity']
        }
      ]
    },
    whyUs: {
      title: 'Engineering with',
      titleAccent: 'Value Focus',
      items: [
        {
          title: 'Specialized Disciplines',
          content: 'Senior experts in Structural, Civil, and Geotechnical Engineering focused exclusively on critical infrastructure.',
          icon: 'fa-compass-drafting'
        },
        {
          title: 'Quantity Reduction',
          content: 'We audit existing designs to reduce over-engineered steel and concrete without compromising safety.',
          icon: 'fa-weight-hanging'
        },
        {
          title: 'LatAm Code Expertise',
          content: 'Experts in seismic and wind regulations across Chile and the region, ensuring safe and lean designs.',
          icon: 'fa-globe-americas'
        }
      ]
    },
    comparison: {
      title: 'Why choose our specialized support',
      desc: 'Unlike general consultants, we apply precision engineering to maximize your project’s ROI.',
      thPillar: 'Strategic Pillar',
      thTrad: 'Traditional Firm',
      thLean: 'Our Lean Support',
      ctaTitle: 'Looking to reduce your project CAPEX?',
      ctaDesc: 'Our technical reviews in geotechnics and structures often pay for themselves through material savings.',
      ctaBtn: 'Request Technical Audit',
      rows: [
        { feature: 'Specialization', traditional: 'Generalist / Multi-discipline', leanEngineering: 'Energy, Mining & Infra Focus' },
        { feature: 'Value Engineering', traditional: 'Standard conservative design', leanEngineering: 'Proactive cost optimization' },
        { feature: 'Foundation Design', traditional: 'Over-designed by default', leanEngineering: 'Precise Geotechnical Fit' },
        { feature: 'Seismic Certification', traditional: 'Outsourced or generic', leanEngineering: 'Senior In-house Specialist' }
      ]
    },
    calc: {
      title: 'Savings Estimator',
      desc: 'Calculate the potential savings in your infrastructure or energy project through technical optimization.',
      labelBudget: 'Project Budget (Thousands of USD)',
      labelComplexity: 'Design Complexity',
      complexities: ['Standard', 'Advanced', 'Critical'],
      note: '*Calculations based on historic 10-25% savings in structural and civil items. Values in thousands of USD.',
      resultTitle: 'Est. Savings (Thousands USD)',
      labelFee: 'Est. Fee (Thousands)',
      labelRoi: 'Service ROI',
      btn: 'Get Savings Report'
    },
    contact: {
      title: 'Start Optimizing',
      desc: 'Share your energy, mining, or infrastructure project details for a preliminary technical assessment.',
      labels: {
        name: 'Full Name',
        email: 'Email',
        sector: 'Project Sector',
        service: 'Required Specialty',
        brief: 'Project Brief (Renewables, Towers, Mining...)',
        submit: 'Send Support Request'
      },
      sectors: ['Solar / Wind Energy', 'BESS Systems', 'Power Transmission', 'Mining / Industrial'],
      services: ['Geotechnical / Foundation Review', 'Structural Optimization', 'Seismic Certification', 'Value Engineering'],
      info: {
        location: 'Santiago, Chile',
        email: 'leaneng@proton.me',
        phone: '+56 9 5250 4101'
      }
    }
  }
};
