import satori from 'satori';
import { html } from 'satori-html';
import { Resvg } from '@resvg/resvg-js';
import sharp from 'sharp';

async function generateOG(lang) {
  // Fetch actual Rajdhani font to match the CV exactly
  const fontDataReq = await fetch('https://github.com/google/fonts/raw/main/ofl/rajdhani/Rajdhani-Bold.ttf');
  const fontData = await fontDataReq.arrayBuffer();

  const title = "Luis Reoyo Bolaños";
  const subtitle = lang === 'es' ? "Senior en Seguridad de Redes | Especialista en Telco y Hardening" : "Network Security Engineer | Telco & Hardening Specialist";
  const desc = lang === 'es' 
    ? "Analista de Ciberseguridad con sólida experiencia en la gestión y análisis de vulnerabilidades en infraestructuras críticas y tecnología blockchain."
    : "Cybersecurity Analyst with solid experience in vulnerability management and analysis in critical infrastructures and blockchain technology.";

  // Use exact CSS and layout from Header.astro
  const markup = html(`
    <div style="display: flex; width: 100%; height: 100%; background: #1e2d3d; color: white; padding: 70px 80px; position: relative; overflow: hidden; font-family: 'Rajdhani'; flex-direction: column; justify-content: center;">
      <!-- Decorative circle 1 -->
      <div style="position: absolute; top: -40px; right: -40px; width: 220px; height: 220px; border-radius: 110px; background: rgba(74, 158, 207, 0.12); display: flex;"></div>
      <!-- Decorative circle 2 -->
      <div style="position: absolute; bottom: -60px; left: 30%; width: 300px; height: 300px; border-radius: 150px; background: rgba(74, 158, 207, 0.06); display: flex;"></div>

      <div style="display: flex; flex-direction: column; max-width: 700px; z-index: 1;">
        <h1 style="font-size: 72px; font-weight: 700; margin: 0 0 15px 0; color: #ffffff; letter-spacing: 1px;">${title}</h1>
        <p style="font-size: 28px; color: #4a9ecf; margin: 0 0 30px 0; letter-spacing: 1.5px;">${subtitle.toUpperCase()}</p>
        <p style="font-size: 26px; color: rgba(255,255,255,0.82); line-height: 1.5; margin: 0;">${desc}</p>
        
        <div style="display: flex; margin-top: 40px; padding-top: 25px; border-top: 2px solid rgba(255,255,255,0.15); color: #64ffda; font-size: 26px;">
           https://curriculum.genkipool.com
        </div>
      </div>
    </div>
  `);

  const svg = await satori(markup, {
    width: 1200,
    height: 630,
    fonts: [{ name: 'Rajdhani', data: fontData, weight: 700, style: 'normal' }],
  });

  const resvg = new Resvg(svg, { background: '#1e2d3d', fitTo: { mode: 'width', value: 1200 } });
  const pngData = resvg.render().asPng();

  const avatarSize = 320;
  const photoBuffer = await sharp('src/assets/luis_reoyo.png').resize(avatarSize, avatarSize, { fit: 'cover' }).toBuffer();
  const circleSvg = `<svg width="${avatarSize}" height="${avatarSize}"><circle cx="${avatarSize/2}" cy="${avatarSize/2}" r="${avatarSize/2}" fill="#fff" /></svg>`;
  const circlePhoto = await sharp(photoBuffer).composite([{ input: Buffer.from(circleSvg), blend: 'dest-in' }]).png().toBuffer();

  const filename = lang === 'es' ? 'public/og-image.jpg' : 'public/og-image-en.jpg';

  await sharp(pngData)
    .composite([{ input: circlePhoto, left: 810, top: 155 }])
    .jpeg({ quality: 90, chromaSubsampling: '4:4:4' })
    .toFile(filename);
    
  console.log("Premium OG Image generated successfully for " + lang + "!");
}

async function main() {
  await generateOG('es');
  await generateOG('en');
}
main().catch(console.error);
