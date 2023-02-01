import { configureStore } from "@reduxjs/toolkit";
import userSlise from "../features/user/userSlise";
import todoSlice from "../features/Todo/todoSlice";




export const store = configureStore({
    reducer:{
        user: userSlise,
        todo:todoSlice,
    }
})