import React, { useEffect, useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const AboutPage = ({ navigateTo }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);



  const experiences = [
    {
      company: 'Meta',
      role: 'Senior Product Designer',
      period: '2022 - Present',
      description: 'Leading design initiatives for Facebook\'s core products, impacting millions of users worldwide.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      company: 'Google',
      role: 'UX Designer',
      period: '2020 - 2022',
      description: 'Designed user experiences for Google Workspace, focusing on productivity and collaboration tools.',
      color: 'from-green-500 to-green-600'
    },
    {
      company: 'Airbnb',
      role: 'Product Designer',
      period: '2018 - 2020',
      description: 'Created seamless booking experiences and host management tools for the global platform.',
      color: 'from-pink-500 to-pink-600'
    },
    {
      company: 'Spotify',
      role: 'UI Designer',
      period: '2017 - 2018',
      description: 'Designed music discovery interfaces and personalization features for mobile and desktop.',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const services = [
    {
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user interfaces that prioritize user experience and business goals.',
      icon: '🎨',
      features: ['User Interface Design', 'User Experience Strategy', 'Wireframing & Prototyping', 'Usability Testing']
    },
    {
      title: 'Design Systems',
      description: 'Building scalable design systems that ensure consistency across all digital touchpoints.',
      icon: '📐',
      features: ['Component Libraries', 'Design Tokens', 'Style Guides', 'Design Documentation']
    },
    {
      title: 'Product Strategy',
      description: 'Aligning design decisions with business objectives through strategic thinking and user research.',
      icon: '🎯',
      features: ['User Research', 'Product Strategy', 'Design Leadership', 'Stakeholder Alignment']
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 gradient-aurora opacity-20" />
      <div className="absolute top-40 left-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl floating-element" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-cyan-400/10 rounded-3xl blur-2xl floating-element" style={{ animationDelay: '-1s' }} />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        {/* Hero Section */}
        <div className={`text-center mb-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">About Me</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating digital experiences that make a difference
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-16 mb-20">
          {/* Large Image */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-6 bg-gradient-to-r from-primary/20 to-cyan-400/20 rounded-3xl blur-3xl" />
              <div className="absolute -top-8 -right-8 w-32 h-32 border-2 border-primary/30 rounded-full floating-element" />
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-primary/20 rounded-2xl floating-element" style={{ animationDelay: '-1s' }} />
              
              {/* Main image */}
              <div className="relative overflow-hidden rounded-3xl border-2 border-primary/30 glass-morphism">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1475118258341-d2a655a5b11a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXNpZ25lciUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NzMwNzkwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Alex Chen - UI/UX Designer"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* About Text */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Hi, I'm Alex Chen</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  With over 7 years of experience in digital design, I've had the privilege of working with some of the world's most innovative companies, creating products that millions of people use every day.
                </p>
                <p>
                  My approach combines strategic thinking with meticulous attention to detail, ensuring that every design decision is backed by user research and business objectives. I believe that great design is not just about how something looks, but how it works and how it makes people feel.
                </p>
                <p>
                  I'm passionate about mentoring emerging designers and contributing to the design community through speaking engagements and open-source design resources.
                </p>
              </div>
            </div>


          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center gradient-text mb-12">Professional Journey</h2>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {experiences.map((exp, index) => (
              <div key={exp.company} className="group">
                <div className="glass-morphism p-6 rounded-3xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${exp.color} rounded-2xl flex items-center justify-center text-white font-bold text-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {exp.company[0]}
                  </div>
                  <h3 className="font-bold text-foreground mb-1">{exp.company}</h3>
                  <h4 className="text-primary font-medium mb-2">{exp.role}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center gradient-text mb-12">What I Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={service.title} className="glass-morphism p-8 rounded-3xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 group">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="glass-morphism p-8 rounded-3xl border border-primary/20">
            <div className="text-4xl mb-6">🎯</div>
            <h3 className="text-2xl font-bold gradient-text mb-4">My Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To democratize good design by creating digital experiences that are not only beautiful and functional, but also accessible and inclusive for everyone, regardless of their abilities or background.
            </p>
          </div>
          
          <div className="glass-morphism p-8 rounded-3xl border border-primary/20">
            <div className="text-4xl mb-6">🚀</div>
            <h3 className="text-2xl font-bold gradient-text mb-4">My Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To bridge the gap between user needs and business goals through thoughtful design, rigorous testing, and continuous iteration, while mentoring the next generation of designers.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="glass-morphism p-12 rounded-3xl border border-primary/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold gradient-text mb-4">Let's Work Together</h3>
            <p className="text-muted-foreground mb-8">
              Ready to bring your next project to life? I'd love to hear about your ideas and explore how we can create something amazing together.
            </p>
            <button
              onClick={() => navigateTo('contact')}
              className="bg-gradient-to-r from-primary to-cyan-400 text-white px-10 py-4 rounded-full font-medium hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;