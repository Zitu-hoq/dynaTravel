import axios from "axios";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./SuccessStyle.css";

function Success(){

    const location = useLocation();
    const productName = location.state.productName;
    const navigate = useNavigate();
    function handleSubmit(e){
        e.preventDefault();   
        navigate("/");
    }
    const user = localStorage.getItem("user");
    const data = {
        user: user,
        productName: productName
    }


    const handleApi = async() =>{
        try {
            const url = "http://127.0.0.1:8080/api/orders";
            const {data:res} = await axios.post(url,data);
            if(res.status === 201){
                console.log(res.message);
            }else{
                console.log(res.message);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        handleApi();
    },[]);

    

    return(<>
        <div >
            <h1 className="successtext">Thank You! Your Payment was Successful.</h1>
            <form onSubmit={handleSubmit}><button className="successbtn" type="submit">Back to Home</button></form>
        </div>
    </>)
}

export default Success;