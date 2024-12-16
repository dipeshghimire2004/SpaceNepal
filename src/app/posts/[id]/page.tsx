"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Blog } from "@/types/blog";
import { useParams } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

const BlogDetail = () => {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;

    const fetchBlog = async () => {
      setLoading(true);
      try {
        const response = await axios.get<{ success: boolean; result: Blog }>(
          `${API_BASE_URL}/blogs/${id}`
        );
        setBlog(response.data.result);
      } catch (error) {
        toast.error("Failed to fetch blog details.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id, API_BASE_URL]);

  return (


    <section className=" relative  mx-4 p-8 dark:bg-black">
      <div className="container mx-auto ">
        {loading ? (
          <motion.p
            className="text-center text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration:0.5 }}
          >
            Loading blog details...
          </motion.p>
        ) : blog ? (
          <div className="relative bg-blue-500">
            <motion.div
              className=" "
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } },
              }}
            > 
            <div className=" pt-4">
              <p className="px-4 text-gray-200 ">{new Date(blog.createdAt).toLocaleDateString()}</p>
              <h1 className="text-3xl px-4 font-bold mb-24 text-white dark:text-white">
                  {blog.title}
                </h1>
              
            </div>
            <div className=" bg-gray-300 mt-32 ">
              {/* Blog Image */}
            <motion.div
                className="relative flex justify-center lg:left-28 -top-36 rounded-xl sm:w-[97%] lg:w-[80%] max-h-[500px] p-8  "
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <Image
                loader={() => blog.blogImage }
                  src={blog.blogImage}
                  alt={blog.title}
                  width={800}
                  height={250}
                  className="rounded-xl shadow-md"
                  priority={true}
                />
              </motion.div>

              {/* details */}
              <div
                className="mx-4 -top-20"
              >
                <h2 className="text-2xl mb-4 border-t-4">Written by: <span className="font-medium">{blog.tag}</span></h2>
                <p className="text-gray-700 border-t-2 dark:text-gray-300 mb-6">{blog.content}</p>
                <div className="text-sm text-gray-600 dark:text-gray-400 border-t-2">
                  <p>Published: {new Date(blog.createdAt).toLocaleDateString()}</p>
                </div>
              </div>
            </div>

              {/* Blog Details */}
            </motion.div>
          </div>
        ) : (
          <motion.p
            className="text-center text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Blog not found.
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default BlogDetail;
