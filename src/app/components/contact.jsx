"use client";
import React, { useState } from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Log a message to the console instead of sending the data to the server
    console.log("Message submitted:", {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    });

    // Simulate sending an email by setting emailSubmitted to true
    setEmailSubmitted(true);
  };


  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Queries if any?
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          We are currently situated at Bagar-1, Pokhara. If you are looking to get into army just give a call to us we 
          will be willing to help you understand our history and facilities. 
        </p>
      </div>
      <div className="flex flex-col items-start">
    <span className="text-xl mb-2">Contacts</span>
    <p className="flex items-center mb-2 text-sm"><FaPhoneVolume /><span className="text-sm ml-2"> Phone no: </span> +977 9825362594, +977 9846321255</p>
    <p className="flex items-center mb-2 text-sm"><FaLocationDot /><span className="text-sm ml-2"> Location: </span> Bagar-1, Pokhara, Mighty Gurkha Training Center</p>
    <p className="flex items-center mb-2 text-sm"><MdEmail /><span className="text-sm ml-2"> Email: </span> krishnamgtc@gmail.com</p>
</div>

      
      
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" >
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="prabhatdev66@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;