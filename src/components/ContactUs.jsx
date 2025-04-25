import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import Navbar from './Navbar';
import Footer from './Footer';

function ContactUs() {
  const form = useRef();
  const [modalMessage, setModalMessage] = useState('');
  const [modalType, setModalType] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_8tlrtcl', 'template_sjb18z9', form.current, {
        publicKey: 'oaChL0RTiJVtXt8pq',
      })
      .then(
        () => {
          setModalMessage('Your message has been sent successfully!');
          setModalType('success');
          form.current.reset();
        },
        (error) => {
          setModalMessage('Failed to send the message. Please try again.');
          setModalType('error');
        }
      );
  };

  const handleReset = () => {
    form.current.reset();
  };

  return (
    <>
      <Navbar />
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-6 mb-4">
            <h2 className="mb-4 text-center text-md-start heading">SEND A MESSAGE</h2>
            <form ref={form} onSubmit={sendEmail} className="shadow p-4 bg-white rounded">
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-bold">Name*</label>
                <input type="text" className="form-control" id="name" placeholder="Enter Name" name="from_name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-bold">Email*</label>
                <input type="email" className="form-control" id="email" placeholder="Enter Email" name="from_email" required />
              </div>
              <div className="mb-3">
                <label htmlFor="contact" className="form-label fw-bold">Phone*</label>
                <input type="tel" className="form-control" id="contact" placeholder="Enter Phone Number" name='user_number' required />
              </div>
              <div className="mb-3">
                <label htmlFor="about" className="form-label fw-bold">Message</label>
                <textarea className="form-control" id="about" rows="5" placeholder="Write your message here..." name='message'  />
              </div>
              <div className="d-flex flex-wrap gap-2">
                <button type="button" className="btn btn-outline-secondary px-4" onClick={handleReset}>Reset</button>
                <input type="submit" className="btn btn-warning text-white px-4" value="Send Message" />
              </div>
            </form>
          </div>
          <div className="col-lg-6 contact-us">
            <h2 className="mb-4 text-center text-md-start heading">HOW TO REACH US</h2>
            <p>If you have any questions or queries, a member of our staff will always be happy to help...</p>
            <div className="contact-details">
              <div className="contact-address">
                <h4 className="mt-4 heading">OUR ADDRESS</h4>
                <p>Surrey, BC Canada</p>
              </div>
              <div>
                <h4 className="heading">CONTACT US</h4>
                <ul className="list-unstyled">
                  <li className="mb-2"><i className="fas fa-phone-alt text-warning me-2"></i> (604) 728-1687</li>
                  <li className="mb-2"><i className="fas fa-envelope text-warning me-2"></i> projects@division7.ca</li>
                  <li><i className="fas fa-link text-warning me-2"></i> www.division7.ca</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      
      {/* Modal */}
      {modalMessage && (
       <div className="modal fade show d-block custom-modal" tabIndex="-1">
       <div className="modal-dialog modal-dialog-centered">
         <div className={`modal-content shadow-lg border-0 ${modalType === 'success' ? 'bg-success text-white' : 'bg-danger text-white'}`}>
           {/* Modal Header */}
           <div className="modal-header border-0">
             <h5 className="modal-title fw-bold">
               {modalType === 'success' ? '🎉 Success!' : '⚠️ Error'}
             </h5>
             <button type="button" className="btn-close btn-close-white" onClick={() => setModalMessage('')} aria-label="Close"></button>
           </div>
     
           {/* Modal Body */}
           <div className="modal-body text-center">
             <p className="fs-5">{modalMessage}</p>
           </div>
     
           {/* Modal Footer */}
           <div className="modal-footer border-0 justify-content-center">
             <button type="button" className="btn btn-light px-4 py-2 rounded-pill fw-semibold" onClick={() => setModalMessage('')}>
               Close
             </button>
           </div>
         </div>
       </div>
     </div>
     
      )}
    </>
  );
}

export default ContactUs;
