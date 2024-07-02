import { useNavigate } from "react-router-dom";
import "./BusDetailsStyle.css";

function BusDetails(props){

    const navigate = useNavigate();
    let name = "Bus Ticket"
    let price = props.fee;

    function handleSubmit(e){
        e.preventDefault();
        navigate("/payment", {state:{
            name, price
        }});
    }




    return(
        <tr>
            <td className="col1">
                <ul>
                    <li className="operator">{props.name}</li>
                    <li className="bustype">{props.type}</li>
                    <li><b>Starting Point:</b>{props.startL}</li>
                    <li><b>Ending Point:</b>{props.endL}</li>
                </ul>
            </td>
            <td className="col2">
                {props.startTime}
            </td>
            <td className="col3">
                {props.endTime}
            </td>
            <td className="col4">
                {props.seats}
            </td>
            <td className="col5">
                <ul><li>$ {props.fee}</li></ul>
                <ul><li><form onSubmit={handleSubmit}><button type="submit">Book</button></form></li></ul>
            </td>
        </tr>
    );
}

export default BusDetails;