import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SearchTicket from "../components/Ticket/SearchTicket";
import "../components/Ticket/SearchTicket.css";


function BuyTicket(){
    




    return(<div className="ticket-main">
        <Navbar/>
        <h3>Buy Ticket</h3>
        <SearchTicket/> 
        {/* <ShowBus/>    */}
        <Footer/>
    </div>);
}

export default BuyTicket;