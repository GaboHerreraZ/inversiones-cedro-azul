export default async function sitemap() {
  const baseUrl = "https://www.grupocedroazul.com";
  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/sobre-nosotros`, lastModified: new Date() },
    { url: `${baseUrl}/proyectos`, lastModified: new Date() },
  ];
}
