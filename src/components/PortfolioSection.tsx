import React, { useEffect, useRef, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const PortfolioSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const sectionRef = useRef<HTMLDivElement>(null);

  const categories = ['All', 'Mobile', 'Web', 'Branding'];

  const projects = [
    {
      title: 'FinTech Mobile App',
      description: 'Revolutionary banking app with AI-powered insights and seamless user experience',
      image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU2MzAyODAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Mobile', 'FinTech', 'UI/UX'],
      category: 'Mobile',
      featured: true
    },
    {
      title: 'Analytics Dashboard Pro',
      description: 'Real-time data visualization platform with advanced filtering and reporting capabilities',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzU2Mjg3MDE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Web', 'Dashboard', 'Analytics'],
      category: 'Web',
      featured: false
    },
    {
      title: 'E-commerce Platform',
      description: 'Modern shopping experience with personalized recommendations and seamless checkout',
      image: 'https://images.unsplash.com/photo-1694599048261-a1de00f0117e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc1NjI2Nzc2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Web', 'E-commerce', 'Conversion'],
      category: 'Web',
      featured: true
    },
    {
      title: 'GreenTech Brand Identity',
      description: 'Complete brand identity system for sustainable technology company',
      image: 'https://images.unsplash.com/photo-1633533446213-a438ff5f0629?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwZGVzaWdufGVufDF8fHx8MTc1NjI2MjMzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Branding', 'Identity', 'Sustainability'],
      category: 'Branding',
      featured: false
    },
    {
      title: 'SaaS Management Platform',
      description: 'Comprehensive business management solution with intuitive workflow design',
      image: 'https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWFzJTIwcGxhdGZvcm0lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU2MzY3MzkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Web', 'SaaS', 'Enterprise'],
      category: 'Web',
      featured: false
    },
    {
      title: 'Wellness Mobile App',
      description: 'Mindfulness and wellness tracking app with beautiful, calming interface design',
      image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGVsaXZlcnklMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU2MjkyNDQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Mobile', 'Wellness', 'Health'],
      category: 'Mobile',
      featured: false
    },
    {
      title: 'TravelEase Booking Platform',
      description: 'Comprehensive travel booking platform with seamless user experience and smart recommendations',
      image: 'https://images.unsplash.com/photo-1673515335048-ace62cf73a26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBib29raW5nJTIwd2Vic2l0ZXxlbnwxfHx8fDE3NTYzNjc0NDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Web', 'Travel', 'Booking'],
      category: 'Web',
      featured: false
    },
    {
      title: 'Tech Startup Rebrand',
      description: 'Complete brand redesign for AI startup including logo, guidelines, and digital assets',
      image: 'https://images.unsplash.com/photo-1633533446213-a438ff5f0629?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGlkZW50aXR5JTIwZGVzaWdufGVufDF8fHx8MTc1NjI2MjMzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Branding', 'Tech', 'Startup'],
      category: 'Branding',
      featured: false
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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
    <section id="portfolio" className="py-20 relative overflow-hidden" ref={sectionRef}>
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background" />
      <div className="absolute top-40 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl floating-element" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl floating-element" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-block p-3 rounded-2xl glass-morphism mb-6">
            <span className="text-primary font-medium">🚀 My work</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of my most impactful design projects that showcase innovation and user-centered thinking
          </p>
        </div>

        {/* Category filters */}
        <div className={`flex justify-center mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="glass-morphism rounded-2xl p-2 flex gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'text-muted-foreground hover:text-foreground hover:bg-primary/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid - Dynamic layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {filteredProjects.map((project, index) => {
            const isFeatured = project.featured;
            const gridClass = isFeatured 
              ? 'lg:col-span-8 lg:row-span-2' 
              : 'lg:col-span-4';
            const heightClass = isFeatured ? 'h-96 lg:h-full' : 'h-80';

            return (
              <div
                key={index}
                className={`group ${gridClass} ${heightClass} ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                } modern-card-hover`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative h-full glass-morphism rounded-3xl overflow-hidden">
                  {/* Project image */}
                  <div className="relative h-full overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Featured badge */}
                    {isFeatured && (
                      <div className="absolute top-6 left-6 glass-morphism rounded-xl px-4 py-2">
                        <span className="text-primary font-medium text-sm">✨ Featured</span>
                      </div>
                    )}
                    
                    {/* Content overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-3 py-1 bg-primary/20 backdrop-blur-sm text-primary text-sm rounded-full border border-primary/30"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <h3 className={`font-bold text-white group-hover:text-primary transition-colors ${
                          isFeatured ? 'text-2xl lg:text-3xl' : 'text-xl'
                        }`}>
                          {project.title}
                        </h3>
                        
                        <p className={`text-gray-300 leading-relaxed ${
                          isFeatured ? 'text-lg' : 'text-base'
                        }`}>
                          {project.description}
                        </p>

                        {/* View project button */}
                        <button className="group/btn flex items-center gap-2 text-primary font-medium hover:text-white transition-colors pt-2">
                          <span>View Case Study</span>
                          <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View all projects CTA */}
        <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="glass-morphism rounded-3xl p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Want to see more work?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Explore my complete portfolio with detailed case studies and design processes
            </p>
            <button className="group bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-medium text-lg hover:bg-primary/90 transition-all duration-300 modern-card-hover">
              <span className="flex items-center gap-3">
                View Full Portfolio
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;