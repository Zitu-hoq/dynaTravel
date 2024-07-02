import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./profileStyle.css";


function Profile(){

    const user= localStorage.getItem("user");
    const data={
        user:user
    }
    const [orders,setOrders] = useState({});
    const [load,setLoad] = useState(false);

    const handlelogout =() =>{
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    }

    async function handleApi(){
        try {
            const url = "http://127.0.0.1:8080/api/orders/user";
            const {data:res} = await axios.post(url,data);
            setOrders(res.orders);
            console.log(orders);
            setLoad(true);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        handleApi();
    },[]);




    return(
        <>
        <Navbar/>
        <div className="pDiv">
            <div className="uDiv">
                <h4>My Email: {user}</h4>
            </div>
            <div className="oDiv">
                <h3>My Orders</h3>
                
                    {load && <ul >
                        {orders.map((item,index)=>{
                            return (<li className="unorder">{item.productName}</li>)
                        })}
                    </ul>}
                
            </div>
            <Link to="/"><button onClick={handlelogout}>Log out</button></Link>
        </div>
        
         <Footer/>
        </>
    )
}

export default Profile;