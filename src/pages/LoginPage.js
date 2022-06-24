import React, { useEffect } from 'react'
import { useState } from 'react';
import InputText from "./InputText"
import CheckBox from "./CheckBox"
import Button from "./Bottons"
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { signIn,rememberMe } from '../app/Actions';
import { useNavigate } from 'react-router-dom';
import "./inputStyle.css";
// import { rememberMe, signIn } from '../../redux/slices/authSlice';






const LoginPage = () => {
    const [inputEmail, setInputEmail] = useState('');
  const [inputPass, setInputPass] = useState('');
  const [wrongCredentials, updateWrongCredentials] = useState(false);
  const [invalidMail, updateInvalidMail] = useState(false);
  const [invalidPassword, updateinvalidPassword] = useState(false);
  const isLoggedIn=useSelector((state)=>state.rootReducer.todos.singedIn);
//   console.log("isLoggedIn part",isLoggedIn)
const navigate= useNavigate();
  const dispatch=useDispatch();
  const rememberMeValue = useSelector(
    (state) => state.rootReducer.todos.rememberMe,
  );
//   console.log("remember part",rememberMeValue)

  const validateEmail=(email)=>{
      String(email).toLowerCase().match( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,);
  }

  const validatePass=(pass)=>{
String(pass).toLowerCase().match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,)
  }


const onChangeEmail=(value)=>{
   setInputEmail(value);
   if(validateEmail(value)===null){
       updateInvalidMail(true)
   }
   else{
       updateInvalidMail(false);
   }
}

const onChangePass=(value)=>{
   setInputPass(value);

   if(validatePass(value)===null || inputPass===''){
       updateinvalidPassword(true);
   }
   else{
       updateinvalidPassword(false)
   }
}

const onChangeOfRememberMe=()=>{
    dispatch(rememberMe());
}

const handleEntrKey=(e)=>{
    if(e.key==="Enter"){
        signInHandle();
    }
};

const signInHandle=()=>{
 if(inputPass==="Password!1" &&
  inputEmail !== '' && 
  invalidMail === false){
        dispatch(signIn(inputEmail))
    }

else{
    updateWrongCredentials(true);
}

}

useEffect(()=>{
const token=localStorage.getItem("loginMail");
console.log("this is token",token);
if(token!==null){
    setInputEmail(token);
}
const loginAS=localStorage.getItem("login_as");
console.log("this is login as",loginAS);
if(loginAS!==null){
    dispatch(signIn(inputEmail))
}
},[dispatch])



useEffect(()=>{
if(isLoggedIn){
   
    navigate('/home');
}
},[isLoggedIn,navigate])


  return (
    <div className="bodyDiv">
    <div className="mainHolderDiv">
      {/* <img src={CodebinLogo} alt="" className="logo" /> */}
      <InputText
        placeholder="Email"
        icon={<FontAwesomeIcon icon={faEnvelope} className="loginPageIcon" />}
        value={inputEmail}
        onChangeFunc={onChangeEmail}
         onKeyPressFunc={handleEntrKey}
        autoFocus
      />
      {invalidMail ? (
        <div className="errMsgBelowInput ">
          <p style={{ margin: 0 }}>Invalid Email</p>
        </div>
      ) : (
        <div className="errMsgBelowInput" />
      )}
      <InputText
        placeholder="Password"
        icon={<FontAwesomeIcon icon={faLock} className="loginPageIcon" />}
        isPassword
        value={inputPass}
        onChangeFunc={onChangePass}
        onKeyPressFunc={handleEntrKey}
      />
      {invalidPassword ? (
        <div className="errMsgBelowInput">
          <p style={{ margin: 0 }}>
            Password must contain 8 characters, 1 uppercase, 1 lowercase and 1
            special character
          </p>
        </div>
      ) : (
        <div className="errMsgBelowInput" />
      )}
      <div className="RememberMeHolder">
        <CheckBox
         checked={rememberMeValue}
          label="Remember Me"
          onChangeFunc={onChangeOfRememberMe}
        />
      </div>
      <br />
      <Button
      
        onClickHandler={signInHandle}
        text="Sign in"
        // ButtonColor={signInBtnEnabled ? '#e5e5e5' : '#EA3946'}
        // TextColor={signInBtnEnabled ? '#000' : '#fff'}
      />

      {wrongCredentials ? (
        <div className="warningHolder ">
          <p className="wrongCreds">Wrong credentials</p>
          <p className="invalidUser">Invalid username or password</p>
        </div>
      ) : null}
    </div>
  </div>
  )
}

export default LoginPage