import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components/AdminStyle.css";


function AdminLogin(){

    const [data, setData] = useState({
        adminName:"",
        adminPassword:""
    });

    const navigate = useNavigate();

    const handleChange = ({currentTarget:input}) =>{
        setData({...data,[input.name]:input.value});
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
            const url = "http://127.0.0.1:8080/api/admin";
        const {data:res} = await axios.post(url,data);
        const adminData = res.orders;
        navigate("/admin",{state:{adminData}});
        
        } catch (error) {
            console.log("invalid");
        }
    }


    return(<>
        <div className="adminDiv">
            <form className="adminForm" onSubmit={handleSubmit}>
                <input className="adminInput" type="text" name="adminName" onChange={handleChange} value={data.adminName} required placeholder="user name"/>
                <input className="adminInput" type="password" name="adminPassword" onChange={handleChange} value={data.adminPassword} placeholder="password" required/>
                <button className="adminInput" type="submit">Log In</button>
            </form>
        </div>
    </>)
}

export default AdminLogin;