import axios from "axios";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import busticket from "../assets/busticket.jpg";
import riderimg from "../assets/car.png";
import hotelimg from "../assets/hotel.jpg";
import tripimg from "../assets/trip.png";
import "./PaymentStyle.css";

function Payment(){

    let loggedin = localStorage.getItem("token");
    let navigate = useNavigate();
    
    const KEY = "pk_test_51MotfOJtaZiPALBgpSDI32ch8WSSCOevkGiSPxaqpnaqiY5KRKNcGj6xTKRcVMUS4vYaqLbUQ8yeKPiwbeXsEL1A001MaJwtQ5";

    const location = useLocation();
    const productName = location.state.name ;
    const productPrice = Number(location.state.price);
    
    const stripePrice = productPrice * 100;

    function auth(){
        if(!loggedin){
            navigate("/login", {state:{
                page: true,
                name: productName,
                price: productPrice
            }});
        }
    }

    useEffect(()=>{
        auth();
    },[]);
    
    
    
    const pictures = {
        ticket: busticket,
        hotel: hotelimg,
        trip: tripimg,
        rider: riderimg
    }
    let picture;

    if(productName == "Bus Ticket"){
        picture = pictures.ticket;
    }else if(productName == "Hotel Booking"){
        picture = pictures.hotel;
    }else if(productName == "Rider Booking"){
        picture = pictures.rider;
    }else{
        picture = pictures.trip;
    }

   
    

    

    const handlePayment = async token =>{
        try {
            const url = "http://127.0.0.1:8080/api/payment";
            const data ={
                name: productName,
                amount: stripePrice,
                token,
            }
            const {data:res} = await axios.post(url,data);
            if(res.status === 200){
                console.log("Your payment is successful");
                navigate("/success",{state:{
                    productName
                }});
            }
        } catch (error) {
            console.log(error);
            navigate("/failure");
        }
    }
    
    
    
    
    return(<div className="paymentDiv">
        <div className="paymentCard">
            <img className="paymentImg" src={picture} alt="busticket"/>
            <h3 className="paymentPrice">name: {productName}</h3>
            <h3 className="paymentPrice">price: ${productPrice}</h3>
            <div>
            <StripeCheckout
            stripeKey={KEY}
            label="Pay Now"
            billingAddress
            shippingAddress
            amount={stripePrice}
            description={`Your total is $${productPrice}`}
            token={handlePayment}
        />
            </div>
        </div>
        
    </div>);


};

export default Payment;