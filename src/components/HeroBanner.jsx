import Image from "next/image";
import heart from "../../public/hero-donation-image.png";
const HeroBanner = () => {
  return (
    <div className="w-screen flex items-center justify-between">
      <div id="left-hero" className="p-4 ">
        <h1 className="text-7xl font-bold">Charity and donation</h1>
        <p className="font-semibold mt-4">
          Donation is not just about giving it is about making a change.
        </p>
      </div>
      <div id="right-hero" className="p-4">
        <Image
          src={heart}
          alt="hero-banner-image"
          className="bg-blend-multiply"
        />
      </div>
    </div>
  );
};

export default HeroBanner;
