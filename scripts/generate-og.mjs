import sharp from 'sharp';
import fs from 'fs';

async function generateOG() {
  const width = 1200;
  const height = 630;
  
  // Background with text mimicking the header
  const svgBg = `
    <svg width="${width}" height="${height}">
      <rect width="100%" height="100%" fill="#1e2d3d" />
      <text x="80" y="280" font-family="sans-serif" font-size="55" font-weight="bold" fill="#ffffff">Luis Alberto Reoyo Bolaños</text>
      <text x="80" y="350" font-family="sans-serif" font-size="34" fill="#a0aec0">Auditor y pentester en seguridad de Red Móvil</text>
      <text x="80" y="550" font-family="sans-serif" font-size="28" fill="#64ffda">https://curriculum.genkipool.com</text>
    </svg>
  `;

  // Process the profile photo
  const photoBuffer = await sharp('src/assets/luis_reoyo.png')
    .resize(360, 360, { fit: 'cover' })
    .toBuffer();

  // Create circular mask for photo to make it look professional
  const circleSvg = `<svg width="360" height="360"><circle cx="180" cy="180" r="180" fill="#fff" /></svg>`;
  const circlePhoto = await sharp(photoBuffer)
    .composite([{ input: Buffer.from(circleSvg), blend: 'dest-in' }])
    .png()
    .toBuffer();

  // Composite everything
  await sharp(Buffer.from(svgBg))
    .composite([
      { input: circlePhoto, left: 760, top: 135 }
    ])
    .jpeg({ quality: 80 }) // Jpeg is much smaller than PNG for complex images, guaranteeing < 500KB
    .toFile('public/og-image.jpg');
    
  console.log("OG Image generated successfully at public/og-image.jpg");
}

generateOG().catch(console.error);
