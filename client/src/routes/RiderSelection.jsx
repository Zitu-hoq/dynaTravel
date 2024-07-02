import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Driver } from "../database/rider";
import CreateRider from "../Rider/rider";
import Rider from "./Rider";

function RiderSelection(){


    const location = useLocation();
    const zilla = location.state.zilla;
    let iRider = false;
    if(zilla == "dhaka" || zilla == "Dhaka"){
        iRider = true;
    }

    if(location.state.zilla){
        return(<>
        <Navbar/>
        <div className="riderSelection">
       
        {Driver.map((item, index) =>{
                
                if(!iRider){
                    if(index < 3){
                        return(
                <CreateRider key={index}
                    Name={item.Name}
                    price={item.price}
                    Exp={item.Experience}
                  />
                )
                    }
                    else{
                      
                    }
                }else{
                    if(index > 2){
                        return(
                <CreateRider key={index}
                    Name={item.Name}
                    price={item.price}
                    Exp={item.Experience}
                  />
                )
                    }
                    else{
                        
                    }
                }
                
                
                
            })}
        </div>
        <Footer/>
        </>
        ); 
    }else{
        return(<Rider/>);
    }

    

    
}

export default RiderSelection;