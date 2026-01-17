import { Poppins } from "next/font/google";
import localFont from "next/font/local";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const asgardFont = localFont({
  src: "./AsgardTrial-FitXbold.woff2",
  variable: "--font-asgard",
});
