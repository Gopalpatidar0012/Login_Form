import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { signout } from '../app/Actions'
import "./Header.css"

const Header = () => {
    const dispatch=useDispatch();
    
 const handleLogOut=()=>{
     dispatch(signout());
 }
  return (
    <div>
<Button
     className="Headerlogout"
    onClick={()=>handleLogOut()}
    style={{background:"red"}}
    name
> Logout</Button>
    </div>
  )
}

export default Header