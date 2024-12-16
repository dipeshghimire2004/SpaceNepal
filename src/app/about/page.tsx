
import React from "react";
import Tech from '../../../public/images/tech.webp'
import Image from "next/image";

const About: React.FC = () => {
  return (
    <section id="about" className="bg-gray-300 text-black dark:bg-black dark:text-white py-16 px-8">
      <div className="container mx-auto text-center max-w-4xl">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">About Us</h2>
        <p className="text-lg text-gray-600 dark:text-white leading-relaxed">
          Welcome to our tech blog, your go-to destination for insights,
          updates, and tips in the world of technology. From AI innovations to
          web development trends, we’re here to keep you informed and inspired.
          Our mission is to make technology accessible to everyone by sharing
          valuable knowledge in an engaging way.
        </p>
        <div className="mt-8">
          <Image
            src={Tech}
            alt="Tech Concept"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
