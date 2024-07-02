import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./CustomerStyle.css";
import Rider from "./rider";

function CustmerDetails(){

    const location = useLocation();
    const Name = location.state.Name;
    const Price = location.state.price;
    const exp = location.state.Experience;
    const [clicked, setClicked] = useState(false);
    const navigate = useNavigate();
    const name= "Rider Booking";
    const price = 5;

    const [rbtn, setRbtn] = useState(false);

    const [value, setValue] = useState({
        name:"",
        date: "",
        time: "",
        email: "",
        phone:"",
        address:""
    });


    function handleSubmit(e){

        const formData = new FormData(e.currentTarget);
        e.preventDefault();
        setRbtn(true);
        for (let [key, value] of formData.entries()) {
            setValue(preValue => ({
                ...preValue,
                [key]: value
            }));
            
            
          }
        if(clicked){
            navigate("/payment", {state:{
                name, price
            }});
        }else{
            setClicked(!clicked);
        }
        
        
    }





    return(<>
    <Navbar/>
    <div className={!clicked? "customerDetails" : "sCustomerDetails"}>
        <div className={!clicked? "selectedRider" : "sRider"}>
        <h2 className="centered">Rider Details:</h2>
            <Rider
                Name={Name}
                price={Price}
                Exp={exp}
                rbtn={rbtn}
            />
        </div>
        <div className={!clicked? "customer": "sCustomer"}>
        <h2>Your Details:</h2>
            <form onSubmit={handleSubmit}>
                <div className={!clicked? "customer-details" : "sCustomer-details"}>
                <label>Full Name: <span>{value.name}</span></label>
                <input type="text" name="name" placeholder="Jhon Makkerth" autoComplete="off" required/><br/>
                <label>Mail address:<span>{value.email}</span></label>
                <input type="email" name="email" autoComplete="off" placeholder="123@gamil.com"/><br/>
                <label>Phone number: <span>{value.phone}</span></label>
                <input type="text" name="phone" placeholder="+88017......." autoComplete="off" required/><br/>
                <label>Address:<span>{value.address}</span></label>
                <input type="text" name="address" autoComplete="off" placeholder="1/3, Kaji Road, Jhiltuli, Faridpur" required/><br/>
                </div>
                <label className={clicked && "final"}>Hire rider From: </label>
                <input type="date" name="date" required/><input type="time" name="time" required/><br/>
                <div className={!clicked? "final" : "sfinal"}>
                    <h4>Our rider will arrive on {value.date} at {value.time}</h4>
                    <h4>Note: you have to pay $5 for booking, Thank You.</h4>
                </div>
                <button type="submit" className={clicked && "final"} >Submit</button>
                <button type="submit" className={!clicked && "final"}>Book Now</button>
            </form>
        </div>
    </div>
    <Footer/>
    </>);
}

export default CustmerDetails;