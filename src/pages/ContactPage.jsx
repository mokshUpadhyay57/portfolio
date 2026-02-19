import React, { useState } from 'react';
import './ContactPage.css';
import { Github, Linkedin, Mail, Send, Briefcase, Globe, CircleDollarSign, CheckCircle } from 'lucide-react';
import { contactDetails } from '../components/data/contactDetails';
import useSEO from '../hooks/useSEO';

const IconComponents = {
  Github: Github,
  Linkedin: Linkedin,
  Mail: Mail,
  Send: Send,
  Briefcase: Briefcase,
  Globe: Globe,
  CircleDollarSign: CircleDollarSign,
};

const ContactPage = () => {
  useSEO({
    title: "Contact",
    description: "Get in touch with Moksh Upadhyay for collaboration, hiring, or technical inquiries. Available for Java Backend and Full Stack roles.",
    keywords: "Contact Moksh Upadhyay, Hire Java Developer, Backend Engineer, Freelance Developer",
    canonical: "https://moksh.codes/contact"
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    projectType: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '', projectType: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="contact-page">
      <div className="contact-grid-container">
        {/* Left Column */}
        <div className="contact-info">
          <h1>Get in Touch</h1>
          <p>
            I'm open to discussing new projects, freelance opportunities, or any questions you may have.
            Feel free to reach out through the form or any of the channels below.
          </p>
          <div className="contact-details">
             <div className="contact-item">
              {React.createElement(IconComponents.Mail, { size: 20 })}
              <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
            </div>
          </div>
          <div className="social-links">
            {contactDetails.social.map((platform, index) => {
              const IconComponent = IconComponents[platform.icon];
              return (
                <a 
                  key={index} 
                  href={platform.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  title={platform.name}
                >
                  {IconComponent && React.createElement(IconComponent, { size: 24 })}
                </a>
              );
            })}
          </div>
        </div>

        {/* Right Column */}
        <div className="contact-form-container">
          {isSubmitted ? (
            <div className="success-message">
              <CheckCircle size={48} className="success-icon" />
              <h2>Message Sent!</h2>
              <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
              <button onClick={() => setIsSubmitted(false)} className="btn outline">
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="projectType">Project Type</label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Project Type</option>
                  <option value="Website (Single / Multi Page)">Website (Single / Multi Page)</option>
                  <option value="Backend API / Server Development">Backend API Development</option>
                  <option value="Mobile App (Simple / Hybrid)">Mobile App (Simple / Hybrid)</option>
                  <option value="Full App / Product Development">Full App / Product Development</option>
                  <option value="Not Sure (Need Help Deciding)">Not Sure (Need Help Deciding)</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn primary">
                Send Message
                <Send size={18} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
