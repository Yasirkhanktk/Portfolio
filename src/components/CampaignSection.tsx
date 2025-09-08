import React, { useEffect, useRef, useState } from 'react';

const CampaignSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  return (
    <section className="py-20 relative overflow-hidden" ref={sectionRef}>
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
      <div className="absolute top-20 left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl floating-element" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl floating-element" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className={`glass-morphism rounded-3xl p-8 overflow-hidden ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div 
            className="relative"
            onMouseMove={handleMouseMove}
          >
            {/* 3D Text Effect */}
            <div className="text-center py-16 relative">
              <div className="relative inline-block">
                {/* Main 3D Text */}
                <h2 
                  className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary via-cyan-400 to-white transform-gpu"
                  style={{
                    transform: `perspective(1000px) rotateX(${mousePosition.y * 10 - 5}deg) rotateY(${mousePosition.x * 10 - 5}deg)`,
                    textShadow: `
                      ${mousePosition.x * 10}px ${mousePosition.y * 10}px 20px rgba(0, 179, 255, 0.3),
                      ${mousePosition.x * -5}px ${mousePosition.y * -5}px 10px rgba(0, 179, 255, 0.2),
                      0 0 40px rgba(0, 179, 255, 0.4)
                    `,
                    transition: 'all 0.1s ease-out'
                  }}
                >
                  DZYNSTUDIO
                </h2>
                
                {/* 3D Shadow/Depth */}
                <div 
                  className="absolute inset-0 text-6xl md:text-8xl font-bold text-primary/20 -z-10"
                  style={{
                    transform: `perspective(1000px) rotateX(${mousePosition.y * 10 - 5}deg) rotateY(${mousePosition.x * 10 - 5}deg) translateZ(-20px) translateX(${mousePosition.x * 5}px) translateY(${mousePosition.y * 5}px)`,
                    transition: 'all 0.1s ease-out'
                  }}
                >
                  DZYNSTUDIO
                </div>
              </div>
              
              {/* Subtitle with 3D effect */}
              <p 
                className="text-2xl md:text-3xl text-muted-foreground mt-8 font-medium"
                style={{
                  transform: `perspective(800px) rotateX(${mousePosition.y * 3}deg) rotateY(${mousePosition.x * 3}deg)`,
                  transition: 'all 0.1s ease-out'
                }}
              >
                Where Ideas Take Shape
              </p>
            </div>

            {/* Floating 3D Elements */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="absolute w-4 h-4 bg-gradient-to-br from-primary to-cyan-400 rounded-full opacity-60"
                  style={{
                    left: `${20 + index * 15}%`,
                    top: `${30 + (index % 3) * 20}%`,
                    transform: `
                      perspective(1000px) 
                      rotateX(${mousePosition.y * 20 + index * 30}deg) 
                      rotateY(${mousePosition.x * 20 + index * 45}deg)
                      translateZ(${index * 10}px)
                    `,
                    animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
                    animationDelay: `${index * 0.2}s`,
                    transition: 'transform 0.1s ease-out'
                  }}
                />
              ))}
            </div>

            {/* Interactive Shapes */}
            <div className="grid grid-cols-3 gap-8 mt-16">
              {[
                { icon: '🎨', title: 'Design', rotation: 'rotateY(45deg)' },
                { icon: '💡', title: 'Innovation', rotation: 'rotateX(45deg)' },
                { icon: '🚀', title: 'Launch', rotation: 'rotateZ(45deg)' }
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-center group cursor-pointer"
                  style={{
                    transform: `perspective(600px) ${item.rotation}`,
                    transition: 'all 0.3s ease-out'
                  }}
                >
                  <div 
                    className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/40 rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"
                    style={{
                      boxShadow: `
                        0 10px 30px rgba(0, 179, 255, 0.2),
                        inset 0 1px 0 rgba(255, 255, 255, 0.1)
                      `
                    }}
                  >
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <button 
                className="group bg-gradient-to-r from-primary to-cyan-400 text-white px-12 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 relative overflow-hidden"
                style={{
                  boxShadow: `
                    0 10px 30px rgba(0, 179, 255, 0.3),
                    0 0 0 1px rgba(255, 255, 255, 0.1)
                  `
                }}
              >
                <span className="relative z-10">Experience the Magic</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampaignSection;