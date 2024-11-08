import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { Inter_Tight, Noto_Serif_Bengali } from "next/font/google";
// Load the Inter Tight font
const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight", // You can change this if needed
  weight: ["400", "500", "600", "700"], // Specify only the weights you use
});

// Add Noto Serif Bengali font instance
const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["bengali"],
  weight: ["400", "700"], // Specify font weights
  variable: "--font-noto-serif-bengali", // Define a CSS variable
});

export const metadata = {
  title: "Legal Matter BD | Legal Services & Solutions in Bangladesh",

  description:
    "Legal Matter BD provides reliable and professional legal services, tailored to address diverse legal needs across Bangladesh. Explore our solutions for justice, legal compliance, and expert guidance with a customer-centric approach.",

  keywords:
    "Legal Matter BD, Legal Services, Law Firm, Legal Compliance, Bangladesh Legal Support, Legal Solutions, Justice Assistance, Legal Matters Bangladesh, Legal Expertise, Sylhet Legal Services, Customer-Centric Legal Solutions, Vastu Compliance, Legal Advocacy, Legal Consultancy, Reliable Law Firm, Legal Documentation, Legal Support BD, Local Legal Experts, Court Representation, Legal Assistance Bangladesh, Tax Compliance, Law BD, Vastu Guidance BD, Contract Drafting, Legal Matter Assistance, Family Law, Business Law, Land Law Bangladesh, Legal Help, Expert Legal Services, International Legal Experience BD",

  author: "Legal Matter BD Team",

  openGraph: {
    title: "Legal Matter BD | Legal Solutions for Every Need",
    description:
      "Discover Legal Matter BD, your trusted partner for navigating legal complexities with professional guidance, compliance solutions, and reliable legal support across Bangladesh.",
    url: "https://legalmatterbd.com",
    images: [
      {
        url: "/openGraph.jpg",
        alt: "Legal Matter BD - Reliable Legal Solutions",
        width: 1200,
        height: 630,
      },
    ],
    site_name: "Legal Matter BD - Trusted Legal Services",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    title: "Legal Matter BD | Expert Legal Solutions in Bangladesh",
    description:
      "Explore Legal Matter BD for professional legal services tailored to individual and business needs. Reliable, efficient, and customer-focused solutions for legal matters.",
    card: "summary_large_image",
    images: [
      {
        url: "/openGraph.jpg",
        alt: "Legal Matter BD Legal Services",
      },
    ],
  },

  robots: "index, follow",
  canonical: "https://legalmatterbd.com",

  structuredData: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Legal Matter BD",
    url: "https://legalmatterbd.com",
    sameAs: [
      "https://www.facebook.com/legalmatterbd",
      "https://github.com/legalmatterbd",
      "https://www.linkedin.com/company/legalmatterbd",
      "https://legalmatterbd.com/",
    ],
    logo: "/images/navbar/logo.svg",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+8801712-581787",
      email: "info@legalmatterbd.com",
      contactType: "Customer Service",
      areaServed: "BD",
      availableLanguage: ["English", "Bengali"],
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${interTight.className} ${notoSerifBengali.variable} antialiased bg-white text-primary overflow-x-hidden`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
