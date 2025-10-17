import { useEffect, useRef, useState } from 'react';
import {
  siReact,
  siTypescript,
  siNextdotjs,
  siNodedotjs,
  siMysql,
  siFirebase,
  siDocker,
  siTailwindcss,
  siFigma,
  siGsap,
  siClerk,
  siGit,
  siGithub,
} from 'simple-icons';

const technologies = [,
  { name: 'React', icon: siReact },
  { name: 'TypeScript', icon: siTypescript },
  { name: 'SQL', icon: siMysql },
  { name: 'MySQL', icon: siMysql },
  { name: 'Tailwind CSS', icon: siTailwindcss },
  { name: 'Figma', icon: siFigma },
  { name: 'Firebase', icon: siFirebase },
  { name: 'Git', icon: siGit },
  { name: 'GitHub', icon: siGithub },

];

const TechIcon = ({ tech, index }: { tech: typeof technologies[0]; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 100);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`group relative flex flex-col items-center p-6 rounded-xl card-premium transition-all duration-500 transform-gpu cursor-pointer ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationDelay: `${index * 0.1}s`,
      }}
    >
      <div className="relative z-10 flex flex-col items-center">
        <div
          className={`mb-3 flex items-center justify-center w-16 h-16 rounded-full border border-border bg-background/40 transition-transform duration-300 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        >
          <svg
            role="img"
            viewBox="0 0 24 24"
            aria-label={tech.name}
            className={`w-8 h-8 text-foreground transition-colors duration-300 group-hover:text-primary`}
          >
            <title>{tech.icon.title}</title>
            <path d={tech.icon.path} fill="currentColor" />
          </svg>
        </div>
        <span
          className={`font-semibold text-sm transition-all duration-300 ${
            isHovered ? 'text-primary scale-105' : 'text-foreground'
          }`}
        >
          {tech.name}
        </span>
      </div>
    </div>
  );
};

const TechStackSection = () => {
  const [sectionVisible, setSectionVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full opacity-5 animate-float"
             style={{
               background: 'radial-gradient(circle, hsl(var(--foreground) / 0.2), transparent 70%)',
               animationDelay: '1s',
             }} />
        <div className="absolute bottom-1/3 right-0 w-64 h-64 rounded-full opacity-5 animate-float"
             style={{
               background: 'radial-gradient(circle, hsl(var(--foreground) / 0.15), transparent 70%)',
               animationDelay: '3s',
             }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            Technologies I use
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Design systems, front-end engineering, and product craftsmanship
          </p>
        </div>

        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 delay-300 ${
          sectionVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          {technologies.map((tech, index) => (
            <TechIcon key={tech.name} tech={tech} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;