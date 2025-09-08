import React, { useEffect, useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const HomePage = ({ navigateTo }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background with UI/UX Design Image */}
      <div className="absolute inset-0">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1612171742424-c31e0b4fe5db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRlc2lnbiUyMGludGVyZmFjZSUyMHdpcmVmcmFtZXxlbnwxfHx8fDE3NTczMDY2MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Abstract UI/UX Design Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/85" />
        <div className="absolute inset-0 gradient-aurora opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-background/60" />
      </div>
      
      {/* UI/UX Design Elements - Floating graphics */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-primary/10 rounded-3xl blur-2xl floating-element" />
      <div className="absolute bottom-32 right-32 w-56 h-56 bg-cyan-400/8 rounded-full blur-3xl floating-element" style={{ animationDelay: '-1s' }} />
      <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-primary/15 rounded-2xl blur-xl floating-element" style={{ animationDelay: '-2s' }} />
      
      {/* Modern design elements */}
      <div className="absolute top-1/4 left-1/4 w-24 h-24 border-2 border-primary/30 rounded-xl rotate-12 floating-element opacity-70" />
      <div className="absolute bottom-1/4 right-1/6 w-16 h-16 bg-gradient-to-br from-primary/20 to-cyan-400/20 rounded-full floating-element opacity-80" style={{ animationDelay: '-0.5s' }} />
      <div className="absolute top-1/2 left-1/6 w-20 h-20 border border-primary/25 rounded-full floating-element opacity-60" style={{ animationDelay: '-1.5s' }} />

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <div className={`grid lg:grid-cols-2 gap-16 items-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          
          {/* Left side - Text content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Status badge */}
            <div className="inline-flex items-center gap-3 p-4 rounded-3xl glass-morphism border border-primary/30">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              <span className="text-primary font-medium">Available for exciting projects</span>
            </div>
            
            {/* Main heading */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-foreground mb-2">Hello, I'm</span>
                <span className="block gradient-text">Yasir Khan</span>
              </h1>
              
              <h2 className="text-xl md:text-2xl lg:text-3xl text-primary font-medium">
                UI/UX Designer & Digital Craftsman
              </h2>
              
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Transforming complex ideas into intuitive, beautiful digital experiences that users love and businesses thrive on.
              </p>
            </div>
            
            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <button
                onClick={() => navigateTo('portfolio')}
                className="group relative bg-gradient-to-r from-primary to-cyan-400 text-white px-10 py-5 rounded-full font-medium overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-primary/40 transform"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 flex items-center gap-4">
                  <span className="text-2xl">✨</span>
                  View Portfolio
                  <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              
              <button 
                onClick={() => navigateTo('contact')}
                className="group glass-morphism border-2 border-primary/50 text-foreground px-10 py-5 rounded-full font-medium hover:border-primary hover:bg-primary/20 transition-all duration-500 hover:scale-110 backdrop-blur-xl"
              >
                <span className="flex items-center gap-4">
                  <span className="text-2xl">💬</span>
                  Let's Connect
                  <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Right side - Designer image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative elements around image */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-cyan-400/20 rounded-3xl blur-2xl" />
              <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-primary/40 rounded-full floating-element" />
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary/30 rounded-xl floating-element" style={{ animationDelay: '-1s' }} />
              
              {/* Main image */}
              <div className="relative overflow-hidden rounded-3xl border-2 border-primary/30 glass-morphism">
                <ImageWithFallback
                  src="src/Assets/Yasir.png"
                  alt="Yasir Khan - UI/UX Designer"
                  className="w-80 h-96 object-cover hover:scale-105 transition-transform duration-700"
/> 
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="flex flex-col items-center mt-24 space-y-4">
          <div className="text-sm text-muted-foreground">Discover More</div>
          <button 
            onClick={() => navigateTo('about')}
            className="animate-bounce pulse-glow p-4 rounded-full glass-morphism border border-primary/40 hover:border-primary/60 transition-all duration-300 group cursor-pointer"
          >
            <svg className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 14-7 7m0 0-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomePage;