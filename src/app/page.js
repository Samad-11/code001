import CategoryCard from "@/components/CategoryCard";
import HeroBanner from "@/components/HeroBanner";
import Navbar from "@/components/Navbar";
import UiButton from "@/components/UiButton";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <UiButton value={"Donate Now"} />
      <CategoryCard />
    </>
  );
}
