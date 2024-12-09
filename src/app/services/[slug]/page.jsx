import { servicesData } from "../../../../public/data/services";
import ServiceDetails from "./ServiceDetails";

// Dynamic metadata generation function
export async function generateMetadata({ params }, parent) {
  const { slug } = params; // Access the dynamic `slug` from params

  const service = servicesData.find((b) => b.slug === slug);
  // Access parent metadata if needed (optional)
  const previousImages = (await parent)?.openGraph?.images || [];

  return {
    title: `${service?.title?.bn} | Legal Matter BD | Legal Services in Bangladesh`,
    description: `${service?.description?.bn} Explore our services tailored for your needs. Get expert legal guidance from Legal Matter BD.`,
    keywords: `${service?.title?.bn}, Legal Services, Legal Support, ${service?.title?.bn} Bangladesh`,
    openGraph: {
      title: `${service?.title?.bn} | Legal Matter BD`,
      description: service?.description?.bn,
      url: `https://legalmatterbd.com/services/${slug}`,
      images: [
        service?.image || "/default-service-image.jpg", // Default image if service doesn't have one
        ...previousImages, // Optionally extend previous images
      ],
      site_name: "Legal Matter BD",
      type: "website",
      locale: "en_US",
    },
    twitter: {
      title: `${service?.title?.bn} | Legal Matter BD`,
      description: service?.description?.bn,
      card: "summary_large_image",
      images: [
        service?.image || "/default-service-image.jpg", // Default image for Twitter card
      ],
    },
    robots: "index, follow",
    canonical: `https://legalmatterbd.com/services/${slug}`,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service?.title?.bn,
      description: service?.description?.bn,
      provider: {
        "@type": "Organization",
        name: "Legal Matter BD",
        url: "https://legalmatterbd.com",
        logo: "/images/navbar/logo.svg",
      },
      offers: {
        "@type": "Offer",
        priceCurrency: "BDT",
        price: service?.price || "Contact for Pricing",
      },
    },
  };
}

// Main page component rendering ServiceDetails
export default function Page({ params }) {
  return <ServiceDetails params={params} />;
}
