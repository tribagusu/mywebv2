"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Form() {
  const [isLoading, setIsLoading] = useState(false);

  const notify = () =>
    toast.info("Message sent! \r\n I will reach you back shortly");
  const form: any = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_8ln3gjg",
        "template_uonm3vb",
        form.current,
        "9aYefTHRkGOeaGETQ"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          setIsLoading(false);
          notify();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="w-[70%]">
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-3">
        <input
          type="text"
          name="user_name"
          placeholder="Enter Your Name..."
          className="input"
          required
          disabled={isLoading ? true : false}
        />
        <input
          type="text"
          name="user_email"
          placeholder="Enter Your Email..."
          className="input"
          required
          disabled={isLoading ? true : false}
        />
        <textarea
          placeholder="Enter Your Message..."
          className="input min-h-[150px]
        "
          name="message"
          required
          disabled={isLoading ? true : false}
        />
        <button
          type="submit"
          className="bg-primary p-3 text-black font-semibold rounded-md hover:bg-[#c19160] transition ease-out duration-200"
          disabled={isLoading ? true : false}
        >
          {isLoading ? "SUBMITTING..." : "SUBMIT"}
        </button>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={6000}
        closeOnClick={false}
        hideProgressBar={true}
        theme="colored"
      />
    </div>
  );
}
