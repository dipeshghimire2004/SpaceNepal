"use client"
import React, { useEffect, useState } from 'react'
import toast,{Toaster} from 'react-hot-toast'
import { motion } from "framer-motion";
import BlogCard from '../components/BlogCard'
import { fetchBlogs } from '../redux/blogSlice'
import { useAppDispatch, useAppSelector } from '@/hooks/reduxHooks'

interface BlogPostsProps{
  limit?: number;
}

const Posts:React.FC<BlogPostsProps> = ({limit}) => {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

 
   const {blogs, loading, error}= useAppSelector((state)=>state.blog)
    console.log(blogs)
    const dispatch= useAppDispatch();
  

    useEffect(()=>{
      if(!blogs){
        dispatch(fetchBlogs());
      }
    })
  
    const displayPosts = limit ? blogs?.slice(0, limit): blogs;

  return (
    <section className="mt-10 bg-gray-300 dark:bg-black">
      <Toaster/>
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
          className="flex flex-wrap gap-6 justify-center"
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
          {displayPosts.map((blog) => (
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
        </motion.div>
      ) : (
        <motion.p
          className="text-center text-gray-500 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          No Blogs available
        </motion.p>
      )}
    </div>
  </section> 
  )
}

export default Posts




  // useEffect(() => {

  //   const fetchBlogs = async () => {
  //     if (!loading) return;

  //     try {
  //       const response = await axios.get<{ success: boolean; data: Blog[] }>(
  //         `${API_BASE_URL}/blogs`
  //       );
  //       setBlogs(response.data.data);
  //       console.log(response.data.data)
  //       if(response.status==200){
  //         toast.success("Enjoy reading the blogs");
  //       }
  //     } catch (error) {
  //       console.log(error);
  //       if (isAxiosError(error)) {
  //         toast.error(error.response?.data?.message || "Failed to fetch blogs.");
  //       } else {
  //         toast.error("An unexpected error occurred.");
  //       }
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchBlogs();
  // }, [loading]); 
