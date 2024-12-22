import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import cardImg5 from "../assets/martin1.jpg";
import cardImg4 from "../assets/martin2.jpg";
import cardImg3 from "../assets/martin3.jpg";
import cardImg2 from "../assets/nijhum3.jpg";
import cardImg1 from "../assets/sajek1.jpeg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TripData from "../components/TripData";
import "./TripDetaisStyle.css";


function TripDetails(){

    const apiUrl = process.env.REACT_APP_API_URL;
    const cardImg =[cardImg1,cardImg2,cardImg3,cardImg4,cardImg5];
    const [tripData, setTripData]= useState({});

    const [load, setLoad]= useState(false);
    const handleTripApi = async() =>{
        try {
            const url = apiUrl+"/api/trips";
            const {data:res} = await axios.get(url);
            setTripData(res.trips);
            setLoad(true);
            
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(()=>{
        handleTripApi();
    },[]);


    const navigate = useNavigate();
    function handleSubmit(e){
        e.preventDefault();
        navigate("");
    }

    if(load){
    return(
        <>
        <Navbar/>
        <div className="allTripDiv">
        {tripData.map((item,index)=>{
            return(
                <TripData key={index}
                cardImg={cardImg[index]}
                title={item.title}
                price = {item.price}
                details ={item.details}
                btn={true}/>
            );
        })}
        </div>
         <Footer/>
        </>
    )}
}

export default TripDetails;