import { useNavigate } from "react-router-dom";
import "./SuccessStyle.css";

function Failure(){
    const navigate = useNavigate();
    function handleSubmit(e){
        e.preventDefault();
        navigate("/");
    }


    return(<>
        <div >
            <h1 className="falitext">uh oh! Your Payment is Unsuccessful.</h1>
            <form onSubmit={handleSubmit}><button className="successbtn" type="submit">Back to Home</button></form>
        </div>
    </>)
}

export default Failure;