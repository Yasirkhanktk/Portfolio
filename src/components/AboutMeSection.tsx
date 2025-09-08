import React, { useEffect, useRef, useState } from 'react';

const AboutMeSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
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

  const workExperience = [
    {
      company: 'Meta',
      role: 'Senior UX Designer',
      period: '2023 - Present',
      description: 'Leading design for core user experience features',
      logo: '🔵',
      color: 'blue',
      achievement: '35% engagement boost'
    },
    {
      company: 'Google',
      role: 'Product Designer',
      period: '2021 - 2023',
      description: 'Designed innovative solutions for cloud products',
      logo: '🟡',
      color: 'yellow',
      achievement: '10M+ users reached'
    },
    {
      company: 'Airbnb',
      role: 'UX Designer',
      period: '2019 - 2021',
      description: 'Reimagined booking experience',
      logo: '🔴',
      color: 'red',
      achievement: '28% conversion increase'
    },
    {
      company: 'Spotify',
      role: 'Junior Designer',
      period: '2018 - 2019',
      description: 'Crafted music discovery interfaces',
      logo: '🟢',
      color: 'green',
      achievement: '15% retention boost'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden" ref={sectionRef}>
      {/* Simplified Background */}
      <div className="absolute inset-0 gradient-mesh opacity-20" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl floating-element" />
      <div className="absolute bottom-10 right-20 w-72 h-72 bg-primary/3 rounded-full blur-3xl floating-element" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Compact Header with image */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-block p-3 rounded-2xl glass-morphism mb-6">
            <span className="text-primary font-medium">👋 Nice to meet you</span>
          </div>
          
          {/* Larger Designer Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-6 border-primary/40 p-1 bg-gradient-to-br from-primary/30 to-cyan-400/30 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1475118258341-d2a655a5b11a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXNpZ25lciUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NjM0MTMzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Alex Chen - UI/UX Designer"
                  className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-green-500 rounded-full border-6 border-background flex items-center justify-center pulse-glow shadow-xl">
                <div className="w-5 h-5 bg-white rounded-full animate-pulse" />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full blur-sm floating-element opacity-70" />
              <div className="absolute top-12 -right-6 w-6 h-6 bg-cyan-400 rounded-full blur-sm floating-element opacity-70" style={{ animationDelay: '-1s' }} />
              <div className="absolute -bottom-6 left-12 w-7 h-7 bg-primary/80 rounded-full blur-sm floating-element opacity-70" style={{ animationDelay: '-2s' }} />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Senior UX Designer with 5+ years of experience at leading tech companies, 
            crafting digital experiences that reach millions of users worldwide
          </p>
        </div>

        {/* Compact Work Experience */}
        <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="glass-morphism rounded-3xl p-8 border border-primary/20">
            <div className="text-center mb-8">
              <div className="inline-block p-2 rounded-xl glass-morphism mb-4 border border-primary/20">
                <span className="text-primary font-medium text-sm">🚀 Career Journey</span>
              </div>
              <h3 className="text-3xl font-bold gradient-text mb-3">Work Experience</h3>
              <p className="text-muted-foreground">
                My journey through leading tech companies
              </p>
            </div>
            
            {/* Horizontal Timeline */}
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20 rounded-full" />
              
              {/* Experience Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {workExperience.map((experience, index) => (
                  <div
                    key={index}
                    className={`relative group ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {/* Timeline dot for desktop */}
                    <div className="hidden md:block absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-primary to-cyan-400 rounded-full border-4 border-background shadow-lg z-10 group-hover:scale-125 transition-all duration-300" />
                    
                    {/* Compact Card */}
                    <div className="relative glass-morphism rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-500 group-hover:transform group-hover:scale-105 bg-gradient-to-br from-primary/5 to-transparent mt-6 md:mt-8 min-h-[180px] overflow-hidden">
                      {/* Default Content */}
                      <div className={`p-5 transition-all duration-300 ${hoveredCard === index ? 'opacity-0' : 'opacity-100'}`}>
                        {/* Company logo and period */}
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-primary to-cyan-400 rounded-xl flex items-center justify-center text-xl shadow-lg group-hover:rotate-12 transition-transform duration-300">
                            {experience.logo}
                          </div>
                          <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
                            {experience.period}
                          </span>
                        </div>
                        
                        {/* Company info */}
                        <h4 className="font-bold text-foreground mb-1">{experience.company}</h4>
                        <h5 className="text-sm font-medium text-primary mb-2">{experience.role}</h5>
                        <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{experience.description}</p>
                        
                        {/* Achievement badge */}
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-green-400 rounded-full" />
                          <span className="text-xs text-foreground font-medium">{experience.achievement}</span>
                        </div>
                      </div>
                      
                      {/* Hover Content */}
                      <div className={`absolute inset-0 bg-gradient-to-br from-primary/30 to-cyan-400/30 backdrop-blur-sm p-5 flex flex-col justify-center items-center text-center transition-all duration-300 ${
                        hoveredCard === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
                      }`}>
                        <div className="text-3xl mb-3">{experience.logo}</div>
                        <h4 className="font-bold text-white mb-1 text-lg">{experience.company}</h4>
                        <p className="text-sm text-white/90 font-medium mb-3">{experience.role}</p>
                        <div className="text-center bg-white/20 rounded-xl p-3 backdrop-blur-sm border border-white/20">
                          <div className="text-xl font-bold text-white mb-1">{experience.achievement}</div>
                          <p className="text-xs text-white/80">{experience.description}</p>
                        </div>
                        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-xs text-white/60">
                          {experience.period}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Bottom stats */}
            <div className="text-center mt-8 pt-6 border-t border-border">
              <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
                <div>
                  <div className="text-2xl font-bold gradient-text">5+</div>
                  <div className="text-xs text-muted-foreground">Years</div>
                </div>
                <div>
                  <div className="text-2xl font-bold gradient-text">50M+</div>
                  <div className="text-xs text-muted-foreground">Users Impacted</div>
                </div>
                <div>
                  <div className="text-2xl font-bold gradient-text">4</div>
                  <div className="text-xs text-muted-foreground">Top Companies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;