import React from 'react'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos:[]
}

const todoSlice = () => {
  return (
    <div>
      
    </div>
  )
}

export default todoSlice = createSlice({
  name:todos,
  initialState,
  reducers:{
      addTodo:(state,action)=>{}
  }
})
export const {addTodo } = todoSlice.actions
