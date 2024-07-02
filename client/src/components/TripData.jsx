import { Link, useNavigate } from "react-router-dom";
import "./TripStyle.css";

function TripData(props){

    const navigate = useNavigate();

    let title = props.title;
    let price = props.price;
    let details = props.details;
    let img = props.cardImg;

    function handleSubmit(e){
        e.preventDefault();
        navigate("/trip-details",{state:{title,price,details,img}});
    }


    return(<div class="card">
    <img class="card-img"
    src={img} alt="img"/>
    <div class="card-body">
        <h1 class="card-title fheader">{title}</h1>
        <p class="card-sub-title">Price : ${price}</p>
        <p class="card-info">{details.substring(0,100)}{!props.btn && <Link to="/all-trips" className="card-btn">See More</Link>}
        </p>
        {props.btn && <form onSubmit={handleSubmit}><button type="submit">Read More</button></form>}
    </div>
    </div>);
}

export default TripData;