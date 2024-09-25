import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg_icon.png'
import mail_icon from '../../assets/mail_icon.png'
import phone_call from '../../assets/phone_call.png'
import location_icon from '../../assets/location_icon.png'
import next_icon_2 from '../../assets/next_icon_2.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a6e6f81d-fe2f-44a0-bee6-8546c93813d0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Email sent Successfully..!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
    <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, Questions and suggestions are important to us as we strive to provide exceptional service to our university community</p>
        <ul>
            <li><img src={mail_icon} alt="" />harsh.prodomain@gmail.com</li>
            <li><img src={phone_call} alt="" />+91 8624043370</li>
            <li><img src={location_icon} alt="" />Juhu, Mumbai<br />400058</li>
        </ul>
    </div>
    <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name='name' placeholder='Enter your name' required />
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
            <label>Write your message here</label>
            <textarea name="message" id="" rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit now <img src={next_icon_2} alt="" /></button>
        </form>
        <span>{result}</span>
    </div>
    </div>
  )
}

export default Contact
