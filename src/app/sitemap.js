export default function sitemap() {
  const baseUrl = "https://www.legalmatterbd.com/";

  // Static pages for sitemap
  const pages = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  // Combine all the data
  return [...pages];
}
