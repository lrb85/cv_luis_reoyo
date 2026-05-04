export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'es';

export const ui = {
  es: {
    'nav.experience': 'Experiencia Profesional',
    'nav.projects': 'Proyectos Personales / Open Source',
    'nav.education': 'Formación Académica',
    'nav.skills': 'SKILLS',
    'label.category': 'Categoría:',
    'label.company': 'Empresa:',
    'label.project': 'Proyecto:',
    'label.status': 'Estado:',
    'label.function': 'Función:',
    'label.description': 'Descripción:',
    'label.web': 'Web:',
    'label.github': 'GitHub:',
    'label.collaboration': 'Colaboración:',
    'label.degree': 'Titulación:',
    'label.course': 'Curso:',
    'label.center': 'Centro:',
    'label.institution': 'Institución:',
    'label.language': 'Lenguaje:',
    'label.level': 'Nivel:',
    'label.system': 'Sistema:',
    'label.networking': 'Redes:',
    'label.carnet': 'Carnet:',
    'label.tools': 'Herramientas:',
    'label.currently': 'Actualmente',

    // Header
    'header.job': 'Senior en Seguridad de Redes | Especialista en Telco & Hardening',
    'header.summary': 'Cuento con 11 años de experiencia como técnico de seguridad en telecomunicaciones, especializado en hardening y pentesting de dispositivos de red. Actualmente tengo a disposición los certificados de CCNP Security, CCNP y CEH.',

    // Experience: Blockchain
    'exp.blockchain.title': 'Administrador de Infraestructura Blockchain.',
    'exp.blockchain.company': 'Genkipool (Cardano & Radix Stake Pool Operator).',
    'exp.blockchain.f1': 'Diseño, despliegue y administración de infraestructura de alta disponibilidad en el cloud de Hetzner para el mantenimiento de nodos validadores de las redes Cardano y Radix DLT.',
    'exp.blockchain.f2': 'Implementación y gestión de entornos virtualizados con Proxmox, optimizando el rendimiento de las máquinas virtuales para Relay Nodes y Block Producers.',
    'exp.blockchain.f3': 'Configuración de redes privadas seguras mediante VPN Wireguard y políticas estrictas de firewall para garantizar la integridad de las comunicaciones entre nodos.',
    'exp.blockchain.f4': 'Administración de sistemas de backups automatizados, monitorización en tiempo real (Prometheus/Grafana) y ejecución de actualizaciones críticas de protocolo (Hard Forks) sin interrupción del servicio.',

    // Experience: Tutor
    'exp.tutor.title': 'Tutor Curso Hacking Con PHP.',
    'exp.tutor.company': 'Áreas de servicio de información (S.L) Madrid.',
    'exp.tutor.f1': 'Resolver las dudas del alumnado y evaluar las distintas actividades del curso, actividades como: Hardening LAMP, attack sql injection, attacks DOS, XSS, CSRF, webShell, XXE, XML Bomb, LFI, RFI, cookie hijacking, Tor.',

    // Experience: Auditor
    'exp.auditor.title': 'Auditor y pentester en seguridad de Red Móvil 4G/5G.',
    'exp.auditor.f1': 'Auditoría técnica de seguridad y pentesting para la Red Móvil de Nueva Generación (Red Única / NGN) de Telefónica España, garantizando la integridad de infraestructuras críticas 4G/5G bajo el framework **MITRE ATT&CK**.',
    'exp.auditor.f2': 'Ejecución de pruebas de penetración y análisis de vulnerabilidades en nodos CORE y acceso (RAN/SRAN), incluyendo equipos como HSS, HLR, MTAS/CSCF, BNG HL4, NRF, NEF, NCE, UPF LBO, SMF, SEPP y AIRSCALE.',
    'exp.auditor.f3': 'Realización de test de rendimiento y ataques de Denegación de Servicio (DoS/Flooding) para validar la robustez de elementos críticos como DRA VoLTE, CNEIR, BAF, ASOFA, vAFG, PTS y CANG.',
    'exp.auditor.f4': 'Auditoría de protocolos de señalización (GTP, Diameter, SIP, SCTP, MAP) y securización de interfaces de red (N1, N2, N3, N4) para prevenir interceptaciones y fraudes en redes móviles.',
    'exp.auditor.f5': 'Evaluación de seguridad en APIs de gestión de red (NEF/NCE) y hardening de funciones de red virtualizadas (VNF) bajo estándares de seguridad 3GPP y GSMA.',

    // Experience: Hardening
    'exp.hardening.title': 'Especialista en Seguridad y Hardening de Redes IP y Móviles.',
    'exp.hardening.f1': 'Diseño técnico en la securización y hardening de infraestructuras críticas IP y de transporte para Telefónica España (Red Rima, Red Fusión, Red Anillo y Red Rumba).',
    'exp.hardening.f2': 'Implementación de guías de Hardening basadas en **CIS Benchmarks** y estándares **STIG** para equipos de red multi-vendor (Cisco, Juniper, Nokia, Huawei, Ericsson y Red Hat).',
    'exp.hardening.f3': 'Diseño y despliegue de controles de seguridad perimetral, gestión de políticas de acceso (ACLs, Control Plane Policing) y protocolos de autenticación (RADIUS, TACACS+, LDAP).',
    'exp.hardening.f4': 'Automatización de auditorías de cumplimiento normativo y hardening mediante **HP Network Automation** para el control de configuraciones en entornos de producción masivos.',
    'exp.hardening.f5': 'Desarrollo de documentación técnica POS (Standard Operating Procedures), estandarización de informes de seguridad y soporte nivel 3 en despliegues FOA (First Office Application).',

    // Projects: Intelligent Navigator
    'proj.navigator.title': 'Intelligent Navigator (Chrome Extension).',
    'proj.navigator.status': 'En desarrollo (Fase Beta).',
    'proj.navigator.desc': 'Extensión de productividad avanzada para navegadores Chromium enfocada en la optimización del flujo de trabajo mediante gestión inteligente de recursos y asistencia mediante IA.',
    'proj.navigator.f1': '<strong>Smart Tabs:</strong> Sistema de agrupación automática por dominios, subdominios y reglas dinámicas personalizables con persistencia de sesiones y búsqueda avanzada.',
    'proj.navigator.f2': '<strong>Asistente IA:</strong> Integración de Google Gemini para resúmenes de contenido, chat contextual en panel lateral y programación de consultas automatizadas.',
    'proj.navigator.f3': '<strong>Herramientas:</strong> Gestión de marcadores, historial avanzado, editor de cookies, expansor de texto (snippets), capturas de pantalla y utilidades de accesibilidad por teclado.',

    // Projects: Radix
    'proj.radix.title': 'Radix DLT Community Platform.',
    'proj.radix.desc': 'Desarrollo integral de la plataforma comunitaria oficial para el ecosistema Radix DLT utilizando **Next.js 15+** y **React 19**, enfocada en la divulgación tecnológica y servicios Web3 de alto rendimiento.',
    'proj.radix.f1': '<strong>Web3 & Blockchain:</strong> Implementación de conexión de billetera (Wallet), gestión avanzada de **Staking** con validadores y visualización de recompensas en tiempo real mediante el SDK oficial de Radix.',
    'proj.radix.f2': '<strong>Dashboard & Análisis:</strong> Desarrollo de un panel de control interactivo con gráficas dinámicas (**Recharts**) y explorador de transacciones integrado para métricas críticas del ecosistema.',
    'proj.radix.f3': '<strong>Infraestructura:</strong> Stack moderno con **Tailwind CSS 4**, **Supabase**, caché en **Redis (Upstash)** y soporte multilingüe completo con sistema de temas dinámico.',

    // Education
    'edu.master.title': 'Especialista en seguridad informática e información.',
    'edu.master.course': 'Posgrado (30 créditos).',
    'edu.master.center': 'Universidad Castilla La Mancha.',
    'edu.php.title': 'Certificado profesional de Hacking con PHP (100 horas).',
    'edu.php.course': 'Hacking Con PHP.',
    'edu.hack.title': 'Hacking Ético (56 horas).',
    'edu.degree.title': 'Técnico superior en Desarrollo de Productos Electrónicos.',
    'edu.degree.course': 'Grado Superior.',

    // Skills
    'skill.lang.level': 'Profesional',
    'skill.eng.level': 'Técnico',
    'skill.driving.level': 'B',
    'footer.copy': '© 2026 Luis Reoyo. Todos los derechos reservados.',
  },
  en: {
    'nav.experience': 'Professional Experience',
    'nav.projects': 'Personal / Open Source Projects',
    'nav.education': 'Academic Background',
    'nav.skills': 'SKILLS',
    'label.category': 'Category:',
    'label.company': 'Company:',
    'label.project': 'Project:',
    'label.status': 'Status:',
    'label.function': 'Function:',
    'label.description': 'Description:',
    'label.web': 'Web:',
    'label.github': 'GitHub:',
    'label.collaboration': 'Collaboration:',
    'label.degree': 'Degree:',
    'label.course': 'Course:',
    'label.center': 'Center:',
    'label.institution': 'Institution:',
    'label.language': 'Language:',
    'label.level': 'Level:',
    'label.system': 'System:',
    'label.networking': 'Networking:',
    'label.carnet': 'License:',
    'label.tools': 'Tools:',
    'label.currently': 'Present',

    // Header
    'header.job': 'Senior Network Security | Telco & Hardening Specialist',
    'header.summary': '11 years of experience as a telecommunications security technician, specialized in hardening and pentesting network devices. Currently holding CCNP Security, CCNP, and CEH certifications.',

    // Experience: Blockchain
    'exp.blockchain.title': 'Blockchain Infrastructure Administrator.',
    'exp.blockchain.company': 'Genkipool (Cardano & Radix Stake Pool Operator).',
    'exp.blockchain.f1': 'Design, deployment, and administration of high-availability infrastructure on Hetzner cloud for maintaining validator nodes for Cardano and Radix DLT networks.',
    'exp.blockchain.f2': 'Implementation and management of virtualized environments with Proxmox, optimizing virtual machine performance for Relay Nodes and Block Producers.',
    'exp.blockchain.f3': 'Configuration of secure private networks using Wireguard VPN and strict firewall policies to ensure the integrity of inter-node communications.',
    'exp.blockchain.f4': 'Administration of automated backup systems, real-time monitoring (Prometheus/Grafana), and execution of critical protocol updates (Hard Forks) without service interruption.',

    // Experience: Tutor
    'exp.tutor.title': 'Hacking with PHP Course Tutor.',
    'exp.tutor.company': 'Áreas de servicio de información (S.L) Madrid.',
    'exp.tutor.f1': 'Answering student questions and evaluating course activities, including: LAMP Hardening, SQL injection, DoS attacks, XSS, CSRF, webShell, XXE, XML Bomb, LFI, RFI, cookie hijacking, and Tor.',

    // Experience: Auditor
    'exp.auditor.title': '4G/5G Mobile Network Security Auditor and Pentester.',
    'exp.auditor.f1': 'Technical security auditing and pentesting for Telefónica Spain\'s Next Generation Mobile Network (Red Única / NGN), ensuring the integrity of critical 4G/5G infrastructures under the **MITRE ATT&CK** framework.',
    'exp.auditor.f2': 'Execution of penetration tests and vulnerability analysis on CORE and access nodes (RAN/SRAN), including equipment such as HSS, HLR, MTAS/CSCF, BNG HL4, NRF, NEF, NCE, UPF LBO, SMF, SEPP, and AIRSCALE.',
    'exp.auditor.f3': 'Performing performance tests and Denial of Service (DoS/Flooding) attacks to validate the robustness of critical elements like DRA VoLTE, CNEIR, BAF, ASOFA, vAFG, PTS, and CANG.',
    'exp.auditor.f4': 'Auditing signaling protocols (GTP, Diameter, SIP, SCTP, MAP) and securing network interfaces (N1, N2, N3, N4) to prevent interceptions and fraud in mobile networks.',
    'exp.auditor.f5': 'Security evaluation of network management APIs (NEF/NCE) and hardening of virtualized network functions (VNF) under 3GPP and GSMA security standards.',

    // Experience: Hardening
    'exp.hardening.title': 'IP and Mobile Network Security and Hardening Specialist.',
    'exp.hardening.f1': 'Technical design in the security and hardening of critical IP and transport infrastructures for Telefónica Spain (Red Rima, Red Fusión, Red Anillo, and Red Rumba).',
    'exp.hardening.f2': 'Implementation of Hardening guides based on **CIS Benchmarks** and **STIG** standards for multi-vendor network equipment (Cisco, Juniper, Nokia, Huawei, Ericsson, and Red Hat).',
    'exp.hardening.f3': 'Design and deployment of perimeter security controls, access policy management (ACLs, Control Plane Policing), and authentication protocols (RADIUS, TACACS+, LDAP).',
    'exp.hardening.f4': 'Automation of compliance and hardening audits using **HP Network Automation** for configuration control in massive production environments.',
    'exp.hardening.f5': 'Development of SOP (Standard Operating Procedures) technical documentation, standardization of security reports, and level 3 support in FOA (First Office Application) deployments.',

    // Projects: Intelligent Navigator
    'proj.navigator.title': 'Intelligent Navigator (Chrome Extension).',
    'proj.navigator.status': 'In development (Beta Phase).',
    'proj.navigator.desc': 'Advanced productivity extension for Chromium browsers focused on workflow optimization through intelligent resource management and AI assistance.',
    'proj.navigator.f1': '<strong>Smart Tabs:</strong> Automatic grouping system by domains, subdomains, and customizable dynamic rules with session persistence and advanced search.',
    'proj.navigator.f2': '<strong>AI Assistant:</strong> Google Gemini integration for content summaries, contextual chat in a dedicated side panel, and scheduled automated queries.',
    'proj.navigator.f3': '<strong>Tools:</strong> Bookmark management, advanced history, cookie editor, text expansion (snippets), screenshots, and keyboard accessibility utilities.',

    // Projects: Radix
    'proj.radix.title': 'Radix DLT Community Platform.',
    'proj.radix.desc': 'Comprehensive development of the official community platform for the Radix DLT ecosystem using **Next.js 15+** and **React 19**, focused on technology outreach and high-performance Web3 services.',
    'proj.radix.f1': '<strong>Web3 & Blockchain:</strong> Implementation of wallet connection, advanced **Staking** management with validators, and real-time rewards visualization using the official Radix SDK.',
    'proj.radix.f2': '<strong>Dashboard & Analytics:</strong> Development of an interactive control panel with dynamic charts (**Recharts**) and integrated transaction explorer for critical ecosystem metrics.',
    'proj.radix.f3': '<strong>Infrastructure:</strong> Modern stack with **Tailwind CSS 4**, **Supabase**, **Redis (Upstash)** caching, and full multilingual support with a dynamic theme system.',

    // Education
    'edu.master.title': 'Information and Computer Security Specialist.',
    'edu.master.course': 'Postgraduate (30 credits).',
    'edu.master.center': 'University of Castilla La Mancha.',
    'edu.php.title': 'Professional PHP Hacking Certificate (100 hours).',
    'edu.php.course': 'Hacking With PHP.',
    'edu.hack.title': 'Ethical Hacking (56 hours).',
    'edu.degree.title': 'Higher Technician in Electronic Product Development.',
    'edu.degree.course': 'Higher Degree.',

    // Skills
    'skill.lang.level': 'Professional',
    'skill.eng.level': 'Technical',
    'skill.driving.level': 'B',
    'footer.copy': '© 2026 Luis Reoyo. All rights reserved.',
  },
} as const;
