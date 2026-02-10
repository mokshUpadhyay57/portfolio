import { useState } from "react";
import "../../sections/styles/Contact.css";


function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.target);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setStatus("Message sent successfully.");
        e.target.reset();
      } else {
        setStatus("Failed to send message. Try again.");
      }
    } catch (err) {
      setStatus("Something went wrong.");
    }
  };

  return (
    <section className="contact section" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">
          Let’s <span className="accent">Work Together</span>
        </h2>

        <p className="contact-intro">
          Have a project or opportunity in mind? Send a message or reach me via
          freelance platforms.
        </p>

        {/* CONTACT FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
          />

          <textarea
            name="message"
            placeholder="Tell me about your project"
            rows="4"
            required
          ></textarea>

          <button type="submit" className="contact-btn primary">
            Send Message
          </button>

          {status && <p className="form-status">{status}</p>}
        </form>

        {/* OTHER OPTIONS */}
        <div className="contact-platforms">
          <span>Or find me on:</span>

          <a
            href="https://www.fiverr.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fiverr
          </a>

          <a
            href="https://www.upwork.com/freelancers/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            Upwork
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
