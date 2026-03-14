import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <footer className="contact-section-wrapper" id="contact">
      <div className="section container">
        <h2>Let's build something extraordinary together.</h2>

        <div className="contact-grid">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" className="form-input" placeholder="Your name" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" className="form-input" placeholder="Your email address" />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" className="form-input" placeholder="How can we help each other?"></textarea>
            </div>

            <button type="submit" className="btn btn-submit">Send Message</button>
          </form>

          <aside className="contact-info">
            <div className="info-item">
              <div className="info-icon"><Mail size={20} /></div>
              <div className="info-details">
                <h4>Email</h4>
                <p>hello@chrisharris.dev</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><Phone size={20} /></div>
              <div className="info-details">
                <h4>Phone</h4>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><MapPin size={20} /></div>
              <div className="info-details">
                <h4>Location</h4>
                <p>New York, NY</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
