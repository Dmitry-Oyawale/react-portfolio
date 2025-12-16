import "../styles/globals.css";
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["300", "400", "500", "600", "700"],
});

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={`${inter.className} ${spaceGrotesk.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}