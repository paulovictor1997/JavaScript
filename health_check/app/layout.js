import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata = {
  title: "Health Check PDVs",
  description: "Painel de monitoramento de saúde dos PDVs",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-br"
      className={`${roboto.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#0A0307] text-[#EBEBEB]">
        {children}
      </body>
    </html>
  );
}