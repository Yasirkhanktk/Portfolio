import React, { useEffect, useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const PortfolioPage = ({ navigateTo }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filters = [
    { id: 'all', label: 'All Projects', count: 12 },
    { id: 'web', label: 'Web Design', count: 5 },
    { id: 'mobile', label: 'Mobile Apps', count: 4 },
    { id: 'dashboard', label: 'Dashboards', count: 3 }
  ];

  const projects = [
    {
      id: 1,
      title: 'FinTech Mobile Banking App',
      category: 'mobile',
      description: 'Complete redesign of a mobile banking experience with focus on security and user-friendly interface.',
      image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU3MjgyMTAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['UI/UX', 'Mobile', 'FinTech'],
      year: '2024',
      client: 'SecureBank',
      featured: true
    },
    {
      id: 2,
      title: 'Analytics Dashboard Platform',
      category: 'dashboard',
      description: 'Data visualization dashboard for enterprise clients with real-time analytics and reporting features.',
      image: 'https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkYXNoYm9hcmQlMjBkZXNpZ258ZW58MXx8fHwxNzU3MjE4NDQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Dashboard', 'Analytics', 'Enterprise'],
      year: '2024',
      client: 'DataCorp',
      featured: true
    },
    {
      id: 3,
      title: 'E-commerce Fashion Platform',
      category: 'web',
      description: 'Modern e-commerce website with advanced filtering, AR try-on features, and seamless checkout experience.',
      image: 'https://images.unsplash.com/photo-1694599048261-a1de00f0117e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc1NzIyOTIxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['E-commerce', 'Web', 'Fashion'],
      year: '2023',
      client: 'StyleCo',
      featured: true
    },
    {
      id: 4,
      title: 'Fitness Tracking Mobile App',
      category: 'mobile',
      description: 'Health and fitness application with workout tracking, nutrition planning, and social features.',
      image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU3MjgyMTAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Mobile', 'Health', 'Social'],
      year: '2023',
      client: 'FitLife',
      featured: false
    },
    {
      id: 5,
      title: 'SaaS Project Management Tool',
      category: 'web',
      description: 'Comprehensive project management platform with team collaboration and task tracking capabilities.',
      image: 'https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkYXNoYm9hcmQlMjBkZXNpZ258ZW58MXx8fHwxNzU3MjE4NDQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['SaaS', 'Web', 'Productivity'],
      year: '2023',
      client: 'TaskMaster',
      featured: false
    },
    {
      id: 6,
      title: 'Real Estate Platform',
      category: 'web',
      description: 'Property listing and management platform with virtual tours and advanced search functionality.',
      image: 'https://images.unsplash.com/photo-1694599048261-a1de00f0117e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc1NzIyOTIxM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Real Estate', 'Web', 'VR'],
      year: '2022',
      client: 'PropertyPro',
      featured: false
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleProjectClick = (project) => {
    navigateTo('project-detail', project);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 gradient-aurora opacity-20" />
      <div className="absolute top-40 left-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl floating-element" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-cyan-400/10 rounded-3xl blur-2xl floating-element" style={{ animationDelay: '-1s' }} />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">My Portfolio</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of projects that showcase my passion for creating exceptional digital experiences
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-primary text-white shadow-lg shadow-primary/25'
                  : 'glass-morphism border border-primary/20 text-muted-foreground hover:border-primary/40 hover:text-foreground'
              }`}
            >
              {filter.label}
              <span className="ml-2 text-sm opacity-70">({filter.count})</span>
            </button>
          ))}
        </div>

        {/* Featured Projects */}
        {activeFilter === 'all' && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-8">Featured Projects</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {projects.filter(p => p.featured).map((project, index) => (
                <div
                  key={project.id}
                  onClick={() => handleProjectClick(project)}
                  className="group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="glass-morphism rounded-3xl overflow-hidden border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105 modern-card-hover">
                    {/* Project Image */}
                    <div className="relative overflow-hidden">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Tags overlay */}
                      <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                        {project.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-primary/20 backdrop-blur-sm text-primary text-xs rounded-full border border-primary/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Year badge */}
                      <div className="absolute top-4 right-4 px-3 py-1 bg-background/80 backdrop-blur-sm text-foreground text-xs rounded-full">
                        {project.year}
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-primary font-medium">
                          {project.client}
                        </span>
                        <div className="flex items-center gap-2 text-primary group-hover:translate-x-2 transition-transform">
                          <span className="text-sm">View Project</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Projects Grid */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-8">
            {activeFilter === 'all' ? 'All Projects' : filters.find(f => f.id === activeFilter)?.label}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                onClick={() => handleProjectClick(project)}
                className="group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="glass-morphism rounded-3xl overflow-hidden border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-105 modern-card-hover">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Category badge */}
                    <div className="absolute top-3 left-3 px-3 py-1 bg-primary/20 backdrop-blur-sm text-primary text-xs rounded-full border border-primary/30 capitalize">
                      {project.category}
                    </div>

                    {project.featured && (
                      <div className="absolute top-3 right-3 px-2 py-1 bg-gradient-to-r from-primary to-cyan-400 text-white text-xs rounded-full">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="p-5">
                    <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {project.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-muted/30 text-muted-foreground text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-primary font-medium">
                        {project.client} • {project.year}
                      </span>
                      <div className="flex items-center gap-1 text-primary group-hover:translate-x-1 transition-transform">
                        <span className="text-xs">View</span>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="glass-morphism p-12 rounded-3xl border border-primary/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold gradient-text mb-4">Have a Project in Mind?</h3>
            <p className="text-muted-foreground mb-8">
              Let's discuss how we can bring your vision to life with exceptional design and user experience.
            </p>
            <button
              onClick={() => navigateTo('contact')}
              className="bg-gradient-to-r from-primary to-cyan-400 text-white px-10 py-4 rounded-full font-medium hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
            >
              Start a Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;