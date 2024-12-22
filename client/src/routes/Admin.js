import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./adminStyle.css";

function Admin(){
    const apiUrl = process.env.REACT_APP_API_URL;
    const location = useLocation();
    const datax = location.state.adminData;
    const[data,setData] = useState(datax);
    const [tripData, setTripData]= useState({
        title:"",
        price:"",
        details:""
    });
    const [ticketData,setTicketData]=useState({
        name:"",
        type:"",
        startL:"",
        endL:"",
        startTime:"",
        endTime:"",
        seats:"",
        fee:""})
    function handleChange({currentTarget: input}){
        setTripData({...tripData,[input.name]:input.value});
    }

    function handleTicketChange({currentTarget: input}){
        setTicketData({...ticketData,[input.name]:input.value});
    }


    const handleTicketSubmit = async(e)=>{
        e.preventDefault();
        try {
            const url = apiUrl+"/api/admin/ticket";
            const {data:res} = await axios.post(url,ticketData);
            console.log(res.message);
            setTicketData({
                name:"",
                type:"",
                startL:"",
                endL:"",
                startTime:"",
                endTime:"",
                seats:"",
                fee:""});
        } catch (error) {
            console.log(error);
            }
    }


    const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
            const url = apiUrl+"/api/trips";
            const {data:res} = await axios.post(url,tripData);
            console.log(res.message);
            setTripData({
                title:"",
                price:"",
                details:""
            });
        } catch (error) {
            console.log(error);
            }
    }

    async function handleClick(e){
        e.preventDefault();
        let eData = {
            user: e.target.user.value,
            productName: e.target.productName.value
        }
        try {
            const url = apiUrl+"/api/orders/admin";
            const {data:res} = await axios.post(url,eData);
            setData(res.Orders);
        } catch (error) {
            console.log(error);
        }
    }




    return(<div className="mAdmindiv">
        <h1 >admin page</h1>
        <h3 className="mHeadings">Orders Table</h3>
        <table>
            <thead>
                <th>
                    Users Email
                </th>
                <th>
                    Order
                </th>
                <th>
                    completed?
                </th>
            </thead>
            <tbody>
                {data.map((item,index)=>{
                    return(
                        <tr key={index}>
                            <td>{item.user}</td>
                            <td>{item.productName}</td>
                            <td><form onSubmit={handleClick}>
                            <input type="hidden" name="user" value={item.user}/><input type="hidden" name="productName" value={item.productName}/>
                            <button type="submit">Yes</button>
                            </form></td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
        <h3 className="mHeadings">Upload Trip</h3>
        <form onSubmit={handleSubmit}><input className="mInputs" name="title" value={tripData.title} placeholder="Trip Title" onChange={handleChange}/>
        <input className="mInputs" placeholder="Price" name="price" value={tripData.price} onChange={handleChange}/>
        <input className="mInputs" placeholder="Details" name="details" value={tripData.details} onChange={handleChange}/><button type="submit">post</button></form>
        <h3 className="mHeadings">Upload Bus Ticket</h3>
        <form onSubmit={handleTicketSubmit}>
        <input className="mInputs" name="name" value={ticketData.name} onChange={handleTicketChange} placeholder="Operator Name"/>
        <input className="mInputs" name="type" value={ticketData.type} onChange={handleTicketChange} placeholder="Bus type"/>
        <input className="mInputs" name="startL" value={ticketData.startL} onChange={handleTicketChange} placeholder="From"/>
        <input className="mInputs" name="endL" value={ticketData.endL} onChange={handleTicketChange} placeholder="To"/>
        <input className="mInputs" name="startTime" value={ticketData.startTime} onChange={handleTicketChange} placeholder="Dep. time"/>
        <input className="mInputs" name="endTime" value={ticketData.endTime} onChange={handleTicketChange} placeholder="Arr. time"/>
        <input className="mInputs" name="seats" value={ticketData.seats} onChange={handleTicketChange} placeholder="Seats"/>
        <input className="mInputs" name="fee" value={ticketData.fee} onChange={handleTicketChange} placeholder="Fee"/>
        <button type="submit">Post</button>
        </form>
    </div>)
}
export default Admin;