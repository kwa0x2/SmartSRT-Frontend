import HeroContent from "./hero-content";

interface HeroProps {
  isAuthenticated: boolean
}

const Hero = ({isAuthenticated}: HeroProps) => {
  return (
    <section id="hero" className="py-40 md:py-32 lg:py-64 min-w-screen">
      <div className="px-4 md:px-8 lg:px-64 mx-auto">
        <HeroContent isAuthenticated={isAuthenticated}/>
      </div>
    </section>
  );
};

export default Hero;    