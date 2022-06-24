import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
// import {AddNewTask} from "./ActionCreator";

export const getAllTodos = createAsyncThunk(
    'todoApi/getAllTodos', 
    async (_, { rejectWithValue, dispatch, getState }) => {

  try {
    let api_url = "https://jsonplaceholder.typicode.com/todos";
    const res = await axios.get(api_url)
    //  console.log(res.data)
    return res.data
    
  } catch (err) {
    return rejectWithValue(err);
  }
});




export const addNewTask = createAsyncThunk( 'todoApi/addNewTask',async ( newData,{ rejectWithValue, dispatch, getState }) => {
  try{
    console.log("ADD NEW Task", newData)

    const User={
      title:newData.title,
      completed: newData.completed
    }

    // return axios.post(`https://jsonplaceholder.typicode.com/todos`,User)
    //   .then(res => { 
    //     console.log(res);
    //     console.log(res.data);
    //     return res;
    //   })

      const res = await axios.post(`https://jsonplaceholder.typicode.com/todos`,User);
      return res.data;
      

    // try {
    //   let api_url = "https://jsonplaceholder.typicode.com/todos";
    //   const res = await axios.get(api_url)
    //   return res.data
    // } catch (err) {
    //   return rejectWithValue(err);
    // }
  }catch(err){
    return rejectWithValue(err);
  }
});




// initial state
const initialState = {
  todoList: [],
  loading: false,
  error: '',
};


//Reducer

const todoSlice = createSlice({
  name: 'todoApi',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(getAllTodos.pending, state => {
        state.loading = true;
        state.error = '';
      })
      .addCase(getAllTodos.fulfilled, (state, action) => {
        state.todoList = action.payload;
        state.loading = false;
        state.error = '';
      })
      .addCase(getAllTodos.rejected, state => {
        state.loading = false;
        state.error = "Something went wrong!!"
      })
      .addCase(addNewTask.fulfilled, (state, action) => {
        console.log("action payload",action)
        state.todoList = [...state.todoList, action.payload];
        state.loading = false;
        state.error = '';
       
      })
     
  },
});

export default todoSlice.reducer;