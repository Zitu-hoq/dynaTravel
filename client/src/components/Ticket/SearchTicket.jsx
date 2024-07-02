import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchTicket.css";

function SearchTicket(){


    const [ticketDetail,setTicketDetail]=useState({
        to:"",
        from:"",
        date: ""
    });
    let navigate = useNavigate();

    function handleInput(event){
        let name = event.target.name;
        let value = event.target.value;
        setTicketDetail(preVal =>({...preVal,[name]: value}));
    }



    function handleSubmit(e){
      
      navigate("/show-buses",
        {state:{
          ticketDetails: ticketDetail
        }});
      
      e.preventDefault();
      
      setTicketDetail({
        to: "",
        from: "",
        date: ""
      });
    }


    return(<div className="searchDiv">
        <form onSubmit={handleSubmit} className="searchBox">
            <div className="top">
            <label>To: </label>
            <input type="text" name="to" required onChange={handleInput}/>
            <label>From :</label>
            <input name="from" required type="text" onChange={handleInput}/>
            </div>
            <div className="bottom">
            <label>Pick a Date: </label>
            <input type="date" name="date" required onChange={handleInput}/>
            <button type="submit">Submit</button>
            </div>
        </form>
    </div>);
}

export default SearchTicket;