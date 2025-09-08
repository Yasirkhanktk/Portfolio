import React, { useEffect, useRef, useState } from 'react';

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      title: 'UI Design',
      shortTitle: 'UI',
      description: 'Crafting pixel-perfect interfaces that blend aesthetics with functionality',
      features: ['Visual Design', 'Component Libraries', 'Responsive Design', 'Design Systems'],
      price: 'From $2,500',
      gradient: 'from-blue-500 to-primary',
      icon: '🎨'
    },
    {
      title: 'UX Research',
      shortTitle: 'UX',
      description: 'Deep user insights that drive meaningful design decisions',
      features: ['User Interviews', 'Usability Testing', 'Journey Mapping', 'Personas'],
      price: 'From $1,800',
      gradient: 'from-primary to-cyan-400',
      icon: '🔍'
    },
    {
      title: 'Prototyping',
      shortTitle: 'Proto',
      description: 'Interactive experiences that bring ideas to life',
      features: ['Interactive Mockups', 'Animation', 'User Testing', 'Iteration'],
      price: 'From $1,200',
      gradient: 'from-cyan-400 to-blue-400',
      icon: '⚡'
    },
    {
      title: 'Brand Identity',
      shortTitle: 'Brand',
      description: 'Cohesive brand experiences across all touchpoints',
      features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Design Systems'],
      price: 'From $3,500',
      gradient: 'from-blue-400 to-purple-500',
      icon: '✨'
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

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 relative overflow-hidden" ref={sectionRef}>
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card/20 to-background" />
      <div className="absolute top-20 right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl floating-element" />
      <div className="absolute bottom-40 left-20 w-64 h-64 bg-primary/10 rounded-full blur-2xl floating-element" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-block p-3 rounded-2xl glass-morphism mb-6">
            <span className="text-primary font-medium">💼 What I offer</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive design solutions tailored to your specific needs and goals
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.15}s` }}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className={`glass-morphism rounded-3xl p-8 h-full transition-all duration-500 cursor-pointer ${
                hoveredService === index ? 'modern-card-hover scale-[1.02]' : ''
              }`}>
                {/* Service header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl bg-gradient-to-br ${service.gradient} transition-transform duration-300 ${
                      hoveredService === index ? 'scale-110 rotate-6' : ''
                    }`}>
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
                      <div className="text-primary font-semibold">{service.price}</div>
                    </div>
                  </div>
                </div>

                {/* Service description */}
                <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                  {service.description}
                </p>

                {/* Service features */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  onClick={scrollToContact}
                  className={`w-full bg-gradient-to-r ${service.gradient} text-white py-4 rounded-2xl font-medium transition-all duration-300 hover:shadow-lg hover:scale-105`}
                >
                  Get Started
                </button>

                {/* Hover effect overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 rounded-3xl transition-opacity duration-300 -z-10 ${
                  hoveredService === index ? 'opacity-5' : ''
                }`} />
              </div>
            </div>
          ))}
        </div>

        {/* Service packages */}
        <div className={`glass-morphism rounded-3xl p-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-foreground mb-4">Complete Design Package</h3>
            <p className="text-muted-foreground text-lg">Get everything you need for a successful product launch</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                <span className="text-2xl">🚀</span>
              </div>
              <h4 className="text-xl font-semibold text-foreground">Fast Delivery</h4>
              <p className="text-muted-foreground">Quick turnaround without compromising quality</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="text-xl font-semibold text-foreground">Result Focused</h4>
              <p className="text-muted-foreground">Designs that drive real business outcomes</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                <span className="text-2xl">💎</span>
              </div>
              <h4 className="text-xl font-semibold text-foreground">Premium Quality</h4>
              <p className="text-muted-foreground">Attention to detail in every pixel</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={scrollToContact}
              className="group bg-primary text-primary-foreground px-10 py-5 rounded-2xl font-medium text-lg hover:bg-primary/90 transition-all duration-300 modern-card-hover"
            >
              <span className="flex items-center gap-3">
                Start Your Project
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;