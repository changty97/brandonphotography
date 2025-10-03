import React from "react";
import HeroGallery from "./components/HeroGallery";
import ContactForm from "./components/ContactForm";
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function App() {
  return (
    <div>
      <header className="site-header">
        <h1>Brandon Photography</h1>
        <p>Capturing moments, telling stories.</p>

        <div className="social-links">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </header>

      <main className="container">
        <HeroGallery />
        <section id="contact">
          <h2>Inquiries</h2>
          <p>Send us a message about your shoot, event date, or questions.</p>
          <ContactForm />
        </section>
      </main>

      <footer className="site-footer">
        <small>© {new Date().getFullYear()} Acme Photography</small>
      </footer>
    </div>
  );
}
