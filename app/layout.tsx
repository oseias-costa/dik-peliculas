import type { Metadata } from "next";
import { Montserrat, DM_Sans } from "next/font/google";
import StyledComponentsRegistry from "./lib/registry";
import { GlobalStyle } from "./lib/GlobalStyle";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300"],
  variable: "--font-montserrat",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dmSans",
});

export const metadata: Metadata = {
  title: "Dik Películas",
  description:
    "Trabalhamos com Películas de Alta Performance para seu carro e residência. Películas em Jaguaruna SC - Instalação de Películas em Jaguaruna",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`${dmSans.variable} ${montserrat.variable}`}>
        <StyledComponentsRegistry>
          <GlobalStyle />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
