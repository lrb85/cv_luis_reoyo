import { getLocalizedCollection } from '#/utils/collections';
import { useTranslations } from '#/i18n/utils';

export async function generateCvMarkdown(lang: 'es' | 'en') {
  const t = useTranslations(lang);

  const htmlToMd = (html: string) => {
    if (!html) return '';
    return html.replace(/<\/?strong>/g, '**').replace(/<[^>]+>/g, '');
  };

  const expEntries = await getLocalizedCollection('experience', lang);
  const projEntries = await getLocalizedCollection('projects', lang);
  const eduEntries = await getLocalizedCollection('education', lang);
  const skillEntries = await getLocalizedCollection('skills', lang);
  const skills = skillEntries[0]?.data.items || [];

  let md = `# Luis Alberto Reoyo Bolaños\n\n`;
  md += `> **${t('header.job')}**\n\n`;
  md += `${t('header.summary')}\n\n`;
  md += `**${lang === 'es' ? 'Contacto' : 'Contact'}:**\n`;
  md += `- **Email:** luisrb1985@gmail.com\n`;
  md += `- **Tel:** 617 23 87 25\n`;
  md += `- **GitHub:** https://github.com/genkipool\n`;
  md += `- **X (Twitter):** https://x.com/GenkipoolC\n`;
  md += `- **${lang === 'es' ? 'Localidad' : 'Location'}:** Madrid, ${lang === 'es' ? 'España' : 'Spain'}\n\n`;
  md += `---\n\n`;

  md += `## ${t('nav.experience')}\n\n`;
  expEntries.forEach(e => {
    md += `### ${e.data.title}\n`;
    md += `**${e.data.companyLabel}** ${e.data.company} ${e.data.dateRange ? `| *${e.data.dateRange}*` : ''}\n\n`;
    e.data.functions.forEach(f => {
      const stripped = htmlToMd(f);
      md += `- ${stripped}\n`;
    });
    md += `\n`;
  });

  md += `## ${t('nav.projects')}\n\n`;
  projEntries.forEach(e => {
    md += `### ${e.data.title}\n`;
    const meta = [];
    e.data.links.forEach(l => {
      meta.push(`**${l.label}** ${l.url ? `[${l.text}](${l.url})` : l.text}`);
    });
    const strippedDesc = htmlToMd(e.data.description);
    meta.push(`**${e.data.descriptionLabel}** ${strippedDesc}`);
    md += meta.join(' | ') + '\n\n';
    
    e.data.functions.forEach(f => {
      md += `- ${htmlToMd(f)}\n`;
    });
    md += `\n`;
  });

  md += `## ${t('nav.education')}\n\n`;
  eduEntries.forEach(e => {
    md += `### ${e.data.title}\n`;
    md += `*${e.data.categoryLabel}*\n\n`;
    e.data.details.forEach(d => {
      md += `- **${d.label}** ${d.url ? `[${d.text}](${d.url})` : d.text}\n`;
    });
    md += `\n`;
  });

  md += `## ${t('nav.skills')}\n\n`;
  skills.forEach(s => {
    md += `- **${s.label1}** ${htmlToMd(s.value1)} | **${s.label2}** ${s.value2}\n`;
  });

  return new Response(md, {
    status: 200,
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8'
    }
  });
}

export async function GET() {
  return await generateCvMarkdown('es');
}
