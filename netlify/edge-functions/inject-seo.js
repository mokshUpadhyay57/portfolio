import projects from "./projects.json" assert { type: "json" };

export default async (request, context) => {
  const url = new URL(request.url);
  const pathParts = url.pathname.split("/");
  const id = parseInt(pathParts[pathParts.length - 1]);

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return;
  }

  const response = await context.next();
  const html = await response.text();

  // Construct dynamic OG image URL
  const ogImageUrl = `${url.origin}/.netlify/functions/og-image?title=${encodeURIComponent(
    project.title
  )}&category=${encodeURIComponent(project.category)}`;

  // Inject meta tags into the head
  const headInjection = `
    <meta property="og:title" content="${project.title} | Moksh Codes">
    <meta property="og:image" content="${ogImageUrl}">
    <meta name="twitter:title" content="${project.title} | Moksh Codes">
    <meta name="twitter:image" content="${ogImageUrl}">
    <meta name="twitter:card" content="summary_large_image">
  `;

  const newHtml = html.replace("</head>", `${headInjection}</head>`);

  return new Response(newHtml, {
    headers: response.headers,
  });
};
