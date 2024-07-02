import { format } from "date-fns";
import { useLocation } from "react-router-dom";
import h from "../../assets/Bandarban/a.jpeg";
import i from "../../assets/Bandarban/b.jpeg";
import j from "../../assets/Bandarban/d.jpeg";
import a from "../../assets/Cox/a.jpeg";
import b from "../../assets/Cox/b.jpeg";
import c from "../../assets/Cox/c.jpeg";
import d from "../../assets/Cox/d.jpeg";
import e from "../../assets/Sajek/a.jpeg";
import f from "../../assets/Sajek/c.jpeg";
import g from "../../assets/Sajek/d.jpeg";
import { Hotel } from "../../database/hotel";
import "./List.css";
import SearchItem from "./SearchItems";




const List = () => {
  const location = useLocation();
  const destination = location.state.destination;
  const date = location.state.date;
  const options= location.state.options;
  const img = [a,b,c,d,e,f,g,h,i,j];

  return (
    <div>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search Results:</h1>
            <div className="lsItem">
              <h5>Destination: </h5>
              <h4>{destination}</h4>
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span >{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
            </div>
            <div className="lsItem">
              <h5>Options</h5>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <h4>{options.adult}</h4>
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <h4>{options.room}</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="listResult">
            {Hotel.map((item,index) =>{
              if(destination == "sajek"){
                if(3<index && index<7){
                  return(<SearchItem 
                    key={index}
                    img = {img[index]}
                    hName={item.hName}
                    dis={item.dis}
                    rating={item.rating}
                    price={item.price}
                  />)
                }
              }else if(destination == "bandarban"){
                if(index>6){
                  return(<SearchItem
                    key={index} 
                    img = {img[index]}
                    hName={item.hName}
                    dis={item.dis}
                    rating={item.rating}
                    price={item.price}
                  />)
                }
              }else{
                if(index<4){
                  return(<SearchItem 
                    key={index}
                    img = {img[index]}
                    hName={item.hName}
                    dis={item.dis}
                    rating={item.rating}
                    price={item.price}
                  />)
                }
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;