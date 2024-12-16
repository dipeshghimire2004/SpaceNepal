"use client"
import React, { useEffect, useState } from 'react'
import axios,{isAxiosError} from 'axios'
import toast,{Toaster} from 'react-hot-toast'
import { Blog } from '@/types/blog'


const blog = () => {
    const [blogs, setBlogs] = useState<Blog[] | null>(null);
    
    const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
    
    useEffect(()=>{
        const fetchBlogs= async()=>{
            try {
                const response = await axios.get<{success: boolean, data: Blog[]}>(`${API_BASE_URL}/blogs`);
                setBlogs(response.data.data);
                if(response.status==200){
                  toast.success("Enjoy reading the blogs");
                }
            } catch (error) {
                if (isAxiosError(error)){
                    toast.error(error.response?.data?.message || 'Network error');
                }
                else{
                    toast.error("An invalid error occured");
                }
            }
        }
    })
  return (
    <div>page</div>
  )
}

export default blog