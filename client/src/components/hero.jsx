import "./heroStyles.css";

function Hero(props){
    return(<>
        <div className={props.cName}>
            <img alt="cover" src={props.img} />
            <div className="hero-text">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
            </div>
        </div>
    </>)
}

function HeroVideo(props){
    return(<>
        <div className={props.cName}>
            <video autoPlay muted loop className="videoCover">
                <source src={props.video} type="video/mp4"/>
            </video>
            <div className="hero-text">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <a href={props.url} className={props.btnClass}>
                    {props.buttonText}
                </a>
            </div>
        </div>
    </>)
}

export { HeroVideo };
export default Hero;