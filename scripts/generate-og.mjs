import sharp from 'sharp';

async function generateOG() {
  const width = 1200;
  const height = 630;
  
  // Background with gradients, decorative circles, and well-positioned text (NO OVERLAP)
  const svgBg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#111a28" />
          <stop offset="100%" stop-color="#1e2d3d" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#bg-grad)" />
      
      <!-- Decorative background circles -->
      <circle cx="1100" cy="-20" r="160" fill="rgba(74, 158, 207, 0.12)" />
      <circle cx="400" cy="700" r="200" fill="rgba(74, 158, 207, 0.06)" />
      
      <!-- Texts constrained to left side -->
      <text x="80" y="240" font-family="sans-serif" font-size="64" font-weight="bold" fill="#ffffff" letter-spacing="1">Luis Alberto Reoyo Bolaños</text>
      <text x="80" y="310" font-family="sans-serif" font-size="28" font-weight="600" fill="#4a9ecf" letter-spacing="2">AUDITOR Y PENTESTER EN SEGURIDAD DE RED MÓVIL</text>
      
      <text x="80" y="380" font-family="sans-serif" font-size="24" fill="rgba(255,255,255,0.8)">Analista de Ciberseguridad con sólida experiencia en la gestión y análisis</text>
      <text x="80" y="420" font-family="sans-serif" font-size="24" fill="rgba(255,255,255,0.8)">de vulnerabilidades en infraestructuras críticas y tecnología blockchain.</text>
      
      <!-- Footer link -->
      <text x="80" y="550" font-family="sans-serif" font-size="24" fill="#64ffda">https://curriculum.genkipool.com</text>
    </svg>
  `;

  // Avatar sizing and placement (Right side, well away from text)
  const avatarSize = 280;
  
  const photoBuffer = await sharp('src/assets/luis_reoyo.png')
    .resize(avatarSize, avatarSize, { fit: 'cover' })
    .toBuffer();

  const circleSvg = `<svg width="${avatarSize}" height="${avatarSize}"><circle cx="${avatarSize/2}" cy="${avatarSize/2}" r="${avatarSize/2}" fill="#fff" /></svg>`;
  const circlePhoto = await sharp(photoBuffer)
    .composite([{ input: Buffer.from(circleSvg), blend: 'dest-in' }])
    .png()
    .toBuffer();

  await sharp(Buffer.from(svgBg))
    .composite([
      // Placed far right, vertically centered
      { input: circlePhoto, left: 850, top: 175 }
    ])
    .jpeg({ quality: 85, chromaSubsampling: '4:4:4' })
    .toFile('public/og-image.jpg');
    
  console.log("High-quality OG Image generated successfully at public/og-image.jpg");
}

generateOG().catch(console.error);
