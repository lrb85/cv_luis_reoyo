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
    'label.language': 'Idioma:',
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
    'exp.blockchain.f1': 'Diseño, despliegue y administración de infraestructura de alta disponibilidad en el cloud de <strong>Hetzner</strong> para el mantenimiento de nodos validadores de las redes <strong>Cardano</strong> y <strong>Radix DLT</strong>.',
    'exp.blockchain.f2': 'Implementación y gestión de entornos virtualizados con <strong>Proxmox</strong>, optimizando el rendimiento de las máquinas virtuales para Relay Nodes y Block Producers.',
    'exp.blockchain.f3': 'Configuración de redes privadas seguras mediante VPN <strong>Wireguard</strong> y políticas estrictas de firewall para garantizar la integridad de las comunicaciones entre nodos.',
    'exp.blockchain.f4': 'Administración de sistemas de backups automatizados, monitorización en tiempo real (<strong>Prometheus/Grafana</strong>) y ejecución de actualizaciones críticas de protocolo (Hard Forks) sin interrupción del servicio.',

    // Experience: Tutor
    'exp.tutor.title': 'Tutor Curso Hacking Con PHP.',
    'exp.tutor.company': 'Áreas de servicio de Información (S.L) Madrid.',
    'exp.tutor.f1': 'Resolver las dudas del alumnado y evaluar las distintas actividades del curso, actividades como: Hardening <strong>LAMP</strong>, attack <strong>SQL injection</strong>, attacks <strong>DOS</strong>, <strong>XSS</strong>, <strong>CSRF</strong>, <strong>webShell</strong>, <strong>XXE</strong>, <strong>XML Bomb</strong>, <strong>LFI</strong>, <strong>RFI</strong>, cookie hijacking, <strong>Tor</strong>.',

    // Experience: Auditor
    'exp.auditor.title': 'Auditor y pentester en seguridad de Red Móvil 4G/5G.',
    'exp.auditor.f1': 'Auditoría técnica de seguridad y pentesting para la Red Móvil de Nueva Generación (Red Única / NGN) de Telefónica España, garantizando la integridad de infraestructuras críticas 4G/5G bajo el framework <strong>MITRE ATT&CK</strong>.',
    'exp.auditor.f2': 'Ejecución de pruebas de penetración y análisis de vulnerabilidades en nodos CORE y acceso (RAN/SRAN), incluyendo equipos como <strong>HSS, HLR, MTAS/CSCF, BNG HL4, NRF, NEF, NCE, UPF LBO, SMF, SEPP y AIRSCALE</strong>.',
    'exp.auditor.f3': 'Realización de test de rendimiento y ataques de Denegación de Servicio (DoS/Flooding) para validar la robustez de elementos críticos como <strong>DRA VoLTE, CNEIR, BAF, ASOFA, vAFG, PTS y CANG</strong>.',
    'exp.auditor.f4': 'Auditoría de protocolos de señalización (<strong>GTP, Diameter, SIP, SCTP, MAP</strong>) y securización de interfaces de red (<strong>N1, N2, N3, N4</strong>) para prevenir interceptaciones y fraudes en redes móviles.',
    'exp.auditor.f5': 'Evaluación de seguridad en APIs de gestión de red (<strong>NEF/NCE</strong>) y hardening de funciones de red virtualizadas (<strong>VNF</strong>) bajo estándares de seguridad <strong>3GPP y GSMA</strong>.',

    // Experience: Hardening
    'exp.hardening.title': 'Especialista en Seguridad y Hardening de Redes IP y Móviles.',
    'exp.hardening.f1': 'Diseño técnico en la securización y hardening de infraestructuras críticas IP y de transporte para Telefónica España (<strong>Red Rima, Red Fusión, Red Anillo y Red Rumba</strong>).',
    'exp.hardening.f2': 'Implementación de guías de Hardening basadas en <strong>CIS Benchmarks</strong> y estándares <strong>STIG</strong> para equipos de red multi-vendor (Cisco, Juniper, Nokia, Huawei, Ericsson y Red Hat).',
    'exp.hardening.f3': 'Diseño y despliegue de controles de seguridad perimetral, gestión de políticas de acceso (<strong>ACLs, Control Plane Policing</strong>), protocolos de autenticación (<strong>RADIUS, TACACS+, LDAP</strong>) e integración con <strong>módulos PAM de Linux</strong>.',
    'exp.hardening.f4': 'Automatización de auditorías de cumplimiento normativo y hardening mediante <strong>HP Network Automation</strong> para el control de configuraciones en entornos de producción masivos.',
    'exp.hardening.f5': 'Desarrollo de documentación técnica <strong>SOP (Standard Operating Procedures)</strong>, estandarización de informes de seguridad y soporte nivel 3 en despliegues <strong>FOA</strong> (First Office Application).',

    // Projects: Intelligent Workspace
    'proj.navigator.title': 'Intelligent Workspace (Chrome Extension).',
    'proj.navigator.status': 'En desarrollo (Fase Beta).',
    'proj.navigator.desc': 'Extensión de productividad avanzada para navegadores Chromium enfocada en la optimización del flujo de trabajo mediante gestión inteligente de recursos y asistencia mediante IA, utilizando tecnologías como <strong>TypeScript</strong>, <strong>Svelte</strong> y <strong>JavaScript</strong>.',
    'proj.navigator.f1': '<strong>Smart Tabs:</strong> Sistema de agrupación automática por dominios, subdominios y reglas dinámicas personalizables con persistencia de sesiones y búsqueda avanzada.',
    'proj.navigator.f2': '<strong>Asistente IA:</strong> Integración de Google Gemini para resúmenes de contenido, chat contextual en panel lateral y programación de consultas automatizadas.',
    'proj.navigator.f3': '<strong>Herramientas:</strong> Gestión de marcadores, historial avanzado, editor de cookies, expansor de texto (snippets), capturas de pantalla y utilidades de accesibilidad por teclado.',

    // Projects: Radix
    'proj.radix.title': 'Radix DLT Community Platform.',
    'proj.radix.desc': 'Desarrollo integral de la plataforma comunitaria oficial para el ecosistema Radix DLT utilizando <strong>Next.js 15+</strong> y <strong>React 19</strong>, enfocada en la divulgación tecnológica y servicios Web3 de alto rendimiento.',
    'proj.radix.f1': '<strong>Web3 & Blockchain:</strong> Implementación de conexión de billetera (Wallet), gestión avanzada de <strong>Staking</strong> con validadores y visualización de recompensas en tiempo real mediante el SDK oficial de Radix.',
    'proj.radix.f2': '<strong>Dashboard & Análisis:</strong> Desarrollo de un panel de control interactivo con gráficas dinámicas (<strong>Recharts</strong>) y explorador de transacciones integrado para métricas críticas del ecosistema.',
    'proj.radix.f3': '<strong>Infraestructura:</strong> Stack moderno con <strong>Tailwind CSS 4</strong>, <strong>Supabase</strong>, caché en <strong>Redis (Upstash)</strong> y soporte multilingüe completo con sistema de temas dinámico.',

    // Projects: Radix Rust SDK
    'proj.rustsdk.title': 'Radix DLT Rust SDK.',
    'proj.rustsdk.desc': 'Desarrollo de SDK y herramientas nativas en <strong>Rust</strong> para la red descentralizada Radix, implementando las primitivas off-ledger que previamente solo existían en JS/TS.',
    'proj.rustsdk.f1': '<strong>Core & Criptografía:</strong> Implementación de verificación de pruebas <strong>ROLA</strong> (Log in con Radix), manejo de claves (Keystore) y construcción de transacciones.',
    'proj.rustsdk.f2': '<strong>Conectividad P2P:</strong> Desarrollo de clientes de transporte modular usando <strong>WebRTC</strong> e <strong>Iroh</strong> para la comunicación directa y segura con la Radix Wallet móvil.',
    'proj.rustsdk.f3': '<strong>IA & MCP:</strong> Creación del `radixdlt-connector-mcp`, un servidor local MCP que permite a los agentes de IA construir y enviar transacciones al móvil del usuario para su firma, sin exponer claves privadas.',

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
    'exp.blockchain.f1': 'Design, deployment, and administration of high-availability infrastructure on <strong>Hetzner</strong> cloud for maintaining validator nodes for <strong>Cardano</strong> and <strong>Radix DLT</strong> networks.',
    'exp.blockchain.f2': 'Implementation and management of virtualized environments with <strong>Proxmox</strong>, optimizing virtual machine performance for Relay Nodes and Block Producers.',
    'exp.blockchain.f3': 'Configuration of secure private networks using <strong>Wireguard</strong> VPN and strict firewall policies to ensure the integrity of inter-node communications.',
    'exp.blockchain.f4': 'Administration of automated backup systems, real-time monitoring (Prometheus/Grafana), and execution of critical protocol updates (Hard Forks) without service interruption.',

    // Experience: Tutor
    'exp.tutor.title': 'Hacking with PHP Course Tutor.',
    'exp.tutor.company': 'Áreas de servicio de Información (S.L) Madrid.',
    'exp.tutor.f1': 'Answering student questions and evaluating course activities, including: <strong>LAMP</strong> Hardening, <strong>SQL injection</strong>, <strong>DoS</strong> attacks, <strong>XSS</strong>, <strong>CSRF</strong>, <strong>webShell</strong>, <strong>XXE</strong>, <strong>XML Bomb</strong>, <strong>LFI</strong>, <strong>RFI</strong>, cookie hijacking, and <strong>Tor</strong>.',

    // Experience: Auditor
    'exp.auditor.title': '4G/5G Mobile Network Security Auditor and Pentester.',
    'exp.auditor.f1': 'Technical security auditing and pentesting for Telefónica Spain\'s Next Generation Mobile Network (Red Única / NGN), ensuring the integrity of critical 4G/5G infrastructures under the <strong>MITRE ATT&CK</strong> framework.',
    'exp.auditor.f2': 'Execution of penetration tests and vulnerability analysis on CORE and access nodes (RAN/SRAN), including equipment such as <strong>HSS, HLR, MTAS/CSCF, BNG HL4, NRF, NEF, NCE, UPF LBO, SMF, SEPP, and AIRSCALE</strong>.',
    'exp.auditor.f3': 'Performing performance tests and Denial of Service (DoS/Flooding) attacks to validate the robustness of critical elements like <strong>DRA VoLTE, CNEIR, BAF, ASOFA, vAFG, PTS, and CANG</strong>.',
    'exp.auditor.f4': 'Auditing signaling protocols (GTP, Diameter, SIP, SCTP, MAP) and securing network interfaces (N1, N2, N3, N4) to prevent interceptions and fraud in mobile networks.',
    'exp.auditor.f5': 'Security evaluation of network management APIs (NEF/NCE) and hardening of virtualized network functions (VNF) under <strong>3GPP and GSMA</strong> security standards.',

    // Experience: Hardening
    'exp.hardening.title': 'IP and Mobile Network Security and Hardening Specialist.',
    'exp.hardening.f1': 'Technical design in the security and hardening of critical IP and transport infrastructures for Telefónica Spain (<strong>Red Rima, Red Fusión, Red Anillo, and Red Rumba</strong>).',
    'exp.hardening.f2': 'Implementation of Hardening guides based on <strong>CIS Benchmarks</strong> and <strong>STIG</strong> standards for multi-vendor network equipment (Cisco, Juniper, Nokia, Huawei, Ericsson, and Red Hat).',
    'exp.hardening.f3': 'Design and deployment of perimeter security controls, access policy management (<strong>ACLs, Control Plane Policing</strong>), authentication protocols (<strong>RADIUS, TACACS+, LDAP</strong>), and integration with <strong>Linux PAM modules</strong>.',
    'exp.hardening.f4': 'Automation of compliance and hardening audits using <strong>HP Network Automation</strong> for configuration control in massive production environments.',
    'exp.hardening.f5': 'Development of <strong>SOP (Standard Operating Procedures)</strong> technical documentation, standardization of security reports, and level 3 support in <strong>FOA</strong> (First Office Application) deployments.',

    // Projects: Intelligent Workspace
    'proj.navigator.title': 'Intelligent Workspace (Chrome Extension).',
    'proj.navigator.status': 'In development (Beta Phase).',
    'proj.navigator.desc': 'Advanced productivity extension for Chromium browsers focused on workflow optimization through intelligent resource management and AI assistance, built with <strong>TypeScript</strong>, <strong>Svelte</strong>, and <strong>JavaScript</strong>.',
    'proj.navigator.f1': '<strong>Smart Tabs:</strong> Automatic grouping system by domains, subdomains, and customizable dynamic rules with session persistence and advanced search.',
    'proj.navigator.f2': '<strong>AI Assistant:</strong> Google Gemini integration for content summaries, contextual chat in a dedicated side panel, and scheduled automated queries.',
    'proj.navigator.f3': '<strong>Tools:</strong> Bookmark management, advanced history, cookie editor, text expansion (snippets), screenshots, and keyboard accessibility utilities.',

    // Projects: Radix
    'proj.radix.title': 'Radix DLT Community Platform.',
    'proj.radix.desc': 'Comprehensive development of the official community platform for the Radix DLT ecosystem using <strong>Next.js 15+</strong> and <strong>React 19</strong>, focused on technology outreach and high-performance Web3 services.',
    'proj.radix.f1': '<strong>Web3 & Blockchain:</strong> Implementation of wallet connection, advanced <strong>Staking</strong> management with validators, and real-time rewards visualization using the official Radix SDK.',
    'proj.radix.f2': '<strong>Dashboard & Analytics:</strong> Development of an interactive control panel with dynamic charts (<strong>Recharts</strong>) and integrated transaction explorer for critical ecosystem metrics.',
    'proj.radix.f3': '<strong>Infrastructure:</strong> Modern stack with <strong>Tailwind CSS 4</strong>, <strong>Supabase</strong>, <strong>Redis (Upstash)</strong> caching, and full multilingual support with a dynamic theme system.',

    // Projects: Radix Rust SDK
    'proj.rustsdk.title': 'Radix DLT Rust SDK.',
    'proj.rustsdk.desc': 'Development of native <strong>Rust</strong> SDK and tools for the Radix decentralized network, implementing off-ledger primitives that previously only existed in JS/TS.',
    'proj.rustsdk.f1': '<strong>Core & Cryptography:</strong> Implementation of <strong>ROLA</strong> proofs verification (Log in with Radix), key management (Keystore), and transaction building.',
    'proj.rustsdk.f2': '<strong>P2P Connectivity:</strong> Development of modular transport clients using <strong>WebRTC</strong> and <strong>Iroh</strong> for direct and secure communication with the mobile Radix Wallet.',
    'proj.rustsdk.f3': '<strong>AI & MCP:</strong> Creation of `radixdlt-connector-mcp`, a local MCP server that allows AI agents to build and send transactions to the user\'s mobile for signing, without exposing private keys.',

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
