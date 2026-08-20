import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Study Hub | Seu espaço de estudos",
  description: "Organize seus estudos e acompanhe seu progresso.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
