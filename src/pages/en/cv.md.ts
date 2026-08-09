import { generateCvMarkdown } from '../cv.md.ts';

export async function GET() {
  return await generateCvMarkdown('en');
}
