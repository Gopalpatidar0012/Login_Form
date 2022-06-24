import { createSlice, nanoid } from '@reduxjs/toolkit'
import jwtToken from "jwt-encode"

const initialState={
  singedIn:false,
  rememberMe:false,
  email:''
}
const todosSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    signIn:(state, action) => {
        state.singedIn= true
        state.email=action.payload
        const auth={
          mail:action.payload
        }

        const JWTtoken=jwtToken(auth,"secret");
        if(state.rememberMe){
          localStorage.setItem("loginMail",action.payload);
        }
        else{
          localStorage.removeItem("loginMail");
        }
        localStorage.setItem("login_as",JWTtoken);
      },
      signout:(state, action) => {
        state.singedIn=false;
        localStorage.removeItem("login_as");
      },
      rememberMe:(state)=>{
        state.rememberMe=!state.rememberMe;
      }
    },
  });
export const {signIn,signout,rememberMe}=todosSlice.actions;
const selectuser=(state)=>state.user.user;
export default todosSlice.reducer;