import React, { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    // Loading animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Simple routing function
  const navigateTo = (page, projectData = null) => {
    setCurrentPage(page);
    if (projectData) {
      setSelectedProject(projectData);
    }
  };

  // Render current page
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage navigateTo={navigateTo} />;
      case 'about':
        return <AboutPage navigateTo={navigateTo} />;
      case 'portfolio':
        return <PortfolioPage navigateTo={navigateTo} />;
      case 'contact':
        return <ContactPage navigateTo={navigateTo} />;
      case 'project-detail':
        return <ProjectDetailPage project={selectedProject} navigateTo={navigateTo} />;
      default:
        return <HomePage navigateTo={navigateTo} />;
    }
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin mx-auto"></div>
          <div className="text-2xl font-bold gradient-text animate-pulse">dzynstudio</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <Navigation currentPage={currentPage} navigateTo={navigateTo} />

      {/* Main content */}
      <main className="relative">
        {renderCurrentPage()}
      </main>

      {/* Footer - only show on main pages, not project detail */}
      {currentPage !== 'project-detail' && (
        <footer className="relative py-20 overflow-hidden border-t border-border/50">
          {/* Animated background */}
          <div className="absolute inset-0 gradient-aurora opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Call to action section */}
            <div className="text-center mb-16 pb-16 border-b border-border/30">
              <h3 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Ready to work together?</h3>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Let's create something amazing that makes a difference
              </p>
              <button 
                onClick={() => navigateTo('contact')}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-cyan-400 text-white px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 font-medium"
              >
                <span>Get In Touch</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>

            {/* Main footer content */}
            <div className="grid md:grid-cols-4 gap-12 mb-16">
              {/* Brand */}
              <div className="md:col-span-2 space-y-6">
                <div className="text-3xl font-bold gradient-text">dzynstudio</div>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                  Creating digital experiences that inspire and delight users worldwide. 
                  Transforming ideas into beautiful, functional designs.
                </p>
                <div className="flex gap-4">
                  {[
                    { name: "LinkedIn", icon: "💼", color: "from-blue-500 to-blue-600" },
                    { name: "Dribbble", icon: "🏀", color: "from-pink-500 to-pink-600" },
                    { name: "Behance", icon: "🎨", color: "from-purple-500 to-purple-600" },
                    { name: "Twitter", icon: "🐦", color: "from-cyan-400 to-cyan-500" }
                  ].map((social) => (
                    <a
                      key={social.name}
                      href="#"
                      className={`w-14 h-14 bg-gradient-to-r ${social.color} rounded-xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300 hover:shadow-lg group`}
                      title={social.name}
                    >
                      <span className="text-xl group-hover:scale-110 transition-transform">
                        {social.icon}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="space-y-6">
                <h4 className="text-xl font-bold text-foreground">Navigation</h4>
                <div className="space-y-3">
                  {[
                    { name: "Home", page: "home" },
                    { name: "About", page: "about" },
                    { name: "Portfolio", page: "portfolio" },
                    { name: "Contact", page: "contact" },
                  ].map((link) => (
                    <button
                      key={link.name}
                      onClick={() => navigateTo(link.page)}
                      className="block text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2 text-left"
                    >
                      {link.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <h4 className="text-xl font-bold text-foreground">Let's Connect</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-primary">📧</span>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Email</div>
                      <div className="text-foreground">hello@dzynstudio.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-primary">📍</span>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Location</div>
                      <div className="text-foreground">San Francisco, CA</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Status</div>
                      <div className="text-foreground">Available for projects</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom section */}
            <div className="pt-8 border-t border-border/30">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-center md:text-left">
                  <p className="text-muted-foreground">
                    © 2024 dzynstudio. All rights reserved.
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Crafted with passion using React & Tailwind CSS
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>Made with</span>
                  <span className="text-red-500 animate-pulse">❤️</span>
                  <span>in San Francisco</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating background elements */}
          <div className="absolute bottom-20 left-20 w-24 h-24 border border-primary/20 rounded-full floating-element opacity-20" />
          <div className="absolute top-20 right-20 w-32 h-32 bg-primary/5 rounded-full floating-element opacity-30" style={{ animationDelay: '-2s' }} />
          <div className="absolute bottom-40 right-40 w-16 h-16 bg-cyan-400/10 rounded-full floating-element opacity-40" style={{ animationDelay: '-4s' }} />
        </footer>
      )}
    </div>
  );
}