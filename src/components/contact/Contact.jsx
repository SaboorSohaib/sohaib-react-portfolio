import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdOutlineMail } from 'react-icons/md';
import { ImWhatsapp } from 'react-icons/im';
import './contact.css';

const Contact = () => {
  const showMessage = (message, type) => {
    if (type === 'success') {
      const successMessage = <span>{message}</span>;
      toast.success(successMessage);
    } else {
      const errorMessage = <span>{message}</span>;
      toast.error(errorMessage);
    }
  };

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xbf8luj', 'template_pxiv9mj', form.current, '-t0aXf5q5wtAPtEMA')
      .then((/* result */) => {
        const successMessage = 'Message has been sent successfully!';
        showMessage(successMessage, 'success');
        form.current.reset();
      }, (/* error */) => {
        const errorMessage = 'An error occurred while sending the email.';
        showMessage(errorMessage, 'error');
      });
  };

  return (
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
            <h5>+93786189455</h5>
            <a href="https://api.whatsapp.com/send?phone=+93786189455" target="blank" rel="noreferrer">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="7" required />
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
