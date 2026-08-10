import puppeteer from 'puppeteer';
import http from 'http';
import handler from 'serve-handler';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '..');
const distPath = path.join(projectRoot, 'dist');
const publicPath = path.join(projectRoot, 'public');

const server = http.createServer((request, response) => {
  return handler(request, response, {
    public: distPath
  });
});

server.listen(0, async () => {
  const port = server.address().port;
  console.log(`Server started at http://localhost:${port}`);
  
  let browser;
  try {
    browser = await puppeteer.launch({ 
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    // Generate ES PDF
    const pageEs = await browser.newPage();
    await pageEs.goto(`http://localhost:${port}/?print=true`, { waitUntil: 'networkidle0' });
    const pdfEs = await pageEs.pdf({ format: 'A4', printBackground: true });
    fs.writeFileSync(path.join(publicPath, 'cv-luis-es.pdf'), pdfEs);
    fs.writeFileSync(path.join(distPath, 'cv-luis-es.pdf'), pdfEs);
    console.log('ES PDF generated.');

    // Generate EN PDF
    const pageEn = await browser.newPage();
    await pageEn.goto(`http://localhost:${port}/en/?print=true`, { waitUntil: 'networkidle0' });
    const pdfEn = await pageEn.pdf({ format: 'A4', printBackground: true });
    fs.writeFileSync(path.join(publicPath, 'cv-luis-en.pdf'), pdfEn);
    fs.writeFileSync(path.join(distPath, 'cv-luis-en.pdf'), pdfEn);
    console.log('EN PDF generated.');
    
  } catch (error) {
    console.error('Error generating PDF:', error);
    process.exit(1);
  } finally {
    if (browser) {
      await browser.close();
    }
    server.close();
  }
});
