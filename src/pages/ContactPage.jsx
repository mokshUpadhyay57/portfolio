import React, { useState, useRef } from 'react';
import './ContactPage.css';
import { Github, Linkedin, Mail, Send, Briefcase, Globe, CircleDollarSign, CheckCircle } from 'lucide-react';
import { contactDetails } from '../components/data/contactDetails';
import useSEO from '../hooks/useSEO';
import emailjs from '@emailjs/browser';

const IconComponents = {
  Github: Github,
  Linkedin: Linkedin,
  Mail: Mail,
  Send: Send,
  Briefcase: Briefcase,
  Globe: Globe,
  CircleDollarSign: CircleDollarSign,
  CheckCircle: CheckCircle,
};

const ContactPage = () => {
  useSEO({
    title: "Contact",
    description: "Get in touch with Moksh Upadhyay for collaboration, hiring, or technical inquiries. Available for Java Backend and Full Stack roles.",
    keywords: "Contact Moksh Upadhyay, Hire Java Developer, Backend Engineer, Freelance Developer",
    canonical: "https://mokshcodes.netlify.app/contact"
  });

  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    projectType: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', message: '', projectType: '' });
    setIsSubmitted(false);
    setSendError(null);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setSendError(null);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setSendError('Config error: Missing EmailJS keys in .env');
      setIsSending(false);
      return;
    }

    const templateParams = {
      name: formData.name,       // {{name}}
      reply_to: formData.email,   // {{reply_to}}
      title: formData.projectType,// {{title}}
      message: formData.message,  // {{message}}
    };

    console.log('Sending inquiry notification...', templateParams);

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((result) => {
        console.log('Email successfully sent!', result.status, result.text);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '', projectType: '' });
      }, (error) => {
        console.error('EmailJS Error:', error);
        setSendError(`Send failed: ${error.text || 'Check console'}`);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section id="contact" className="contact-page">
      <div className="contact-grid-container">
        <div className="contact-info">
          <h1>Let's <span className="accent">Connect</span></h1>
          <p>
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
              const Icon = IconComponents[platform.icon];
              return Icon ? (
                <a 
                  key={index} 
                  href={platform.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`Link to my ${platform.name} profile`}
                >
                  {React.createElement(Icon, { size: 24 })}
                </a>
              ) : null;
            })}
          </div>
        </div>

        <div className="contact-form-container">
          {isSubmitted ? (
            <div className="success-message">
              {React.createElement(IconComponents.CheckCircle, { size: 60, className: "success-icon" })}
              <h2>Message Sent!</h2>
              <p>Thank you for reaching out. I'll get back to you shortly.</p>
              <button className="btn btn-outline" onClick={resetForm}>Send Another Message</button>
            </div>
          ) : (
            <form ref={form} onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
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
                  placeholder="john.doe@example.com"
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
                  className={formData.projectType === '' ? 'placeholder-selected' : ''}
                  required
                >
                  <option value="">Select Project Type</option>
                  <option value="Website - Single or Multi Page">Website (Single / Multi Page)</option>
                  <option value="Backend API Development">Backend API Development</option>
                  <option value="Mobile App - Simple or Hybrid">Mobile App (Simple / Hybrid)</option>
                  <option value="Full App Development with Website">Full App Development with Website</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Requirement</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Moksh, I'd like to discuss a project..."
                  rows="6"
                  required
                ></textarea>
              </div>
              {sendError && <p className="error-message">{sendError}</p>}
              <button type="submit" className="btn btn-primary" disabled={isSending}>
                {isSending ? (
                  <>
                    Sending...
                    <span className="spinner"></span>
                  </>
                ) : (
                  <>
                    Send Message
                    {React.createElement(IconComponents.Send, { size: 20 })}
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
