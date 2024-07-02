import './ContactStyle.css';

function ContactForm(){
    return(<div className="from-container">
        <h1 className='centered'>Send a message to us!</h1>
        <form>
            <input placeholder='First Name'/>
            <input placeholder='Last Name'/>
            <input type="email"placeholder='email'/>
            <textarea placeholder='Message' rows="4"/>
            <button>Send</button>
        </form>
    </div>);
}

export default ContactForm;