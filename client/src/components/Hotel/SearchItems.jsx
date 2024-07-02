import { useNavigate } from "react-router-dom";
import "./searchItem.css";

const SearchItem = (props) => {

  const navigate = useNavigate();
    let name = "Hotel Booking"
    let price = props.price;

    function handleSubmit(e){
        e.preventDefault();
        navigate("/payment", {state:{
            name, price
        }});
    }




  return (
    <div className="searchItem">
      <img
        src={props.img}
        alt="Hotel"
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">{props.hName}</h1>
        <span className="siDistance">{props.dis}m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        {/* <button className="siCheckButton">See Details</button> */}
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Rating:</span>
          <button>{props.rating}</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">${props.price}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <form onSubmit={handleSubmit}><button type="submit" className="siCheckButton">Book Now</button></form>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;