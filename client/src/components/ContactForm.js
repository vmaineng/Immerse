import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Result = () => {
    return(
        <p> Your message has been successfully sent. I will contact you soon</p>
    );
};

function ContactForm() {
  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2itkqjv",
        "template_tthr79j",
        e.target,
        "CVUjF1zMkRlaV0YLY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
      showResult(true);
  };

  return (
    <div>
      ContactForm
      <form action="" onSubmit={sendEmail}>
        <h2> Say Hello!</h2>
        <span> Full Name</span>
        <br />
        <input className="input100" type="text" name="fullName" required />
        <br />
        <span> Phone Number</span>
        <br />
        <input className="input100" type="text" name="phone" required />
        <br />
        <span>Enter Email</span>
        <input className="input100" type="text" name="email" required />
      <br /> 
      <span> Message</span>
      <textarea name="message" required></textarea>
      <br />
    <button> Submit</button>
{result ? <Result /> : null }

      </form>
    </div>
  );
}

export default ContactForm;
