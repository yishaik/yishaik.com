import type { APIRoute } from 'astro';

const pages = [
  {
    loc: 'https://yishaik.com/',
    alternates: [
      { hreflang: 'en', href: 'https://yishaik.com/' },
      { hreflang: 'he', href: 'https://yishaik.com/he/' },
      { hreflang: 'x-default', href: 'https://yishaik.com/' },
    ],
  },
  {
    loc: 'https://yishaik.com/he/',
    alternates: [
      { hreflang: 'en', href: 'https://yishaik.com/' },
      { hreflang: 'he', href: 'https://yishaik.com/he/' },
      { hreflang: 'x-default', href: 'https://yishaik.com/' },
    ],
  },
];

export const GET: APIRoute = () => {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages
  .map(
    (page) => `  <url>
    <loc>${page.loc}</loc>
${page.alternates.map((alt) => `    <xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${alt.href}" />`).join('\n')}
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
