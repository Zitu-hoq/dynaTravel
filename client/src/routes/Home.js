import CoverVid from "../assets/cover2.mp4";
import Destination from "../components/Destination";
import Footer from "../components/Footer";
import { HeroVideo } from "../components/hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";
import "../style.css";




function Home(){

    



    return(
        <>
        <Navbar/>
        <HeroVideo 
            cName="video-cover"
            title="Travel To Explore"
            url="/service"
            video={CoverVid}
            text="Choose Your Favourite Destination."
            buttonText="Travel Plan"
            btnClass="show"
        />
        <Destination/>
        <Trip />
        <Footer/>
        </>
    )
}

export default Home;