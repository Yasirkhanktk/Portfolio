import React, { useEffect, useRef, useState } from 'react';

const IntroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 relative overflow-hidden" ref={sectionRef}>
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-8">
          {/* Main content */}
          <div className={`space-y-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Crafting Intuitive Interfaces
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Modern design solutions that elevate user experiences. I believe in creating digital products 
              that not only look beautiful but also solve real problems for users.
            </p>
          </div>

          {/* Features grid */}
          <div className={`grid md:grid-cols-3 gap-8 mt-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            {[
              {
                title: 'User-Centered Design',
                description: 'Every design decision is backed by user research and data-driven insights.'
              },
              {
                title: 'Modern Aesthetics',
                description: 'Clean, contemporary designs that stay current with the latest trends.'
              },
              {
                title: 'Functional Beauty',
                description: 'Beautiful interfaces that prioritize usability and accessibility.'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="space-y-4 p-6 rounded-2xl bg-card/50 hover:bg-card/80 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl mx-auto flex items-center justify-center">
                  <div className="w-6 h-6 bg-primary rounded opacity-80" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className={`pt-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <button
              onClick={scrollToAbout}
              className="border border-primary text-primary px-8 py-4 rounded-xl font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 button-glow"
            >
              Learn More About Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;