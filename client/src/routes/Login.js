import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Facebook from "../assets/facebook.png";
import Github from "../assets/github.png";
import Google from "../assets/google.png";
import Footer from "../components/Footer";
import "../components/LoginStyle.css";
import Navbar from "../components/Navbar";



function Login(){

    const [error, setError] = useState('');
    const[data, setData] = useState({
        email:"",
        password:""
    });
    const location = useLocation();
    let page = location.state?.page ?? true;
    let navigate = useNavigate();


    const handleChange = ({currentTarget:input}) =>{
        setData({...data,[input.name]:input.value});
    }

    const apiUrl = process.env.REACT_APP_API_URL;

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
            const url = apiUrl+"/api/auth";
            const {data:res} = await axios.post(url,data);
            localStorage.setItem("token",res.data);
            localStorage.setItem("user",data.email);
            if(!page){
              console.log(page);
              window.location = "/"
            }else{
              console.log(page);
              navigate("/payment", {state:{
                name: location.state.name, price: location.state.price
            }});
            }
            
        } catch (error) {
            if(error.response && error.response.status >= 400 && error.response.status<=500){
                setError(error.response.data.message);
            }
        }
    }

    const google = () => {
        // window.open("http://localhost:5000/auth/google", "_self");
      };
    
      const github = () => {
        // window.open("http://localhost:5000/auth/github", "_self");
      };
    
      const facebook = () => {
        // window.open("http://localhost:5000/auth/facebook", "_self");
      };


    return(<>
        <Navbar/>
<div className="login">
      <h1 className="loginTitle centered">Log In or <br/>Open an account?<a href="/signup"><button>Sign Up</button></a></h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google" onClick={google}>
            <img src={Google} alt="" className="icon" />
            Google
          </div>
          <div className="loginButton facebook" onClick={facebook}>
            <img src={Facebook} alt="" className="icon" />
            Facebook
          </div>
          <div className="loginButton github" onClick={github}>
            <img src={Github} alt="" className="icon" />
            Github
          </div>
        </div>
        <div className="center" onSubmit={handleSubmit}>
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <form className="right" onSubmit={handleSubmit}>
          <input type="text" placeholder="email" name="email" onChange={handleChange} value={data.email} required />
          <input type="password" placeholder="Password" name="password" onChange={handleChange} value={data.password} required />
          {error && <div className="errorLogin">{error}</div> }
          <button className="submit" type="submit">Log In</button>
        </form>
        
      </div>
    
    </div>

        <Footer/>
    </> 
    );
}

export default Login;

