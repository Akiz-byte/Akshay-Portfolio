import { useEffect, useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Toms-cinema",
    description: "A movie watchlist and streaming platform powered by the TMDB API. Browse, search, and stream movies, add favorites to your watchlist with a modern UI.",
    technologies: ["ReactJS","Typescript","TailwindCSS", "Firebase", "TMDB API"],
    liveUrl: "https://toms-cinema.netlify.app/",
    githubUrl: "https://github.com/Akiz-byte/Toms-cinema",
    image: "./Tom-cinema.JPG",
  },
  {
    id: 2,
    title: "Vans-Life",
    description: "VanLife is a modern van rental platform built with React and Firebase. One stop webapp for road-trippers to browse, rent, and manage vans through a sleek, responsive interface.",
    technologies: ["ReactJS", "Firebase", "FireAuth"],
    liveUrl: "https://live-van-life.netlify.app/",
    githubUrl: "https://github.com/Akiz-byte/Van-Life",
    image: "./home.JPG",
  },
  {
    id: 3,
    title: "Final Compile",
    description: "React word-guessing game with programming themes. Guess the word before Assembly takes over! 🎮⚛️",
    technologies: ["ReactJS"],
    liveUrl: "https://final-compile.netlify.app/",
    githubUrl: "https://github.com/Akiz-byte/Final-Compile",
    image: "./Endgame start.JPG",
  },
];

const CaseStudyRow = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (rowRef.current) observer.observe(rowRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={rowRef}
      className={`group grid md:grid-cols-12 gap-6 items-center py-14 border-t border-border transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="md:col-span-5">
        <div className="aspect-[16/10] overflow-hidden rounded-xl relative  from-secondary to-muted">
          <img src={project.image} alt={project.title} className="w-full h-full object-contain scale-[1.02] transition-transform duration-700 group-hover:scale-[1.06]" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
      <div className="md:col-span-7">
        <div className="text-sm text-muted-foreground">Selected work</div>
        <h3 className="text-3xl md:text-4xl font-bold tracking-tight mt-1">{project.title}</h3>
        <p className="text-muted-foreground mt-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-5">
          {project.technologies.map((tech) => (
            <span key={tech} className="px-3 py-1 text-xs rounded-full bg-primary/15 text-primary border border-primary/25">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-3 mt-6">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-colors"
            aria-label={`Open live link for ${project.title}`}
          >
            LiveLink
            <ExternalLink className="w-4 h-4" />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border text-foreground hover:bg-muted transition-colors"
            aria-label={`Open GitHub repository for ${project.title}`}
          >
            Github Repo
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const [sectionVisible, setSectionVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className={`text-left mb-6 transition-all duration-1000 ${
          sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight">My Projects</h2>
        </div>

        <div>
          {projects.map((project, index) => (
            <CaseStudyRow key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;