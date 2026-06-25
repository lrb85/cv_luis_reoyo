const fs = require('fs');
const path = './src/i18n/ui.ts';
let content = fs.readFileSync(path, 'utf8');

const replacements = [
  ['cloud de Hetzner', 'cloud de <strong>Hetzner</strong>'],
  ['Cardano y Radix DLT', '<strong>Cardano</strong> y <strong>Radix DLT</strong>'],
  ['entornos virtualizados con Proxmox', 'entornos virtualizados con <strong>Proxmox</strong>'],
  ['VPN Wireguard', 'VPN <strong>Wireguard</strong>'],
  ['(Prometheus/Grafana)', '(<strong>Prometheus/Grafana</strong>)'],
  ['Hardening LAMP, attack sql injection, attacks DOS, XSS, CSRF, webShell, XXE, XML Bomb, LFI, RFI, cookie hijacking, Tor.', 'Hardening <strong>LAMP</strong>, attack <strong>SQL injection</strong>, attacks <strong>DOS</strong>, <strong>XSS</strong>, <strong>CSRF</strong>, <strong>webShell</strong>, <strong>XXE</strong>, <strong>XML Bomb</strong>, <strong>LFI</strong>, <strong>RFI</strong>, cookie hijacking, <strong>Tor</strong>.'],
  ['HSS, HLR, MTAS/CSCF, BNG HL4, NRF, NEF, NCE, UPF LBO, SMF, SEPP y AIRSCALE', '<strong>HSS, HLR, MTAS/CSCF, BNG HL4, NRF, NEF, NCE, UPF LBO, SMF, SEPP y AIRSCALE</strong>'],
  ['HSS, HLR, MTAS/CSCF, BNG HL4, NRF, NEF, NCE, UPF LBO, SMF, SEPP, and AIRSCALE', '<strong>HSS, HLR, MTAS/CSCF, BNG HL4, NRF, NEF, NCE, UPF LBO, SMF, SEPP, and AIRSCALE</strong>'],
  ['DRA VoLTE, CNEIR, BAF, ASOFA, vAFG, PTS y CANG', '<strong>DRA VoLTE, CNEIR, BAF, ASOFA, vAFG, PTS y CANG</strong>'],
  ['DRA VoLTE, CNEIR, BAF, ASOFA, vAFG, PTS, and CANG', '<strong>DRA VoLTE, CNEIR, BAF, ASOFA, vAFG, PTS, and CANG</strong>'],
  ['(GTP, Diameter, SIP, SCTP, MAP)', '(<strong>GTP, Diameter, SIP, SCTP, MAP</strong>)'],
  ['(N1, N2, N3, N4)', '(<strong>N1, N2, N3, N4</strong>)'],
  ['(NEF/NCE)', '(<strong>NEF/NCE</strong>)'],
  ['(VNF)', '(<strong>VNF</strong>)'],
  ['3GPP y GSMA', '<strong>3GPP y GSMA</strong>'],
  ['3GPP and GSMA', '<strong>3GPP and GSMA</strong>'],
  ['(Red Rima, Red Fusión, Red Anillo y Red Rumba)', '(<strong>Red Rima, Red Fusión, Red Anillo y Red Rumba</strong>)'],
  ['(Red Rima, Red Fusión, Red Anillo, and Red Rumba)', '(<strong>Red Rima, Red Fusión, Red Anillo, and Red Rumba</strong>)'],
  ['(ACLs, Control Plane Policing)', '(<strong>ACLs, Control Plane Policing</strong>)'],
  ['(RADIUS, TACACS+, LDAP)', '(<strong>RADIUS, TACACS+, LDAP</strong>)'],
  ['(Standard Operating Procedures)', '(<strong>Standard Operating Procedures</strong>)'],
  ['despliegues FOA', 'despliegues <strong>FOA</strong>'],
  ['FOA (First', '<strong>FOA</strong> (First'],
  ['mediante gestión inteligente de recursos y asistencia mediante IA.', 'mediante gestión inteligente de recursos y asistencia mediante IA, utilizando tecnologías como <strong>TypeScript</strong>, <strong>Svelte</strong> y <strong>JavaScript</strong>.'],
  ['through intelligent resource management and AI assistance.', 'through intelligent resource management and AI assistance, built with <strong>TypeScript</strong>, <strong>Svelte</strong>, and <strong>JavaScript</strong>.'],
  ['on Hetzner cloud', 'on <strong>Hetzner</strong> cloud'],
  ['Cardano and Radix DLT networks', '<strong>Cardano</strong> and <strong>Radix DLT</strong> networks'],
  ['with Proxmox', 'with <strong>Proxmox</strong>'],
  ['Wireguard VPN', '<strong>Wireguard</strong> VPN'],
  ['LAMP Hardening, SQL injection, DoS attacks, XSS, CSRF, webShell, XXE, XML Bomb, LFI, RFI, cookie hijacking, and Tor.', '<strong>LAMP</strong> Hardening, <strong>SQL injection</strong>, <strong>DoS</strong> attacks, <strong>XSS</strong>, <strong>CSRF</strong>, <strong>webShell</strong>, <strong>XXE</strong>, <strong>XML Bomb</strong>, <strong>LFI</strong>, <strong>RFI</strong>, cookie hijacking, and <strong>Tor</strong>.']
];

for (let [search, replace] of replacements) {
  content = content.replace(search, replace);
}

fs.writeFileSync(path, content);
console.log("Updated ui.ts successfully.");
