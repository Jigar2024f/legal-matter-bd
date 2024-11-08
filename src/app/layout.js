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
  title: "Legal Matter BD",
  description:
    "Legal Matter BD is here to help you with your legal issues. Our experienced team works by your side, making the process simpler, and giving you clear advice and practical solutions so you can feel confident moving forward.",
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
