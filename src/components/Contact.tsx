import { ChangeEvent, FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";

// Define types for form data
interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  // Form data state with types
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes with typed event
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  // Handle form submission with typed event
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .send(
        "service_wzx18e3", // Your EmailJS service ID
        "template_gu1m78s", // Your EmailJS template ID
        // @ts-ignore
        formData, // Form data
        "5OKWxP-JTHiDP_15E" // Your EmailJS user ID
      )
      .then(
        (response: any) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err: any) => {
          console.log("FAILED...", err);
        }
      );

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="contact-section">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}
