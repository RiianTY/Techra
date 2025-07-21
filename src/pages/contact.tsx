import emailjs from "@emailjs/browser";
import { useRef } from "react";
import DefaultLayout from "@/layouts/default";
import "@/styles/globals.css";

import ContactSuccess from "@/components/contactSuccess";

export const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm("service_aodawfk", "template_fbcrfmp", form.current, {
          publicKey: "z_l982_kfuBRNqYZ4",
        })
        .then(
          () => {
            return <ContactSuccess />; // ContactSuccess()
          },
          (error: { text: string }) => {
            console.error("FAILED...", error.text);
            <ContactSuccess errorNum={error} />;
          }
        );
    } else {
      console.error("Form reference is null.");
    }
  };

  return (
    <form
      id="test"
      encType="multipart/form-data"
      ref={form}
      onSubmit={sendEmail}
    >
      <h1>Contact Us</h1>
      <label className="float required" htmlFor="first_name">
        First name
      </label>
      <input
        className="required"
        id="user_name"
        name="first_name"
        type="text"
        placeholder="John"
        required
      />
      <label className="float required" htmlFor="last_name">
        Last name
      </label>
      <input
        className="required"
        id="user_name"
        name="last_name"
        type="text"
        placeholder="Doe"
        required
      />
      <label className="float required" htmlFor="user_email">
        Email
      </label>
      <input
        name="user_email"
        type="email"
        placeholder="John@example.com"
        required
      />
      <label className="float" htmlFor="user_phone">
        Phone
      </label>
      <input name="user_phone" type="tel" placeholder="+44 7000000000" />
      <label className="float" htmlFor="user_budget">
        Budget
      </label>
      <input
        name="user_budget"
        type="number"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        placeholder="£500 - £4000"
      />
      <label className="float" htmlFor="user_message">
        Message
      </label>
      <textarea name="user_message" placeholder="" />
      <input id="form-btn" type="submit" value="Send" />
    </form>
  );
};

export default function Contact() {
  return (
    <DefaultLayout>
      <ContactForm />
    </DefaultLayout>
  );
}
