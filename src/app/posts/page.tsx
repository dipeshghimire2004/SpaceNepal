"use client";
import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import BlogCard from "../components/BlogCard";
import { fetchBlogs } from "../redux/blogSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";

interface BlogPostsProps {
  limit?: number;
}

const Posts: React.FC<BlogPostsProps> = ({ limit }) => {
  // const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

  const [currentPage, setCurrentPage] = useState<number>(1);
  const postsPerPage = 4;

  const { blogs, loading } = useAppSelector((state) => state.blog);
  const dispatch = useAppDispatch();

  // Fetch blogs only if not already loaded
  useEffect(() => {
    if (!blogs || blogs.length === 0) {
      dispatch(fetchBlogs());
    }
  }, [blogs, dispatch]);

  // Sliced blogs for the current page
  const displayPosts = limit ? blogs?.slice(0, limit) : blogs;
  const totalPages = displayPosts ? Math.ceil(displayPosts.length / postsPerPage) : 0;
  const currentPosts = displayPosts?.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  ) || [];

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section className="mt-10 bg-gray-300 dark:bg-black">
      <Toaster />
      <div>
        {loading ? (
          <motion.p
            className="text-center text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Loading blogs...
          </motion.p>
        ) : displayPosts && displayPosts.length > 0 ? (
          <motion.div
            className="flex flex-col items-center"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.3 },
              },
            }}
          >
            {/* Blog Cards */}
            <div className="flex flex-wrap gap-6 justify-center">
              {currentPosts.map((blog) => (
                <motion.div
                  key={blog._id}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <BlogCard blog={blog} />
                </motion.div>
              ))}
            </div>

            {/* Pagination Controls */}
              <div className="flex justify-center mt-6 space-x-2">
                <button
                  disabled={currentPage ===1}
                  className="px-4 py-2 rounded bg-gray-200 text-black disabled:opacity-50"
                  onClick={()=>handlePageChange(currentPage-1)}
                >
                  Previous
                </button>
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded ${
                      currentPage === index + 1
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-black"
                    }`}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}
                <button
                disabled={currentPage === totalPages}
                 className="px-4 py-2 rounded bg-gray-200 text-black disabled:opacity-50"
                 onClick={()=> handlePageChange(currentPage +1)}
                >
                  Next
              </button>
              </div>

            
          </motion.div>
        ) : (
          <motion.p
            className="text-center text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            No Blogs available
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default Posts;
