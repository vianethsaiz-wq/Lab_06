import Image from "next/image";
import Header from "./Components/Header/Header";
import HeroSection from "./Components/HeroSection/HeroSection";
import Interest from "./Components/Components/Interests/Interests";
export default function Home() {
  return (
   <>
   <Header />
   <HeroSection />
   <Interest />

   </>
  );
}
