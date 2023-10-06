import "./FormStyle.css";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_77qpg6b', 'template_5dbd49b', form.current, 'C5iLlLgIcRUdwORKL')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Sent Successfully!");
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="form">
      <form ref={form} onSubmit={sendEmail}>
        <label>Your Name</label>
        <input type="text" name="from_name"></input>
        <label>Email</label>
        <input type="email" name="from_email"></input>
        <label>Message</label>
        <textarea rows="6" placeholder="Type your message here" name="message"/>
        <button className="btn" value="Send">Send</button>
      </form>
    </div>
  )
}

export default Form
