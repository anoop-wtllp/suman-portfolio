import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
});

const body = Poppins({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title:
    "Suman Pal — B.Sc Nursing | Child Health Nursing Specialist",
  description:
    "Suman Pal, B.Sc Nursing from Indira Gandhi School and College of Nursing, specializing in Child Health (Pediatric) Nursing. Gentle, expert, patient-centered care for infants and children.",
  keywords: [
    "Suman Pal",
    "B.Sc Nursing",
    "Child Health Nursing",
    "Pediatric Nurse",
    "Nurse",
    "Healthcare",
    "Patient Care",
    "Indira Gandhi School and College of Nursing",
  ],
  authors: [{ name: "Suman Pal" }],
  openGraph: {
    title: "Suman Pal — Child Health Nursing Specialist",
    description:
      "Compassionate, patient-centered pediatric nursing care. B.Sc Nursing, Indira Gandhi School and College of Nursing, specializing in Child Health Nursing.",
    type: "profile",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
