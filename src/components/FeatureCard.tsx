import { useScrollReveal } from '@/hooks/useScrollReveal';

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  delay?: number;
}

const FeatureCard = ({ title, description, image, imageAlt, reverse = false, delay = 0 }: FeatureCardProps) => {
  const cardRef = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={cardRef}
      className={`scroll-reveal transition-all duration-500`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:grid-flow-col-dense' : ''}`}>
        {/* Text Content */}
        <div className={`space-y-8 ${reverse ? 'lg:col-start-2' : ''}`}>
          <h3 className="text-4xl lg:text-5xl font-playfair font-semibold text-gradient tracking-tight leading-tight">
            {title}
          </h3>
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed font-inter font-light tracking-wide">
            {description}
          </p>
        </div>

        {/* Phone Image */}
        <div className={`flex justify-center ${reverse ? 'lg:col-start-1' : ''}`}>
          <div className="relative group perspective-1000">
            {/* Phone container with subtle tilt */}
            <div className={`relative transition-all duration-700 group-hover:scale-105 ${
              reverse ? 'transform rotate-2 group-hover:rotate-1' : 'transform -rotate-2 group-hover:rotate-1'
            }`}>
              {/* Enhanced shadow */}
              <div className="absolute inset-0 bg-black/20 blur-xl transform translate-y-4 scale-95 transition-all duration-500 group-hover:translate-y-6 group-hover:scale-100" />
              
              {/* Phone image */}
              <img
                src={image}
                alt={imageAlt}
                className="relative max-w-sm w-full h-auto transition-all duration-500 group-hover:shadow-2xl"
                style={{
                  filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.3))',
                }}
              />
              
              {/* Screen glow effect */}
              <div className="absolute inset-[8%] bg-gradient-to-br from-primary/20 via-transparent to-accent/10 rounded-[12%] opacity-0 group-hover:opacity-60 transition-all duration-500 blur-sm" />
              
              {/* Ambient glow */}
              <div className="absolute inset-0 bg-primary/5 blur-3xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;