import React, { useState } from 'react';
import './ContactForm.css';
import Swal from 'sweetalert2';

const ContactForm = () => {
  const [isActive, setIsActive] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const handleClicked = () => {
    setIsActive(prev => !prev);
  };
  const onSubmit = async event => {
    event.preventDefault();
    setIsSending(true);
    const formData = new FormData(event.target);

    formData.append('access_key', '9cf8681a-0f00-4b9e-ad9f-949ce4f08a98');

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    }).then(res => res.json());
    setIsSending(false);
    if (res.success) {
      Swal.fire({
        title: 'Success!',
        text: 'Message sent successfully!',
        icon: 'success',
      });
      //reset the form and isActive state
      event.target.reset();
      setIsActive(false);
    }
  };
  return (
    <div className='contact-box'>
      <form onSubmit={onSubmit}>
        <h2 className='heading'>
          Contact <span>Me!</span>
        </h2>
        <div className='field-box'>
          <input type='text' placeholder='Full Name' name='name' required />
          <input
            type='text'
            placeholder='Email Address'
            name='email'
            required
          />
          <input
            type='text'
            placeholder='Phone Number'
            name='number'
            required
          />
          <input
            type='text'
            placeholder='Email Subject'
            name='subject'
            required
          />
          <textarea
            name='message'
            id=''
            placeholder='your Message'
            required
          ></textarea>
        </div>
        <button
          onClick={handleClicked}
          type='submit'
          className={`btn ${isActive ? 'active' : ''}`}
        >
          {isSending ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
