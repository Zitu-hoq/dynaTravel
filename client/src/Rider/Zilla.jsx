import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ZillaStyle.css";


 function Zilla() {


  const [zilla,setZilla]=useState('');
  let history = useNavigate();

    function handleSubmit(e){
      
      history("/RiderSelection",
        {state:{
          zilla: zilla
        }})
      
      e.preventDefault();
      
      setZilla("");
    }



    return (
      <div className="zilla">
        <form onSubmit={handleSubmit}>
            <label>Journey Start From: </label>
        <input type="text" onChange={(event)=>{
          setZilla(event.target.value);
        }} placeholder="your District" required/>
        <button type="submit" >Submit</button>
        </form>
      </div>
    )
  }

export default Zilla