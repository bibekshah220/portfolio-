import HeroImage from "./HeroImage";
import Info from "./Info";

const Hero = () => {
  return (
    <section
      id="hero"
      className="pt-[80px] main-container relative z-10 w-screen overflow-hidden"
    >
      <div className="sm:py-[6rem] py-[3rem] lg:px-16 lg:gap-16 px-6 gap-12 relative flex sm:flex-row flex-col justify-between items-center w-full">
        <Info />
        <HeroImage />
      </div>
    </section>
  );
};

export default Hero;
