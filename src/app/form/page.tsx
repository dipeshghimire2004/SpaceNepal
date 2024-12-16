"use client";

import axios, { isAxiosError } from "axios";
import toast from "react-hot-toast";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Blog } from "@/types/blog";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { useRouter } from "next/navigation";

const Post = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const router = useRouter();

  const initialValues: Blog = {
    title: "",
    content: "",
    tag: "",
    blogImage: "",
    featured: false,
    createdAt: new Date().toISOString(),
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    content: Yup.string().required("Content is required").min(6),
    tag: Yup.string().required("Tag is required"),
    blogImage: Yup.string().required("Image URL is required"),
  });

  const handleSubmit = async (values: Blog, { setSubmitting }: any) => {
    try {
      setSubmitting(true);
      const response = await axios.post("http://localhost:8000/blogs", values);

      if (response.status === 201) {
        toast.success("Blog post added successfully");
        router.push("/");
      }
    } catch (error) {
      if (isAxiosError(error)) {
        toast.error(
          error.response?.data?.message ||
            "Network connection issue, please try again"
        );
      } else {
        toast.error("An unexpected error occurred");
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleDrop = (
    acceptedFiles: File[],
    setFieldValue: (field: string, value: any) => void
  ) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result as string;
        setImagePreview(imageUrl);
        setFieldValue("blogImage", imageUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const Dropzone = ({
    setFieldValue,
  }: {
    setFieldValue: (field: string, value: any) => void;
  }) => {
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop: (acceptedFiles) => handleDrop(acceptedFiles, setFieldValue),
      accept: { "image/*": [] },
    });

    return (
      <div
        {...getRootProps()}
        className={`mt-1 p-6 w-full border-dashed border-2 rounded-md ${
          isDragActive ? "border-blue-500" : "border-gray-300"
        }`}
      >
        <input {...getInputProps()} />
        <p className="text-gray-600 text-center">
          {isDragActive
            ? "Drop the files here..."
            : "Drag & drop an image here, or click to select a file"}
        </p>
      </div>
    );
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 border rounded-lg shadow-lg">
      <h1 className="text-2xl text-center font-semibold mb-6">Create Blog Post</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, isSubmitting }) => (
          <Form>
            <div className="mb-4">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <Field
                type="text"
                id="title"
                name="title"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              />
              <ErrorMessage
                name="title"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="flex justify-between">
              <div className="mb-4 w-[70%]">
                <label htmlFor="tag" className="block text-sm font-medium text-gray-700">
                  Tag
                </label>
                <Field
                  type="text"
                  id="tag"
                  name="tag"
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                />
                <ErrorMessage
                  name="tag"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="flex items-center space-x-4">
                <label htmlFor="featured" className="text-sm font-medium text-gray-700">
                  Featured
                </label>
                <Field
                  type="checkbox"
                  id="featured"
                  name="featured"
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="blogImage"
                className="block text-sm font-medium text-gray-700"
              >
                Blog Image
              </label>
              <Dropzone setFieldValue={setFieldValue} />
              <ErrorMessage
                name="blogImage"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {imagePreview && (
              <div className="mb-4">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-full h-auto border border-gray-300 rounded-md"
                />
              </div>
            )}

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
              <ErrorMessage
                name="content"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-2 font-semibold rounded-md ${
                isSubmitting
                  ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                  : "bg-blue-600 text-white"
              }`}
            >
              {isSubmitting ? "Submitting..." : "Create Blog Post"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Post;
