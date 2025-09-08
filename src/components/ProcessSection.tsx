import React, { useEffect, useRef, useState } from 'react';

const ProcessSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const processSteps = [
    {
      id: 1,
      title: 'Research & Discovery',
      description: 'Understanding users, market, and business goals through comprehensive research',
      icon: '🔍',
      color: 'from-blue-500 to-primary',
      details: ['User interviews', 'Market analysis', 'Competitive research', 'Stakeholder workshops']
    },
    {
      id: 2,
      title: 'Strategy & Planning',
      description: 'Defining information architecture and user experience strategy',
      icon: '📋',
      color: 'from-primary to-cyan-400',
      details: ['User personas', 'User journeys', 'Information architecture', 'Feature prioritization']
    },
    {
      id: 3,
      title: 'Design & Prototype',
      description: 'Creating wireframes, visual designs, and interactive prototypes',
      icon: '🎨',
      color: 'from-cyan-400 to-blue-400',
      details: ['Wireframing', 'Visual design', 'Design systems', 'Interactive prototypes']
    },
    {
      id: 4,
      title: 'Test & Iterate',
      description: 'Validating designs through user testing and continuous improvement',
      icon: '🔄',
      color: 'from-blue-400 to-primary',
      details: ['Usability testing', 'A/B testing', 'Design iterations', 'Performance optimization']
    }
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

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % processSteps.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isVisible, processSteps.length]);

  return (
    <section className="py-32 relative overflow-hidden" ref={sectionRef}>
      {/* Animated background */}
      <div className="absolute inset-0 gradient-aurora opacity-20" />
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl floating-element" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className={`text-center mb-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-block p-3 rounded-2xl glass-morphism mb-6">
            <span className="text-primary font-medium">⚡ How I work</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">Design Process</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A systematic approach that ensures every project delivers exceptional results
          </p>
        </div>

        {/* Process visualization */}
        <div className="relative">
          {/* Connection lines */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20 transform -translate-y-1/2 hidden lg:block" />
          
          {/* Process steps */}
          <div className="grid lg:grid-cols-4 gap-8 lg:gap-4">
            {processSteps.map((step, index) => (
              <div
                key={step.id}
                className={`relative ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
                onMouseEnter={() => setActiveStep(index)}
              >
                {/* Step indicator */}
                <div className="flex justify-center mb-8">
                  <div className={`relative w-20 h-20 rounded-full flex items-center justify-center transition-all duration-500 ${
                    activeStep === index
                      ? 'bg-gradient-to-br ' + step.color + ' scale-110 shadow-xl'
                      : 'glass-morphism hover:scale-105'
                  }`}>
                    <span className="text-3xl">{step.icon}</span>
                    
                    {/* Pulse effect for active step */}
                    {activeStep === index && (
                      <div className="absolute inset-0 rounded-full animate-ping bg-primary/30" />
                    )}
                  </div>
                </div>

                {/* Step content */}
                <div className={`glass-morphism rounded-2xl p-6 transition-all duration-500 ${
                  activeStep === index ? 'modern-card-hover scale-105' : ''
                }`}>
                  <div className="text-center space-y-4">
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <span className="text-primary font-bold text-lg">0{step.id}</span>
                      <div className="h-px bg-primary/30 flex-1" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    
                    {/* Step details */}
                    <div className={`space-y-2 transition-all duration-500 ${
                      activeStep === index ? 'opacity-100 max-h-40' : 'opacity-60 max-h-20 overflow-hidden'
                    }`}>
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span className="text-muted-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Arrow connector */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:flex justify-center mt-8">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Process stats */}
        <div className={`mt-20 glass-morphism rounded-3xl p-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">2-4 weeks</div>
              <div className="text-muted-foreground">Average project timeline</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">95%</div>
              <div className="text-muted-foreground">Client satisfaction rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">3-5</div>
              <div className="text-muted-foreground">Design iterations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;