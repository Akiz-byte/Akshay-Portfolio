import { useEffect, useRef, useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactSection = () => {
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



  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sawantakshay2309@gmail.com',
      // href: 'aniketgavate12345@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+919307715466',
      // href: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Mumbai, Maharashtra, India',
      // href: 'https://maps.google.com',
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10 animate-float"
             style={{
               background: 'radial-gradient(circle, hsl(var(--neon-purple) / 0.3), transparent 70%)',
               animationDelay: '2s',
             }} />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full opacity-10 animate-float"
             style={{
               background: 'radial-gradient(circle, hsl(var(--neon-blue) / 0.3), transparent 70%)',
               animationDelay: '4s',
             }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            Get in touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's collaborate and create something amazing together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${
            sectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-glow">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always excited to discuss new opportunities, innovative projects, 
                or just have a chat about technology and development.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={info.label}
                  // href={info.href}
                  className="group flex items-center gap-4 p-4 rounded-xl card-premium transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-3 rounded-full bg-primary/20 border border-primary/30 group-hover:bg-primary/30 transition-colors duration-300">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {info.label}
                    </p>
                    <p className="text-muted-foreground text-sm">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
          {/* Empty column as placeholder */}
          <div className={`transition-all duration-1000 delay-500 ${
            sectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;