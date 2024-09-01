import Footer from "@/components/footer";
import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter, Urbanist } from "next/font/google";
import Navbar from "@/components/navbar";
import Providers from "@/providers";
import NavbarMenu from "@/components/Navbar";
import { cn } from "@/lib/utils";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store",
  description: "E-commerce store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(font.className , "pt-[20vh]")}>
        <Providers>
          <NavbarMenu />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
