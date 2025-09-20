import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Mail, Instagram } from 'lucide-react';
import appStoreImage from '@/assets/app-store.png';

const ContactSection = () => {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section ref={sectionRef} className="scroll-reveal py-16 text-center -mt-8" id="contact">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">
            Contact Us
          </h2>
          
          <p className="text-xl text-muted-foreground">
            Ready to revolutionize your study experience? Download Nook today and discover your perfect study spots.
          </p>
          
          <div className="pt-4 space-y-4">
            <a
              href="https://apps.apple.com/us/app/nook-study-spot-finder/id6747598612"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img
                src={appStoreImage}
                alt="Download on the App Store"
                className="h-16 hover:scale-105 transition-transform duration-300 btn-glow rounded-lg mx-auto"
              />
            </a>
            
            <div className="flex justify-center gap-8">
              <a
                href="mailto:contact@nookapp.com"
                className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Mail className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm">Email Us</span>
              </a>
              <a
                href="https://instagram.com/nookapp"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm">Follow Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;