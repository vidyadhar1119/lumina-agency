import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from "@/components/ui/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lumina Design Co. | Creative Design Agency",
  description:
    "We design and build digital experiences that captivate, convert, and endure. Specialising in UI/UX Design, Web Development, Branding & Digital Marketing.",
  keywords: ["design agency", "UI/UX", "web development", "branding", "digital marketing"],
  authors: [{ name: "Lumina Design Co." }],
  openGraph: {
    title: "Lumina Design Co. | Creative Design Agency",
    description:
      "We design and build digital experiences that captivate, convert, and endure.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumina Design Co. | Creative Design Agency",
    description: "We design and build digital experiences that captivate, convert, and endure.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${syne.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
