import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Grid, Card, Button } from "semantic-ui-react";

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
         <Grid>
        <Grid.Row>
   
      <Card centered stackable>
            <Card.Content>
       <Card.Header textAlign="center"> ContactForm</Card.Header>    
      <form action="" onSubmit={sendEmail}>
        <h2> Ask us a question</h2>
        <span> Full Name</span>
        <br />
        <input className="input100" type="text" name="fullName" required />
        <br />
        <span> Phone Number</span>
        <br />
        <input className="input100" type="text" name="phone" required />
        <br />
        <span>Enter Email</span>
        <br />
        <input className="input100" type="text" name="email" required />
      <br /> 
      <span> Message</span>
      <br />
      <textarea name="message" required></textarea>
      <br />
    <Button> Submit</Button>
{result ? <Result /> : null }

      </form>
      </Card.Content>
      </Card>
      </Grid.Row>
      </Grid>
    </div>
  );
}

export default ContactForm;
