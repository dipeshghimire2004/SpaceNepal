import React from "react";
import Image from "next/image";
import web from "../../../public/images/web.jpg";
import quantum from "../../../public/images/quantum.jpg";
import ai from "../../../public/images/ai.webp";
import bgimg from "../../../public/images/bgimg.webp";
import futuretech from "../../../public/images/futuretech.gif";

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
      </div>

      {/* Scrollable Images */}
      <div className="overflow-hidden relative mt-20 group">
  <div className="flex gap-4 animate-slide group-hover:animation-paused">
    <Image src={web} alt="Web Concept" className="h-72 w-96 border rounded-lg" />
    <Image src={quantum} alt="Quantum Concept" className="h-72 w-96 border rounded-lg" />
    <Image src={ai} alt="AI" className="h-72 w-96 border rounded-lg" />
    <Image src={futuretech} alt="Future Tech" className="h-72 w-96 border rounded-lg" />
    <Image src={bgimg} alt="Background Image" className="h-72 w-96 border rounded-lg" />

    {/* Duplicate images for smooth looping */}
    {/* <Image src={web} alt="Web Concept" className="h-72 w-96 border rounded-lg" />
    <Image src={quantum} alt="Quantum Concept" className="h-72 w-96 border rounded-lg" />
    <Image src={ai} alt="AI" className="h-72 w-96 border rounded-lg" />
    <Image src={futuretech} alt="Future Tech" className="h-72 w-96 border rounded-lg" />
    <Image src={bgimg} alt="Background Image" className="h-72 w-96 border rounded-lg" /> */}
  </div>
</div>

    </section>
  );
};

export default About;
