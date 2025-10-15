import { useEffect, useState } from 'react';
import { Github, Linkedin } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) * 0.01,
        y: (e.clientY - window.innerHeight / 2) * 0.01,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 animate-float"
          style={{
            background: 'radial-gradient(circle, hsl(var(--foreground) / 0.1), transparent 70%)',
            transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        />
        <div 
          className="absolute top-3/4 right-1/4 w-64 h-64 rounded-full opacity-10 animate-float"
          style={{
            background: 'radial-gradient(circle, hsl(var(--foreground) / 0.08), transparent 70%)',
            transform: `translate(${mousePosition.x * -8}px, ${mousePosition.y * -8}px)`,
            transition: 'transform 0.1s ease-out',
            animationDelay: '2s',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6">
        <div className={`transition-all duration-1000   ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1
            className="text-[64px] hover:animate-float md:text-[140px] font-extrabold tracking-[-0.04em] leading-[2.1] mb-6 text-transparent bg-clip-text"
            style={{ backgroundImage: 'linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.55) 100%)' }}
          >
            AHaya saava/ta
          </h1>
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* <p className="text-xl md:text-2xl font-medium text-foreground mb-6"></p> */}
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-7">
              Front End Developer passionate about creating innovative web solutions.
            </p>
          </div>
        </div>

        {/* Social Icons */}
        <div className={`flex justify-center gap-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a
            href="https://github.com/Akiz-byte"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-4 rounded-full border border-border hover:border-primary transition-all duration-300 magnetic-hover "
          >
            <Github className="w-8 h-8 text-foreground group-hover:text-primary transition-colors duration-300" />
            <div className="absolute inset-0 rounded-full bg-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/front-end-engineer-"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-4 rounded-full border border-border hover:border-primary transition-all duration-300 magnetic-hover"
          >
            <Linkedin className="w-8 h-8 text-foreground group-hover:text-primary transition-colors duration-300" />
            <div className="absolute inset-0 rounded-full bg-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </a>
        </div>

        {/* Scroll Indicator */}
        {/* <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;