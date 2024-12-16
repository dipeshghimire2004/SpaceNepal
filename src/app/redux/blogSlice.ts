// "use client"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Blog } from "@/types/blog";
import build from "next/dist/build";
import { stat } from "fs";
import { error } from "console";
import { act } from "react";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";


export const fetchBlogs=createAsyncThunk("blog/fetchBlogs", async()=>{
    const response= await axios.get<{success: boolean; data:Blog[]}>(`${API_BASE_URL}/blogs`);
    return response.data.data;
});

type BlogState={
    blogs : Blog[] | null;
    loading: boolean;
    error: string | null;
}

const initialState:BlogState={
    blogs:null,
    loading:false,
    error:null,

}

const blogSlice=createSlice({
    name:"blog",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchBlogs.pending, (state)=>{
            state.loading=true;
            state.error=null;
        })
        .addCase(fetchBlogs.fulfilled, (state, action)=>{
            state.loading=false;
            state.blogs=action.payload;
        })
        .addCase(fetchBlogs.rejected, (state,action)=>{
            state.loading=false;
            state.error = action.error.message || "Failed to fetch blogs";
        });
    }
});

export default blogSlice.reducer;
