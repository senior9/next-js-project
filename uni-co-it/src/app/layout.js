'use client'
import Header from "@/components/header/Header";
import "./globals.css";
import Slider from "@/components/slider/Slider";
import CardComponents from "@/components/card/CardComponents";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Unico It Ltd",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      {/*Header*/}
      <Header></Header>
      {/*slider*/}
      <Slider></Slider>
      <CardComponents></CardComponents>

        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}