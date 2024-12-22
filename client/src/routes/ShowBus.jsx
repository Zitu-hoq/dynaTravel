import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import BusDetails from "../components/Ticket/BusDetails";
import "./ShowBusStyle.css";

function ShowBus(){

    const location = useLocation();
    const ticketDetail=location.state.ticketDetails;
    const [tickets,setTickets]=useState({});
    const[load,setLoad] = useState(false);

    const apiUrl = process.env.REACT_APP_API_URL;
    const handleTicketApi = async() =>{
        try {
            const url = apiUrl+"/api/tickets";
            const {data:res} = await axios.post(url,ticketDetail);
            setTickets(res.tickets);
            setLoad(true);
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(()=>{
        handleTicketApi();
    },[]);


    if(load){
        return(
            <>
            <Navbar/>
            <div className="bus-ticket">
                <table>
                    <thead>
                        <tr>
                            <th className="header1">Operator</th>
                            <th className="header">Dep. Time</th>
                            <th className="header">Arr. Time</th>
                            <th className="header">Seats Available</th>
                            <th className="header">Fare</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tickets.map((item,index)=>{
                            return(<BusDetails key={index}
                            name={item.name}
                            type={item.type}
                            startL={item.startL}
                            endL={item.endL}
                            startTime={item.startTime}
                            endTime={item.endTime}
                            seats={item.seats}
                            fee={item.fee}/>)
                        })}
                    </tbody>
                </table>
            </div>
            <Footer/>
            </>
        )
    }else{
        return(<><Navbar/><h3>No buses found</h3><Footer/></>);
    }
}

export default ShowBus;