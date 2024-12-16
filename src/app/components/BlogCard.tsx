import { Blog } from "../../types/blog";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

interface BlogCardProps{
  blog:Blog;
}

const BlogCard:React.FC<BlogCardProps> = React.memo(({blog}) => {
  console.log(`Rendering BlogCard ${blog.title}`)
  return (
    <motion.div
      className="max-w-xs py-2 hover:shadow-lg hover:rounded-md rounded-lg transition duration-300 ease-in-out m-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
       <div className=" flex justify-center items-center">
        <Image
         loader={() => blog.blogImage }
          src={blog.blogImage || "/images/fallback.jpg"}
          alt={blog.title}
          width={800}
          height={100}
          className="h-[250px] w-[310px] bg-[#F0EEED] object-cover rounded-lg"
        />
      </div>
      <div className="p-4">
        <h1 className="text-lg font-semibold dark:text-white text-gray-800">{blog.title}</h1>
        {/* <p className="text-sm text-gray-600 mt-2 line-clamp-3">{blog.content}</p> */}
        <div className="flex justify-between items-center mt-4 text-gray-500 text-sm">
          <p className="bg-blue-100 text-blue-600 px-2 py-1 rounded-md">{blog.tag}</p>
          {/* <p>{new Date(blog.createdAt).toLocaleDateString()}</p> */}
        </div>
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

