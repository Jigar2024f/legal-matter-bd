import { projects } from "../../public/Data/projects";

export default function sitemap() {
  const baseUrl = "https://www.almahfuz.me";

  // Static pages for sitemap
  const pages = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resume`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/works`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  // Images for sitemap
  const images = Array.from({ length: 34 }, (_, index) => ({
    loc: `${baseUrl}/images/google/abdullah_al_mahfuz_image${index + 1}.jpg`,
    title: `Abdullah Al Mahfuz - Frontend Developer Image ${index + 1}`,
    caption: `Showcasing my journey as a dedicated frontend developer, this is Image ${
      index + 1
    }, highlighting my expertise in creating visually appealing and responsive web applications.`,
  }));

  // Projects for sitemap
  const myProjects = projects.map((project) => ({
    url: `${baseUrl}/works/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Combine all the data
  return [
    ...pages,
    ...myProjects,
    ...images.map((image) => ({
      url: image.loc,
      images: [
        {
          url: image.loc,
          title: image.title,
          caption: image.caption,
        },
      ],
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.3,
    })),
  ];
}
