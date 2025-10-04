import HeroContent from "./hero-content";

interface HeroProps {
  isAuthenticated: boolean
}

const Hero = ({isAuthenticated}: HeroProps) => {
  return (
    <section id="hero" className="py-40 md:py-32 lg:py-64 min-w-screen relative">
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-30 pointer-events-none hidden md:block"
        style={{
          backgroundImage: "url('/images/hero-wave.svg')",
          backgroundSize: "100% auto"
        }}
      />
      <div className="px-4 md:px-8 lg:px-64 mx-auto relative z-10">
        <HeroContent isAuthenticated={isAuthenticated}/>
      </div>
    </section>
  );
};

export default Hero;    