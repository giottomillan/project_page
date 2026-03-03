import { Space_Grotesk, Work_Sans } from "next/font/google";
import "./globals.css";

const headingFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk"
});

const bodyFont = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans"
});

export const metadata = {
  metadataBase: new URL("https://giottomillan.github.io/project_page"),
  title: {
    default: "Giotto Millan | Data Scientist",
    template: "%s | Giotto Millan"
  },
  description:
    "Portfolio de Giotto Millan con proyectos de ciencia de datos, machine learning y visualizacion.",
  keywords: [
    "Data Scientist",
    "Machine Learning",
    "Portfolio",
    "Python",
    "SQL",
    "Data Analytics"
  ],
  openGraph: {
    title: "Giotto Millan | Data Scientist",
    description:
      "Portfolio con proyectos de ciencia de datos, analitica y machine learning.",
    url: "https://giottomillan.github.io/project_page/",
    siteName: "Giotto Millan Portfolio",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/images/photo_page.jpeg",
        width: 1200,
        height: 630,
        alt: "Giotto Millan portfolio cover"
      }
    ]
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>{children}</body>
    </html>
  );
}

