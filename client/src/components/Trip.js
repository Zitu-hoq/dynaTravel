
import cardImg3 from "../assets/martin3.jpg";
import cardImg2 from "../assets/nijhum3.jpg";
import cardImg1 from "../assets/sajek1.jpeg";
import TripData from "./TripData";
import "./TripStyle.css";

function Trip(){

    
    return(<div className="trip">
        <h1 className="centered">Upcoming Trips</h1>
        <p className="centered">You can discover unique destinations using Google Maps.</p>
        <div className="trip-card">
            <TripData
                cardImg={cardImg1}
                title='Sajek'
                price="70"
                details="Sajek valley is known for its natural environment and is surrounded by mountains, 
dense forest, and grassland hill tracks. Many small rivers flow through the 
mountains among which the Kachalong and the Machalong are notable. On the 
way to Sajek valley, one has to cross the Mayni range and the Mayni river.But in 
the Rainy, Autumn, and Late autumn, you will feel the white clouds very closely. 
So, it is considered as the best time to visit Sajek Valley."
            />
            <TripData
                cardImg={cardImg3}
                title="Cox’s Bazar"
                price="100"
                details="Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very 
long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach 
in the south. Aggameda Khyang monastery is home to bronze statues and 
centuries-old Buddhist manuscripts. South of town, the tropical rainforest of 
Himchari National Park has waterfalls and many birds."
            />
            <TripData
                cardImg={cardImg2}
                title="Nijhum Dwip"
                price="85"
                details="During winter, thousands of migratory birds flock in to island. The fishermen use the airy and sunny land as an ideal place for drying their catches from the sea. Sometimes many of them also construct straw huts on the island as seasonal residences."
            />
        </div>
    </div>);
}

export default Trip;