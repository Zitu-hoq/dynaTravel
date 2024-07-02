import Footer from "../components/Footer";
import SearchHotel from "../components/Hotel/SearchHotel";
import Navbar from "../components/Navbar";
import "./HotelStyle.css";

function HotelSearch(){
    return(
        <>
        <Navbar/>
        <SearchHotel 
            className = "searchHotel"
        />
        {/* <List /> */}
         <Footer/>
        </>
    )
}

export default HotelSearch;