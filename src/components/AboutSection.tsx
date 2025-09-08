import React, { useEffect, useRef, useState } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'Figma', level: 95, icon: '🎨' },
    { name: 'Framer', level: 90, icon: '⚡' },
    { name: 'Adobe XD', level: 85, icon: '✨' },
    { name: 'Webflow', level: 80, icon: '🚀' },
    { name: 'Illustrator', level: 88, icon: '🎯' },
    { name: 'Prototyping', level: 92, icon: '🔧' }
  ];

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

  return (
    <section id="about" className="py-32 relative overflow-hidden" ref={sectionRef}>
      {/* Background elements */}
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl floating-element" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-primary/10 rounded-full blur-2xl floating-element" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className={`text-center mb-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-block p-3 rounded-2xl glass-morphism mb-6">
            <span className="text-primary font-medium">✨ Get to know me</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating digital experiences that matter
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Bio section with floating card */}
          <div className={`${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="glass-morphism rounded-3xl p-8 md:p-12 space-y-8 modern-card-hover">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-foreground">
                  Creating <span className="gradient-text">Digital Magic</span>
                </h3>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    I'm a passionate UI/UX designer and creative developer who believes that great design 
                    is not just about how something looks, but how it works and feels to the user.
                  </p>
                  <p>
                    With over 5 years of experience crafting digital experiences, I've helped startups 
                    scale and established companies innovate through human-centered design approaches.
                  </p>
                  <p>
                    My mission is to bridge the gap between creativity and functionality, creating 
                    products that users don't just use, but genuinely love.
                  </p>
                </div>
              </div>

              {/* Philosophy */}
              <div className="border-t border-border pt-8">
                <h4 className="text-xl font-semibold text-primary mb-4">Design Philosophy</h4>
                <div className="grid gap-4">
                  {[
                    "Every pixel serves a purpose",
                    "User needs come before trends",
                    "Simplicity is the ultimate sophistication"
                  ].map((philosophy, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{philosophy}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Skills section with animated bars */}
          <div className={`${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-foreground mb-8">Skills & Expertise</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-medium text-foreground">{skill.name}</span>
                      </div>
                      <span className="text-primary font-bold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-card rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-blue-400 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Certificates */}
              <div className="mt-12 p-6 glass-morphism rounded-2xl">
                <h4 className="text-xl font-semibold text-primary mb-4">Certifications</h4>
                <div className="space-y-3">
                  {[
                    "Google UX Design Professional Certificate",
                    "Adobe Certified Expert - XD",
                    "Figma Advanced Certification"
                  ].map((cert, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-muted-foreground">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;