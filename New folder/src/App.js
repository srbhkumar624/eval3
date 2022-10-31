import "./App.css";
import Login from "./pages/Login";
import{useEffect} from "react";
import{useSelector} from "react-redux";
import {useNavigate,useLocation,Routes,Route} from "react-router-dom"
import { Navbar } from "./components/Navbar";
import RequiredAuth from "./hoc/RequiredAuth";
import Home from "./pages/Home";

function App() {
  const navigate= useNavigate();
    const location =useLocation();
    // const dispatch=useDispatch();
    let from =location.state?.from?.pathname|| "/";
    const isAuthenticated=useSelector(
      (state) => state.auth.data.isAuthenticated);
    useEffect(()=>{
      if(isAuthenticated){
        NavigationPreloadManager(from,{replace:true});

      }
      else{
        NavigationPreloadManager("/login")
      }
    },[isAuthenticated,from,navigate])

  return <div className="App">
    <Navbar/>
    <Routes>
      <Route path="login" element={<Login/>}/>
      <Route path="" element={<RequiredAuth><Home/></RequiredAuth>}/>
    </Routes>

   
    </div>;
}

export default App;
