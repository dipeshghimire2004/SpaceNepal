import React from "react";
import { MdAddIcCall } from "react-icons/md";
import { FaMailBulk } from "react-icons/fa";


const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-gray-300 h-screen text-black dark:bg-black dark:text-white py-16 px-8">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
        <p className="text-lg mb-8">
          Got a question or just want to say hello? Reach out to us through the
          following contact details:
        </p>
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-4">
          <MdAddIcCall className="text-blue-500" />
            <span className="text-lg font-medium">984293107</span>
          </div>
          <div className="flex items-center space-x-4">
          <FaMailBulk className="text-blue-500"/>
            <span className="text-lg font-medium">tecspace2004@dipesh.com</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
