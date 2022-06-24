import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import { useDispatch } from 'react-redux'
import { login } from '../app/Actions'


  


const Form = () => {
  const [User, setUsernameOrEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMsg, seterrorMsg] = useState('')
  const [isChecked, setIsChecked] = useState(false)
  const [passwordError, setPasswordError] = useState('')

  const dispatch=useDispatch();

   let nav=useNavigate();

  const handleChange = event => {
    seterrorMsg('')
    setPasswordError('')
    let reValue = event.target.name
    let value = event.target.value
    if (reValue === 'username') setUsernameOrEmail(value)
    else if (reValue === 'password') setPassword(value)
  }

  const boxStatus = () => {
    !isChecked ? setIsChecked(true) : setIsChecked(false)
  }

  const handleSubmit = () => {

dispatch(login({name:User,Password:password}));
    // localstorage data set
  //    let data=[];
  //   const x = localStorage.getItem("email_Token");
  //   const newone=x !== null ? JSON.parse(x) : [];
  //   const n=[...newone,User];
  //   console.log("array data",data)
  //  localStorage.setItem("email_Token",JSON.stringify(n));
  //  nav('/success')

   //Save JWT token in Localstorage

   if(User && password){

    setTimeout(()=>{

      let token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkdvcGFsIHBhdGlkYXIiLCJpYXQiOjE1MTYyMzkwMjJ9.UgKhD6YSrU9AK3Mcnz_g5fRm7l1GzDd7xqof1I3aDV4';
      // const x = localStorage.getItem("email_Token");
      // const newone=x !== null ? JSON.parse(x) : [];
      // const n=[...newone,token]; 
      localStorage.setItem("email_Token",token);
       nav('/success')

    },1000)
   }
   else{
     setUsernameOrEmail("");


   }

  




    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let pas = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    if (!re.test(User)) {
      seterrorMsg('Email invalid')
      console.log('i am in email')
    }

    if (!pas.test(password)) {
      setPasswordError('Password invalid')
      console.log('i am in password')
    }

    if (isChecked === true) {
      console.log('Save in database')
    }

    // https://jsonplaceholder.typicode.com/albums/1/photos/?_limit=1

    // const userData={
    // Username:User,
    // Password:password
    // }
    // const setData=localStorage.setItem("User_Details",JSON.stringify(userData));
    // console.log(setData);
    // var temp = JSON.parse(localStorage.getItem('User_Details'))

    // var checkEmail = temp && temp.find(o => o.Email === usernameOrEmail);
    // var checkUsername = temp && temp.find(o => o.UserName === usernameOrEmail);
    // var checkPassword = temp && temp.find(o => o.Password === password);
    //   if (password.length === 0) {
    //     setPasswordError("Password field required")
    // }
    // else if (User.length === 0) {
    //     seterrorMsg("Email or Username field required")
    // }
  }

  return (
    <div className='login'>
      <input
        type='email'
        className='user'
        placeholder='Enter username/email'
        name='username'
        value={User}
        onChange={handleChange}
      />
      <div id='error'>{errorMsg} </div>
      <br />
      <input
        type='password'
        className='pswd'
        placeholder='Enter password'
        name='password'
        value={password}
        onChange={handleChange}
      />
      <br />
      {passwordError === '' ? <br /> : ''}
      <div id='error2'>{passwordError}</div>
      <input
        type='checkbox'
        id='topping'
        name='topping'
        value='Paneer'
        checked={isChecked}
        onChange={boxStatus}
      />
      remember me
      <br />
      <button type='submit' onClick={handleSubmit}>
        {' '}
        SIGN IN
      </button>
      <br />
      <br />
     
    </div>
  )
}

export default Form
