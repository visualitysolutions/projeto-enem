import type { Metadata } from "next";
import "@fontsource-variable/fraunces";
import "@fontsource-variable/fraunces/wght-italic.css";
import "@fontsource-variable/instrument-sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Passo | Seu próximo passo é o Enem",
  description:
    "Pouco tempo, um plano possível. Organize seus estudos para o Enem com uma rotina leve, apostilas objetivas e exercícios para praticar.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
