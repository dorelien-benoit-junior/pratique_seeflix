import React from 'react'
import { useState } from "react";
import "./FormStyle.css"

function ContactForm() {

  const [formData, setFormData] = useState({ nom: "", mail: "", text:"" });

  const setChange = (event) => {
    setFormData((previous) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }));
    console.log(formData);
  };

  const setSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({ nom: "", mail: "", text:""});
    alert("Message send Successfully!");
  };


  return (
    <>
        <div className="formWrapper">
            <form onSubmit={setSubmit} className='formeStyle'>
                <input
                type="text"
                placeholder="Enter your name"
                name="nom"
                onChange={setChange}
                value={formData.nom}
                />
                <br />
                <input
                type="email"
                placeholder="email@example.com"
                name="mail"
                onChange={setChange}
                value={formData.mail}
                />
                <br />
                <textarea
                placeholder='Your message here...'
                onChange={setChange}
                name="text"
                value={formData.text}
                />
                <br />
                <button type="submit">Send</button>
            </form>
        </div>
    </>
  )
}

export default ContactForm