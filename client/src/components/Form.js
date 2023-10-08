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
        
        <input type="text" name="from_name" placeholder="Name" required></input>
        
        <input type="email" name="from_email" placeholder="Email" required></input>
        
        <textarea rows="5" placeholder="Type your message here" name="message" required/>
        <button className="btn" value="Send">Send</button>
      </form>
    </div>
  )
}

export default Form
