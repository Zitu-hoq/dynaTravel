import ServiceImg from "../assets/12.jpg";
import Footer from "../components/Footer";
import Hero from "../components/hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";
import "./ServiceStyle.css";

function Service(){
    return(
        <>
        <Navbar/>
        <Hero
            cName="hero-mid"
            img={ServiceImg}
            title="Services"
        />
        <Trip/>
        <div class="riderSection">
            <h3>Hire A Rider from Us</h3>
            <p>We are providing professional driver. We already provided more than 100 driver to out customer. Our drivers are highly professional and we providing our riding service, since we stablished. Our customers are happy to recive our service.</p>
            <a href="./rider"><button>Hire A Rider</button></a>
        </div>
        <div class="ticketSection">
            <h3>Book Your Ticket from Us</h3>
            <p>We are providing professional driver. We already provided more than 100 driver to out customer. Our drivers are highly professional and we providing our riding service, since we stablished. Our customers are happy to recive our service.</p>
            <a href="./buy-ticket"><button>Buy Ticket</button></a>
        </div>
        <div class="hotelSection">
            <h3>Book Your Hotel from Us</h3>
            <p>We are providing professional driver. We already provided more than 100 driver to out customer. Our drivers are highly professional and we providing our riding service, since we stablished. Our customers are happy to recive our service.</p>
            <a href="./hotelsearch"><button>Book Hotel</button></a>
        </div>
        <Footer/>
        </>
    )
}

export default Service;