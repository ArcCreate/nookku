import FeatureCard from './FeatureCard';
import homePageImage from '@/assets/home-page.png';
import spotDetailImage from '@/assets/spot-detail.png';
import focusPageImage from '@/assets/focus-page.png';

const FeaturesSection = () => {
  const features = [
    {
      title: "Find Study Spots",
      description: "Browse a comprehensive list of the best study locations on campus to find your perfect Nook. Discover quiet libraries, cozy cafés, and hidden gems that match your study preferences.",
      image: homePageImage,
      imageAlt: "Nook app home page showing study locations",
      reverse: false
    },
    {
      title: "Real-Time Updates", 
      description: "Update and track live crowding levels, noise levels, and special alerts for each study spot. Stay informed about current conditions before you head out to study.",
      image: spotDetailImage,
      imageAlt: "Nook app spot detail page with real-time information",
      reverse: true
    },
    {
      title: "Lock-in",
      description: "Enter focus mode with a pomodoro timer and set and track study goals to boost your productivity. Create a distraction-free environment and make the most of your study sessions at your favorite Nooks.",
      image: focusPageImage,
      imageAlt: "Nook app focus page with pomodoro timer",
      reverse: false
    }
  ];

  return (
    <section className="py-24 relative -mt-16 pt-40" id="about">
      {/* Curved connecting line background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M 5 15 Q 30 5 50 25 Q 70 45 95 20 Q 80 35 60 40 Q 40 45 20 60 Q 30 80 50 65 Q 70 50 95 85"
            stroke="hsl(var(--primary) / 0.3)"
            strokeWidth="0.3"
            fill="none"
            className="animate-pulse"
            style={{
              animationDuration: '6s',
            }}
          />
          <path
            d="M 8 18 Q 32 8 52 28 Q 72 48 97 23 Q 82 38 62 43 Q 42 48 22 63 Q 32 83 52 68 Q 72 53 97 88"
            stroke="hsl(var(--primary) / 0.15)"
            strokeWidth="0.2"
            fill="none"
            className="animate-pulse"
            style={{
              animationDuration: '8s',
              animationDelay: '1s',
            }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="space-y-24">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              {...feature}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;