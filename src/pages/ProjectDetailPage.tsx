import React, { useEffect, useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const ProjectDetailPage = ({ project, navigateTo }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Project not found</h2>
          <button
            onClick={() => navigateTo('portfolio')}
            className="bg-primary text-white px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors"
          >
            Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  // Extended project data for detail view
  const projectDetails = {
    ...project,
    overview: "This project involved a complete redesign of the user experience, focusing on modern design principles, accessibility, and user-centered design. The goal was to create an intuitive interface that would improve user engagement and conversion rates.",
    challenge: "The main challenge was to balance business requirements with user needs while maintaining technical feasibility. We needed to redesign a complex system without disrupting existing user workflows.",
    solution: "We conducted extensive user research, created detailed user personas, and implemented a design system that could scale across multiple platforms. The solution included prototyping, usability testing, and iterative design improvements.",
    results: [
      { metric: "User Engagement", value: "+45%", description: "Increase in daily active users" },
      { metric: "Conversion Rate", value: "+32%", description: "Improvement in goal completion" },
      { metric: "Task Success Rate", value: "+28%", description: "Users completing tasks successfully" },
      { metric: "User Satisfaction", value: "4.8/5", description: "Average user rating post-launch" }
    ],
    technologies: ["Figma", "Principle", "After Effects", "Zeplin", "Maze", "Hotjar"],
    timeline: "3 months",
    role: "Lead UI/UX Designer",
    team: ["Product Manager", "2 Developers", "1 QA Engineer"],
    images: [
      project.image,
      project.image,
      project.image
    ]
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 gradient-aurora opacity-20" />
      <div className="absolute top-40 left-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl floating-element" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-cyan-400/10 rounded-3xl blur-2xl floating-element" style={{ animationDelay: '-1s' }} />

      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        {/* Back Button */}
        <div className={`mb-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <button
            onClick={() => navigateTo('portfolio')}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Portfolio
          </button>
        </div>

        {/* Hero Section */}
        <div className={`mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            {projectDetails.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm border border-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            {projectDetails.title}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
            {projectDetails.description}
          </p>

          {/* Project Meta */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="glass-morphism p-6 rounded-2xl border border-primary/20">
              <h3 className="font-medium text-muted-foreground mb-2">Client</h3>
              <p className="text-foreground font-bold">{projectDetails.client}</p>
            </div>
            <div className="glass-morphism p-6 rounded-2xl border border-primary/20">
              <h3 className="font-medium text-muted-foreground mb-2">Year</h3>
              <p className="text-foreground font-bold">{projectDetails.year}</p>
            </div>
            <div className="glass-morphism p-6 rounded-2xl border border-primary/20">
              <h3 className="font-medium text-muted-foreground mb-2">Timeline</h3>
              <p className="text-foreground font-bold">{projectDetails.timeline}</p>
            </div>
            <div className="glass-morphism p-6 rounded-2xl border border-primary/20">
              <h3 className="font-medium text-muted-foreground mb-2">Role</h3>
              <p className="text-foreground font-bold">{projectDetails.role}</p>
            </div>
          </div>
        </div>

        {/* Main Image */}
        <div className="mb-16">
          <div className="relative overflow-hidden rounded-3xl border border-primary/20">
            <ImageWithFallback
              src={projectDetails.image}
              alt={projectDetails.title}
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
          </div>
        </div>

        {/* Project Content */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {projectDetails.overview}
              </p>
            </div>

            {/* Challenge */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">The Challenge</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {projectDetails.challenge}
              </p>
            </div>

            {/* Solution */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">The Solution</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {projectDetails.solution}
              </p>
            </div>

            {/* Additional Images */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Design Process</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {projectDetails.images.slice(1).map((image, index) => (
                  <div key={index} className="relative overflow-hidden rounded-2xl border border-primary/20">
                    <ImageWithFallback
                      src={image}
                      alt={`${projectDetails.title} - Design ${index + 1}`}
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Technologies */}
            <div className="glass-morphism p-6 rounded-3xl border border-primary/20">
              <h3 className="font-bold text-foreground mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {projectDetails.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-muted/30 text-muted-foreground text-sm rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Team */}
            <div className="glass-morphism p-6 rounded-3xl border border-primary/20">
              <h3 className="font-bold text-foreground mb-4">Team</h3>
              <ul className="space-y-2">
                {projectDetails.team.map((member, index) => (
                  <li key={index} className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    {member}
                  </li>
                ))}
              </ul>
            </div>

            {/* Project Links */}
            <div className="glass-morphism p-6 rounded-3xl border border-primary/20">
              <h3 className="font-bold text-foreground mb-4">Project Links</h3>
              <div className="space-y-3">
                <a
                  href="#"
                  className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Live Project
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                  Design Files
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Project Results</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectDetails.results.map((result, index) => (
              <div
                key={index}
                className="glass-morphism p-6 rounded-3xl border border-primary/20 text-center hover:border-primary/40 transition-all duration-300 hover:scale-105"
              >
                <div className="text-3xl font-bold gradient-text mb-2">{result.value}</div>
                <div className="font-medium text-foreground mb-1">{result.metric}</div>
                <div className="text-sm text-muted-foreground">{result.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-12 border-t border-border">
          <button
            onClick={() => navigateTo('portfolio')}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Portfolio
          </button>

          <button
            onClick={() => navigateTo('contact')}
            className="bg-gradient-to-r from-primary to-cyan-400 text-white px-8 py-4 rounded-full font-medium hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
          >
            Start a Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;