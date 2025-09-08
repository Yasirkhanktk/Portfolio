import React, { useState, useEffect } from 'react';

const Navigation = ({ currentPage, navigateTo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '👨‍💻' },
    { id: 'portfolio', label: 'Portfolio', icon: '💼' },
    { id: 'contact', label: 'Contact', icon: '📧' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (pageId) => {
    navigateTo(pageId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-background/95 backdrop-blur-xl border-b border-primary/20 shadow-lg shadow-primary/5' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Enhanced Logo */}
            <div 
              className="font-bold text-2xl gradient-text hover:scale-105 transition-transform duration-300 cursor-pointer" 
              onClick={() => handleNavigation('home')}
            >
              dzynstudio
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`relative px-4 py-2 rounded-xl transition-all duration-300 hover:bg-primary/10 group ${
                    currentPage === item.id ? 'text-primary bg-primary/10' : 'text-foreground hover:text-primary'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-sm group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </span>
                  {currentPage === item.id && (
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full animate-pulse" />
                  )}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-foreground hover:text-primary transition-colors p-2 rounded-xl hover:bg-primary/10"
              >
                <svg className={`w-6 h-6 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Mobile Menu */}
      <div className={`fixed top-20 left-0 right-0 z-40 md:hidden transition-all duration-500 ${
        isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <div className="mx-4 glass-morphism rounded-2xl p-4 border border-primary/20 shadow-xl">
          <div className="space-y-2">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center gap-3 ${
                  currentPage === item.id 
                    ? 'text-primary bg-primary/10 border border-primary/20' 
                    : 'text-foreground hover:text-primary hover:bg-primary/5'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
                {currentPage === item.id && (
                  <div className="ml-auto w-2 h-2 bg-primary rounded-full animate-pulse" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;