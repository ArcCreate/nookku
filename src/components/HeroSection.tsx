import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';
import appStoreImage from '@/assets/app-store.png';
import heroPhoneImage from '@/assets/home-page-map.png';

const HeroSection = () => {
  const titleRef = useScrollReveal<HTMLHeadingElement>();
  const buttonRef = useScrollReveal<HTMLDivElement>();
  const phoneRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20 pb-32">
      {/* Parallax background */}
      <div className="parallax-bg" />
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Hero Text */}
        <div className="space-y-8">
          <h1
            ref={titleRef}
            className="scroll-reveal text-5xl md:text-7xl font-bold leading-tight"
          >
            Studying{' '}
            <span className="text-gradient">just got</span>{' '}
            <span className="text-gradient">a whole lot</span>{' '}
            easier
          </h1>
          
          <div ref={buttonRef} className="scroll-reveal">
            <a
              href="https://apps.apple.com/us/app/nook-study-spot-finder/id6747598612"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img
                src={appStoreImage}
                alt="Download on the App Store"
                className="h-14 hover:scale-105 transition-transform duration-300 btn-glow rounded-lg"
              />
            </a>
          </div>
        </div>

        {/* Phone Mockup */}
        <div
          ref={phoneRef}
          className="scroll-reveal flex justify-center lg:justify-end"
        >
          <div className="phone-float relative">
            <img
              src={heroPhoneImage}
              alt="Nook app showing study spots on map"
              className="max-w-sm w-full h-auto drop-shadow-2xl"
            />
            {/* Glow effect behind phone */}
            <div className="absolute inset-0 bg-gradient-hero opacity-20 blur-3xl scale-110 -z-10" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;