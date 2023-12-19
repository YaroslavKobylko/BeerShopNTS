import React, { useState } from 'react';
import './ContactModal.css';
import { FormImage } from './images';

const ContactModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    message: '',
    termsChecked: false,
  });

  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      console.log('Form submitted successfully!');
      setIsSent(true);
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="contact-modal" onClick={handleModalClick}>
      {!isSent ? (
        <div className='contact-modal-2'>
        <img className='formphoto' src={FormImage} alt="Beer" />
        <form  className="form-modal" onSubmit={handleSubmit}>
                <h1>Contact Us</h1>
          <label>
            Full Name:
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />
          </label>
          <label>
            Phone:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </label>
          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </label>
          <label className='CheckButton'>
            <input
              type="checkbox"
              name="termsChecked"
              checked={formData.termsChecked}
              onChange={() => setFormData({ ...formData, termsChecked: !formData.termsChecked })}
            />
            I agree to the terms and policy
          </label>
          <button type="submit">Send</button>
        </form>
        </div>
      ) : (
        <div className="success-message">
          <p className='LogMessage'>Your message has been sent successfully!</p>
          <button onClick={onClose}>Close</button>
        </div>
      )}
    </div>
  );
};

export default ContactModal;