"use Client"
import axios,{isAxiosError} from 'axios'
import toast from 'react-hot-toast'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import *as Yup from 'yup'
import { Blog } from '@/types/blog'
// import { Tag } from 'lucide-react'
import React from 'react'



const CreatePost = () => {

    const initialValues:Blog={
        title:'',
        content:'',
        tag:'',
        blogImage:'',
        createdAt:new Date().toISOString(),
    }

    const validationSchema=Yup.object({
        title:Yup.string().required("Title is required"),
        content:Yup.string().required("content is required").min(6),
        tag:Yup.string().required("Tag is requied"),
        blogImage:Yup.string().url('Invalid URL').required("Image is required"),
        createdAt:Yup.string().required("Created date is required"),
    })

        const handleSubmit=async(values: Blog)=>{
            try {
                const response= await axios.post('http://localhost:8000/blogs',values);
                if(response.status==201){
                    toast.success("Blog post added successfully");
                }
            } catch (error) {
                if(isAxiosError(error)){
                    toast.error(error.response?.data?.message || "Network connection issue, please try again");
                }
                else{
                    toast.error("An unexpected error occured");
                }
            }
        }
 
  return (
    <div className='max-w-lg mx-auto mt-10 p-6 border rounded-lg shadow-lg'>
        <h1 className="text-2xl font-semibold mb-6">Create Blog Post</h1>
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({setFieldValue})=>(
            <Form>
                <div className='mb-4'>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700"> Title</label>
                    <Field
                        type='text'
                        id='title'
                        name='title'
                        className='mt-1 p-2 w-full border border-gray-300 rounded-md'
                    />
                    <ErrorMessage name='title' component='div' className='text-red-500 text-sm'/>
                </div>


            <div className="mb-4">
              <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                Content
              </label>
              <Field
                as="textarea"
                id="content"
                name="content"
                rows={4}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
              <ErrorMessage name="content" component="div" className="text-red-500 text-sm" />
            </div>

            <div className="mb-4">
              <label htmlFor="tag" className="block text-sm font-medium text-gray-700">
                Tag
              </label>
              <Field
                type="text"
                id="tag"
                name="tag"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
              <ErrorMessage name="tag" component="div" className="text-red-500 text-sm" />
            </div>

            <div className="mb-4">
              <label htmlFor="blogImage" className="block text-sm font-medium text-gray-700">
                Blog Image URL
              </label>
              <Field
                type="text"
                id="blogImage"
                name="blogImage"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
              <ErrorMessage name="blogImage" component="div" className="text-red-500 text-sm" />
            </div>

            <div className="mb-4">
              <label htmlFor="createdAt" className="block text-sm font-medium text-gray-700">
                Created At
              </label>
              <Field
                type="datetime-local"
                id="createdAt"
                name="createdAt"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
              <ErrorMessage name="createdAt" component="div" className="text-red-500 text-sm" />
            </div>

            
            <div className="mb-4">
              <label htmlFor="featuredAt" className="block text-sm font-medium text-gray-700">
                Featured At (Optional)
              </label>
              <Field
                type="datetime-local"
                id="featuredAt"
                name="featuredAt"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="updatedAt" className="block text-sm font-medium text-gray-700">
                Updated At (Optional)
              </label>
              <Field
                type="datetime-local"
                id="updatedAt"
                name="updatedAt"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md"
            >
              Create Blog Post
            </button>
            </Form>
        )}
    </Formik>

    </div>
  )
}

export default CreatePost