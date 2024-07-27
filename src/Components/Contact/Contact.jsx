import React from 'react'
import "./Contact.css"
function Contact() {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "6f65a748-b484-427b-a948-aaa975f2ed1c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };


  return (
    <div>
      <div id='contact' className="contact">
        <div className="contact-title">
            <h1>Get in touch!</h1>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h2>Let's talk</h2>
                <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                    <i class="fa-regular fa-envelope"></i>alihaiderali1050@gmail.com
                    </div>
                    <div className="contact-detail">
                    <i class="fa-solid fa-phone-volume"></i> +91 1234567890
                    </div>
                    <div className="contact-detail">
                    <i class="fa-brands fa-linkedin"></i> LinkedIn
                    </div>
                    <div className="contact-detail">
                    <i class="fa-solid fa-location-dot"></i>  India
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit}  className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email' name='email' />
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows="8" placeholder='Enter your message' ></textarea>
                <button type='submit' className="contact-submit">Submit now</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
