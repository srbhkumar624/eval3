import React from "react";
import {useDispatch,useSelector} from "react-redux"
import{useNavigate,Link}from "react-router-dom"
import { logout } from "../../redux/auth/auth.actions";

const Navbar = () => {
  const isAuthenticated=useSelector((state)=>state.auth.data.isAuthenticated)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleLogin=()=>{
    if(isAuthenticated){
      dispatch(logout());
      navigate("/login");
    }
    else{
      navigate("/login")
    }
  }
  return (
    <div data-cy="navbar">
      <div>
        {/* TODO: Use Link instead of anchor tag. */}
        <Link data-cy="navbar-home-link" to="/"></Link>
      </div>
      <div>
        <div data-cy="navbar-cart-items-count">Cart:0</div>
        <button data-cy="navbar-login-logout-button" onClick={handleLogin}>{isAuthenticated?"Logout":"Login"}</button>
      </div>
    </div>
  );
};

export default Navbar;
