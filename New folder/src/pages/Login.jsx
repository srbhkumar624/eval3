import React,{useState} from "react";
import {useDispatch} from "react-redux"
import { login } from "../redux/auth/auth.actions";

const Login = () => {
  const [loginC,setLogin]=useState({
    email:"eve.holt@reqres.in",
    password:"cityslicka"
  });
  const dispatch=useDispatch()
  const handleChange=(e)=>{
    const{name,value}=e.target;
    setLogin({
      ...loginC,[name]:value,
    })
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(loginC.email&&loginC.password){
      dispatch(login(loginC))
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input data-cy="login-email" 
        name="email"
        type="email"
        placeholder="enter email"
        value={loginC.email}
        onChange={handleChange}
        />
        <input data-cy="login-password" 
        name="password"
        type="password"
        placeholder="enater password"
        value={loginC.password}
        onChange={handleChange}/>
        <button data-cy="login-submit" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
