import { Blog } from "../../types/blog";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = React.memo(({ blog }) => {
  console.log(`Rendering BlogCard: ${blog.title}`);

  return (
    <motion.div
      className="max-w-xs py-2 hover:shadow-lg hover:rounded-md rounded-lg transition duration-300 ease-in-out m-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {/* Blog Image */}
      <div className="flex justify-center items-center">
        <Image
          loader={() => blog.blogImage || "/images/fallback.jpg"} // Ensure the loader returns a valid URL.
          src={blog.blogImage || "/images/fallback.jpg"} // Fallback image if `blogImage` is not available.
          alt={blog.title}
          width={800}
          height={100}
          className="h-[250px] w-[310px] bg-[#F0EEED] object-cover rounded-lg"
        />
      </div>

      {/* Blog Content */}
      <div className="p-4">
        <h1 className="text-lg font-semibold dark:text-white text-gray-800">
          {blog.title}
        </h1>

        {/* Blog Tag */}
        <div className="flex justify-between items-center mt-4 text-gray-500 text-sm">
          {blog.tag && (
            <p className="bg-blue-100 text-blue-600 px-2 py-1 rounded-md">
              {blog.tag}
            </p>
          )}
        </div>

        {/* Read More Link */}
        <Link
          href={`/posts/${blog._id}`}
          className="mt-5 inline-block text-blue-500 hover:underline"
        >
          Read more...
        </Link>
      </div>
    </motion.div>
  );
});

export default BlogCard;
