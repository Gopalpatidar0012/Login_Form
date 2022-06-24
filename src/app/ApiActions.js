import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {URLPopularVideos} from "../utils/index"
import axios from 'axios';
// import {AddNewTask} from "./ActionCreator";

export const fetchVideos = createAsyncThunk(
    'todoApi/fetchVideos', 
    async (_, { rejectWithValue, dispatch, getState }) => {

  try {
    let api_url = URLPopularVideos;
    const res = await axios.get(api_url)
     console.log(res.data)
    return res.data
    
  } catch (err) {
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

const videoSlice = createSlice({
  name: 'todoApi',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchVideos.pending, state => {
        state.loading = true;
        state.error = '';
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        // console.log("todo reducer", action.payload)
        state.todoList = action.payload;
        state.loading = false;
        state.error = '';
      })
      .addCase(fetchVideos.rejected, state => {
        state.loading = false;
        state.error = "Something went wrong!!"
      })
      
  },
});

export default videoSlice.reducer;