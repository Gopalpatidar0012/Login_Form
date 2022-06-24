import React from 'react'
import  {useDispatch}  from 'react-redux'
import { logout } from '../app/Actions';

const Logout = () => {
    const dispatch=useDispatch();
   
    const handleMe=(e)=>{
        dispatch(logout())
        // localStorage.setItem("email_Token",null);
    }
  return (
    <div>
        <h1>welcome</h1>
        <button onClick={(e)=>handleMe(e)}>logouts</button>
    </div>
  )
}

export default Logout