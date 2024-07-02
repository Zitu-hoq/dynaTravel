import { useNavigate } from "react-router-dom";
import driverImg from "../assets/old.jpg";
import "./rider.css";

function Rider(props){


    let navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        navigate("/customer-details",{
            state:{
                "Name": props.Name,
                "price": props.price,
                "Experinece": props.Exp
            }
        });
        
    }




    return(<div className="rider">
        <div>
            <img src={driverImg} alt="Heavy driver"/>
        </div>
        <form onSubmit={handleSubmit}>
        <div className="rider-details">
            
            <h3>Name: {props.Name}</h3>
            <h4>price: ${props.price} usd/hr</h4>
            <h4>Experinece: {props.Exp} Years</h4>
        </div>
        <div>
            {!props.rbtn && <button type="submit">Hire</button>}
        </div>
        </form>
    </div>);
}
export default Rider;