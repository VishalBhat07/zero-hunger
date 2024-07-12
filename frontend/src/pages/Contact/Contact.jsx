import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbz1nMjDY70SiRcTa_0gbndUqrnmJV6K9QHgO4-pGQreG4_PxF2sBFCx1DUdv-Awp5xZJA/exec";

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    fetch(scriptURL, { method: "POST", body: new FormData(e.target) })
      .then((response) => {
        setMessage("Message sent successfully");
        setTimeout(() => {
          setMessage("");
        }, 5000);
        e.target.reset();
        setSubmitting(false);
      })
      .catch((error) => {
        console.error("Error!", error.message);
        setSubmitting(false);
      });
  };

  return (
    
    <div className="contact-right">
      <form onSubmit={handleSubmit} name="submit-to-google-sheet">
        <input type="text" name="Name" placeholder="Your name" required />
        <input type="text" name="Email" placeholder="Your email" required />
        <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
        <button type="submit" className="btn btn2" disabled={submitting}>
          {submitting ? (
            <span>
              Submitting... <i className="fas fa-spinner fa-spin"></i>
            </span>
          ) : (
            "Submit"
          )}
        </button>
      </form>
      <span id="msg">{message}</span>
    </div>
  );
};

export default Contact;
