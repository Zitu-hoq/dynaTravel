import Footer from "../components/Footer";
import List from "../components/Hotel/List";
import Navbar from "../components/Navbar";
import "./HotelStyle.css";

function HotelList(){
    return(
        <>
        <Navbar/>
        <List />
         <Footer/>
        </>
    )
}

export default HotelList;