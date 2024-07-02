import { useLocation, useNavigate } from "react-router-dom";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./TripDetaisStyle.css";


function TripDetails(){


    const location = useLocation();

    

    let Title = location.state.title;
    let Price = location.state.price;
    let eDetails = location.state.details;
    let img = location.state.img;



    const navigate = useNavigate();
    function handleSubmit(e){
        e.preventDefault();
        navigate("/payment",{state:{name:Title,price: Price}});
    }


    return(
        <>
        <Navbar/>
        <div className="TripDiv">
            <img className="TripDimg" src={img} alt="Sajek"/>
            <h3>Title: {Title}</h3>
            <h2 className="tripP">Event Fee: ${Price}</h2>
            <p>Event Details: {eDetails}</p>
            <form onSubmit={handleSubmit}><button type="submit">Book Now</button></form>
        </div>
         <Footer/>
        </>
    )
}

export default TripDetails;