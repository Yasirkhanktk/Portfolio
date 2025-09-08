import React, { useEffect, useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const ContactPage = ({ navigateTo }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add actual form submission logic here
    alert('Thank you for your message! I\'ll get back to you soon.');
  };

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'hello@dzynstudio.com',
      href: 'mailto:hello@dzynstudio.com'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'San Francisco, CA',
      href: null
    },
    {
      icon: '🌐',
      label: 'Timezone',
      value: 'PST (UTC-8)',
      href: null
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: '💼', href: '#', color: 'from-blue-500 to-blue-600' },
    { name: 'Dribbble', icon: '🏀', href: '#', color: 'from-pink-500 to-pink-600' },
    { name: 'Behance', icon: '🎨', href: '#', color: 'from-purple-500 to-purple-600' },
    { name: 'Twitter', icon: '🐦', href: '#', color: 'from-cyan-400 to-cyan-500' }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 gradient-aurora opacity-20" />
      <div className="absolute top-40 left-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl floating-element" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-cyan-400/10 rounded-3xl blur-2xl floating-element" style={{ animationDelay: '-1s' }} />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">Let's Work Together</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your project to life? I'd love to hear about your ideas and explore how we can create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-16">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="glass-morphism p-8 md:p-10 rounded-3xl border border-primary/20">
              <h2 className="text-2xl font-bold text-foreground mb-8">Send me a message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-foreground placeholder-muted-foreground"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-foreground placeholder-muted-foreground"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Company and Project Type */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-foreground placeholder-muted-foreground"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Project Type
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-foreground"
                    >
                      <option value="">Select project type</option>
                      <option value="web-design">Web Design</option>
                      <option value="mobile-app">Mobile App</option>
                      <option value="dashboard">Dashboard Design</option>
                      <option value="design-system">Design System</option>
                      <option value="consulting">Design Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Budget and Timeline */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-foreground"
                    >
                      <option value="">Select budget range</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k+">$50,000+</option>
                      <option value="discuss">Let's discuss</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-foreground"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-2-months">1-2 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="6-12-months">6-12 months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-input-background border border-border rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-foreground placeholder-muted-foreground resize-none"
                    placeholder="Tell me about your project, goals, and any specific requirements..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-cyan-400 text-white py-4 rounded-xl font-medium hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info and Image */}
          <div className="lg:col-span-2 space-y-8">
            {/* Profile Image */}
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-cyan-400/20 rounded-3xl blur-2xl" />
              <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-primary/30 rounded-full floating-element" />
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary/20 rounded-2xl floating-element" style={{ animationDelay: '-1s' }} />
              
              {/* Main image */}
              <div className="relative overflow-hidden rounded-3xl border-2 border-primary/30 glass-morphism">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1475118258341-d2a655a5b11a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXNpZ25lciUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NzMwNzkwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Alex Chen - UI/UX Designer"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
            </div>

            {/* Contact Information */}
            <div className="glass-morphism p-6 rounded-3xl border border-primary/20">
              <h3 className="text-xl font-bold text-foreground mb-6">Get in Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                      <span className="text-lg">{info.icon}</span>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{info.label}</div>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-foreground font-medium hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-foreground font-medium">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-morphism p-6 rounded-3xl border border-primary/20">
              <h3 className="text-xl font-bold text-foreground mb-6">Follow Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`flex items-center gap-3 p-4 bg-gradient-to-r ${social.color} rounded-xl text-white hover:scale-105 transition-all duration-300 hover:shadow-lg group`}
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform">
                      {social.icon}
                    </span>
                    <span className="font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="glass-morphism p-6 rounded-3xl border border-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-foreground font-medium">Available for Projects</span>
              </div>
              <p className="text-sm text-muted-foreground">
                I'm currently accepting new projects for Q2 2024. Let's discuss your ideas and see how we can work together.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-center gradient-text mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: "What's your typical project timeline?",
                answer: "Most projects take 2-6 months depending on complexity. I always provide detailed timelines during our initial consultation."
              },
              {
                question: "Do you work with international clients?",
                answer: "Absolutely! I work with clients worldwide and am flexible with different time zones for meetings and collaboration."
              },
              {
                question: "What's included in your design process?",
                answer: "My process includes research, wireframing, prototyping, visual design, and usability testing. I keep you involved at every step."
              },
              {
                question: "Do you offer ongoing support?",
                answer: "Yes, I provide post-launch support and can help with updates, improvements, and scaling your design system."
              }
            ].map((faq, index) => (
              <div key={index} className="glass-morphism p-6 rounded-2xl border border-primary/20">
                <h3 className="font-bold text-foreground mb-3">{faq.question}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;