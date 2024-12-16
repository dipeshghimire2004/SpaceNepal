"use client"; 
import toast, { Toaster } from "react-hot-toast";
// import { useEffect,memo, useState, useMemo, useCallback } from "react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

 const HomeSection=()=> {

  return (
    <div className="mx-4  px-4 bg-blue-50 dark:bg-black">
      <Toaster />
      <motion.div
        className="flex lg:flex-row sm:flex-col sm:gap-4 items-center w-full py-10"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="w-full lg:w-1/2 space-y-6">
          <h1 className="text-[40px] font-bold leading-tight dark:text-white  text-gray-800">
            Welcome to <span className="text-blue-600">Tech Space Nepal</span>
          </h1>
          <p className="text-lg dark:text-white text-gray-600">
            Discover the latest in technology and innovation from around the world.
          </p>
          <Link href='/posts'>
            <Button className="rounded-full px-10 mt-4 font-bold bg-blue-600 shadow-lg text-white  hover:bg-white hover:text-black transition duration-300">
              Explore Blogs
            </Button>
          
          </Link>
        </div>

        <motion.section
          className="home-section w-full lg:w-1/2 h-full mx-auto rounded-lg shadow-2xl py-6"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
        </motion.section>
      </motion.div>
    </div>
  );
};


export default HomeSection

