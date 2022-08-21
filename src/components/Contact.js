import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../style/Contact.css";
export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4mt52ce",
        "template_g6aciyx",
        form.current,
        "IqPuiuRN3XFrRQNPl"
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
  };
  return (
    <div>
      <section>
        <form ref={form} onSubmit={(e) => sendEmail(e)}>
          <div className="contact-container">
            <div>
              <h2>Contact Individual</h2>
            </div>
            <input
              type="text"
              placeholder="Full Name"
              name="user_name"
              required
            ></input>
            <input
              type="email"
              placeholder="Email"
              name="user_email"
              required
            ></input>
            <input
              type="text"
              placeholder="Subject"
              name="Subject"
              required
            ></input>
            <textarea
              type="text"
              cols="30"
              rows="10"
              name="message"
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </div>
        </form>
      </section>
    </div>
  );
}
