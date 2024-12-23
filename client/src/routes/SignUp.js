import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Facebook from "../assets/facebook.png";
import Github from "../assets/github.png";
import Google from "../assets/google.png";
import Footer from "../components/Footer";
import "../components/LoginStyle.css";
import Navbar from "../components/Navbar";



function SignUp(){

    const [error, setError] = useState('');
    const[data, setData] = useState({
        userName:"",
        email:"",
        password:""
    });

    const navigate = useNavigate();
    const handleChange = ({currentTarget:input}) =>{
        setData({...data,[input.name]:input.value});
    }

    const apiUrl = process.env.REACT_APP_API_URL;

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
            const url = apiUrl+"/api/users";
            const {data:res} = await axios.post(url,data);
            navigate("/");
            console.log(res.message);
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
      <h1 className="loginTitle centered">Sign Up or <br/>Already have an account?<button onClick={()=>{navigate("/login", {state:{page: false}})}}>Log In</button></h1>
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
          <input type="text" name="userName" placeholder="Username" onChange={handleChange} value={data.userName} required />
          <input type="text" placeholder="email" name="email" onChange={handleChange} value={data.email} required />
          <input type="password" placeholder="Password" name="password" onChange={handleChange} value={data.password} required />
          {error && <div className="errorLogin">{error}</div> }
          <button className="submit" type="submit">Sign Up</button>
        </form>
        
      </div>
    
    </div>

        <Footer/>
    </> 
    );
}

export default SignUp;

