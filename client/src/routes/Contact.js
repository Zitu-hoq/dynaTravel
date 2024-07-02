import ContactImg from "../assets/2.jpg";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Hero from "../components/hero";
import Navbar from "../components/Navbar";

function Contact(){
    return(
        <>
        <Navbar/>
        <Hero
            cName="hero-mid"
            img={ContactImg}
            title="Contact"
        />
        <ContactForm/>
        <Footer/>
        </>
    )
}

export default Contact;