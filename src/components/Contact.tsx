import { ChangeEvent, FormEvent, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Define types for form data
interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [iconsVisible, setIconsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIconsVisible(true);
    }
  }, [inView]);

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
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        // @ts-ignore
        formData,
        import.meta.env.VITE_EMAILJS_USER_ID
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
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="mt-40 flex flex-col md:flex-row justify-center items-center md:items-start p-8 text-white max-w-[60em]"
    >
      <div className="md:w-2/3 flex flex-col ">
        <div className="flex items-center space-x-2 text-accent text-lg mb-4">
          <div className="flex-grow border-t border-gray-700 max-w-[18em]"></div>
          <span className="text-accent text-xl">05.</span>
          <h2 className="text-2xl font-bold">Contact</h2>
          <div className="flex-grow border-t border-gray-700 max-w-[18em]"></div>
        </div>

        <div className="flex flex-col justify-start items-center">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Name:</span>
              </div>
              <input
                type="text"
                name="name"
                placeholder="Type name here..."
                className="input input-bordered max-w-xs w-full md:w-[30em]"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>

            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Email:</span>
              </div>
              <input
                type="email"
                name="email"
                placeholder="Type email here.."
                className="input input-bordered max-w-xs w-full md:w-[20em]"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>

            <label className="form-control">
              <div className="label">
                <span className="label-text">Message:</span>
              </div>
              <textarea
                className="textarea textarea-bordered h-24 w-full md:w-[23em]"
                placeholder="Type message here..."
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </label>

            <div className="flex justify-end pt-2">
              <button className="btn  btn-success w-full" type="submit">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.section>
  );
}
