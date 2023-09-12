import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import Providers from "./providers.js";

const poppins = Poppins({
  display: "swap",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "New Project",
  description: "Next app",
};

type RootLayoutProps = {
  children: React.ReactNode;
  params: {
    lang: string;
  };
};

export default function RootLayout({ children, params }: RootLayoutProps) {
    console.log(params, 'params');

    return (
    <html lang={params.lang}>
      <body className={poppins.className} >
        <Providers>
          <Header />
          <main className="min-h-screen" >{children}</main>
          <Footer />
        </Providers>
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
