import React from 'react';
import { MdOutlineMail } from 'react-icons/md';
import { ImWhatsapp } from 'react-icons/im';
import './contact.css';

const Contact = () => (
  <section id="contact">
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>

    <div className="container contact__container">
      <div className="contact__options">
        <article className="contact__option">
          <MdOutlineMail className="contact__option-icon" />
          <h4>Email</h4>
          <h5>abdulsaboorsohaib@gmail.com</h5>
          <a href="mailto:abdulsaboorsohaib@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
        </article>

        <article className="contact__option">
          <ImWhatsapp className="contact__option-icon" />
          <h4>WhatsApp</h4>
          <h5>0093786189455</h5>
          <a href="https://api.whatsapp.com/send?phone=0093786189455" target="blank" rel="noreferrer">Send a message</a>
        </article>
      </div>

      <form action="">
        <input type="text" name="name" placeholder="Your Full Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="7" required />
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </div>
  </section>
);

export default Contact;
