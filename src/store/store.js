import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/user/userSlice";
import todoSlice from "../features/Todo/todoSlice";
import postSlice from "../features/posts/postSlice";




export const store = configureStore({
    reducer:{
        user: userSlice,
        todo:todoSlice,
        post:postSlice
    }
})