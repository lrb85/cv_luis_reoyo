import type { APIRoute } from 'astro';
import satori from 'satori';
import { html } from 'satori-html';
import { Resvg } from '@resvg/resvg-js';
import { ui } from '#/i18n/ui';
import { getYearsOfExperience } from '#/i18n/utils';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

export async function getStaticPaths() {
  return [
    { params: { lang: 'es' } },
    { params: { lang: 'en' } },
  ];
}

export const GET: APIRoute = async ({ params }) => {
  const { lang } = params;
  
  // Extract texts based on language
  const isES = lang === 'es';
  const name = "Luis Reoyo Bolaños";
  
  const jobString = isES 
    ? "SENIOR EN SEGURIDAD DE REDES | TELCO Y HARDENING"
    : "SENIOR IN NETWORK SECURITY | TELCO & HARDENING";
  
  let summary = isES
    ? ui.es['header.summary'] || "{years} años de experiencia como técnico de seguridad en telecomunicaciones..."
    : ui.en['header.summary'] || "{years} years of experience as a telecommunications security technician...";
  
  summary = summary.replace('{years}', getYearsOfExperience().toString());

  const url = "https://curriculum.genkipool.com";

  // Read the background plate (which is the original OG image but without text)
  const bgPath = path.resolve(process.cwd(), 'public/og-background.jpg');
  const bgImage = fs.readFileSync(bgPath, 'base64');
  const bgSrc = `data:image/jpeg;base64,${bgImage}`;

  // Fetch Inter font for rendering (matches the original image better)
  const fontFile = await fetch('https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZhrib2Bg-4.ttf');
  const fontData = await fontFile.arrayBuffer();

  const fontFileBold = await fetch('https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYMZhrib2Bg-4.ttf');
  const fontDataBold = await fontFileBold.arrayBuffer();

  const markupStr = `
    <div style="display: flex; flex-direction: column; width: 100%; height: 100%;">
      <img src="${bgSrc}" style="position: absolute; top: 0; left: 0; width: 1200px; height: 630px;" />
      
      <div style="display: flex; flex-direction: column; margin-left: 95px; margin-top: 155px; width: 660px; z-index: 10;">
         <div style="font-family: 'Inter'; font-size: 58px; font-weight: 700; color: #ffffff; margin-bottom: 12px; letter-spacing: -1px; text-shadow: 0px 4px 10px rgba(0,0,0,0.5);">
           ${name}
         </div>
         <div style="font-family: 'Inter'; font-size: 20px; font-weight: 700; color: #38bdf8; margin-bottom: 25px; letter-spacing: 1px; text-shadow: 0px 2px 4px rgba(0,0,0,0.5);">
           ${jobString}
         </div>
         <div style="font-family: 'Inter'; font-size: 21px; font-weight: 400; color: #cbd5e1; line-height: 1.5; text-shadow: 0px 2px 4px rgba(0,0,0,0.5);">
           ${summary}
         </div>
      </div>
      
      <div style="display: flex; position: absolute; bottom: 70px; left: 95px; z-index: 10;">
        <div style="font-family: 'Inter'; font-size: 20px; font-weight: 700; color: #10b981; letter-spacing: 0.5px;">
          ${url}
        </div>
      </div>
    </div>
  `;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const markup = html([markupStr] as any);

  const svg = await satori(markup, {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: 'Inter',
        data: fontData,
        weight: 400,
        style: 'normal',
      },
      {
        name: 'Inter',
        data: fontDataBold,
        weight: 700,
        style: 'normal',
      }
    ],
  });

  const resvg = new Resvg(svg, {
    fitTo: { mode: 'width', value: 1200 },
  });
  
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();

  const jpegBuffer = await sharp(pngBuffer)
    .jpeg({ quality: 80, progressive: true })
    .toBuffer();

  return new Response(jpegBuffer, {
    headers: {
      'Content-Type': 'image/jpeg',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
