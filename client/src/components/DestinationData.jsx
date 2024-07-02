import "./DestinationStyle.css";

function DestinatinData(props){
    return(
        <div className={props.cName}>
                <div className="des-text">
                    <h2>{props.headings}</h2>
                    <p>{props.text}</p> 
                </div>
                <div className="image">
                    <img alt="Shajeek" src={props.img1} />
                    <img alt="Shajeek" src={props.img2} />
                </div>
            </div>
    )
}

export default DestinatinData;