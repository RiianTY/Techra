import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { toast } from "sonner";

import DefaultLayout from "@/layouts/default";

export const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm("service_80rmige", "template_fbcrfmp", form.current, {
          publicKey: "z_l982_kfuBRNqYZ4",
        })
        .then(
          () => {
            return toast("Thanks for contacting us", {
              description: "Well get back to you as soon as possible.",
              action: {
                label: "X",
                onClick: () => console.log("Undo"),
              },
            });
          },
          (error: { text: string }) => {
            console.error("FAILED...", error.text);

            return toast.error("Failed to send message", {
              description: "Please try again later.",
              action: {
                label: "X",
                onClick: () => console.log("Error"),
              },
            });
          },
        );
    } else {
      console.error("Form reference is null.");
    }
  };

  return (
    <form
      ref={form}
      encType="multipart/form-data"
      id="test"
      onSubmit={sendEmail}
    >
      <h1>Contact Us</h1>
      <label className="float required" htmlFor="first_name">
        First name
      </label>
      <input
        required
        className="required"
        id="user_name"
        name="first_name"
        placeholder="John"
        type="text"
      />
      <label className="float required" htmlFor="last_name">
        Last name
      </label>
      <input
        required
        className="required"
        id="user_name"
        name="last_name"
        placeholder="Doe"
        type="text"
      />
      <label className="float required" htmlFor="user_email">
        Email
      </label>
      <input
        required
        name="user_email"
        placeholder="John@example.com"
        type="email"
      />
      <label className="float" htmlFor="user_phone">
        Phone
      </label>
      <input name="user_phone" placeholder="+44 7000000000" type="tel" />
      <label className="float" htmlFor="user_budget">
        Budget
      </label>
      <input
        name="user_budget"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        placeholder="£500 - £4000"
        type="number"
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
