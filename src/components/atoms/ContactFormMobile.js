import React, { useState } from 'react';
import '../../index.css'
import FormElementMobile from './FormElementMobile';
import emailjs from "emailjs-com";
import FormElement from './FormElement';

function ContactFormMobile(props) {

    const [formData, setFormData] = useState({
        name: "",
        last_name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value || "" });
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        const templateParams = {
          to_name: "Sellrly",
          name: formData.name || "Anonymous",
          first_name: formData.name,
          last_name: formData.last_name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message
        };

        emailjs
        .send(
          "service_xgykx3f", 
          "template_q61wwv3", 
          templateParams,
          "ImurMEug4XMvpWKeh" 
        )
        .then(
          (response) => {
            alert("Email sent successfully!");
            console.log("Email sent successfully:", response.status, response.text);
          },
          (err) => {
            alert("Failed to send email.");
            console.error("Failed to send email:", err);
          }
        );
    };

  return (
    <div className='holdContactFormMobile'>
            <FormElementMobile
                placeholder="First Name"
                name="name"
                value={formData.name || ""}
                onChange={handleChange}
                idPass = "Mobile1"
            />
            <FormElementMobile
                placeholder="Last Name"
                name="last_name"
                value={formData.last_name || ""}
                onChange={handleChange}
                idPass = "Mobile2"
            />
            <FormElementMobile
                placeholder="Phone Number"
                name="phone"
                value={formData.phone || ""}
                onChange={handleChange}
                idPass = "Mobile3"
            />  
            <FormElementMobile
                placeholder="Email"
                name="email"
                type="email"
                value={formData.email || ""}
                onChange={handleChange}
                idPass = "Mobile4"
            />
            <textarea 
            id="messageMobile" 
            name="message" 
            rows="5" 
            cols="40" 
            placeholder="Project Details"
            class="form-input"
            value={formData.message || ""}
            onChange={handleChange}
        ></textarea>
            <button type="submit" className="SubmitContact" id='standardzIndex' onClick={handleSubmit} >
                Submit 
            </button>
    </div>
  );
}

export default ContactFormMobile;