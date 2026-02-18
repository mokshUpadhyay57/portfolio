import React, { useState } from 'react';
import './ContactPage.css';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { contactDetails } from '../components/data/contactDetails';

const IconComponents = {
  Github: Github,
  Linkedin: Linkedin,
  Mail: Mail,
  Phone: Phone,
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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
    alert('Thank you for your message!');
    setFormData({ name: '', email: '', message: '' });
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
            <div className="contact-item">
              {React.createElement(IconComponents.Phone, { size: 20 })}
              <span>{contactDetails.phone}</span>
            </div>
          </div>
          <div className="social-links">
            {contactDetails.social.map((platform, index) => {
              const IconComponent = IconComponents[platform.icon];
              return (
                <a key={index} href={platform.url} target="_blank" rel="noopener noreferrer">
                  {IconComponent && React.createElement(IconComponent, { size: 24 })}
                </a>
              );
            })}
          </div>
        </div>

        {/* Right Column */}
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
          <button type="submit" className="btn primary">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
