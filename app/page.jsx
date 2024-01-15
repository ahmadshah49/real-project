import Image from "next/image";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";
import Services from "./components/Service/Service";
import Pricing from "./components/Pricing/Pricing";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      {/* <Main /> */}

      <Hero />
      <Services />
      <Pricing />
    </>
  );
}
