import AboutImg from "../assets/1.jpg";
import Aboutus from "../components/Aboutus";
import Footer from "../components/Footer";
import Hero from "../components/hero";
import Navbar from "../components/Navbar";
import ProjectMember from "../components/ProjectMember";

function About(){
    return(
        <>
        <Navbar/>
        <Hero
            cName="hero-mid"
            img={AboutImg}
            title="About Us"
        />
        <Aboutus/>
        <ProjectMember/>
         <Footer/>
        </>
    )
}

export default About;