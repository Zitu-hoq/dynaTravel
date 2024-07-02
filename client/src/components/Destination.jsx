import Mountain3 from "../assets/martin1.jpg";
import Mountain4 from "../assets/martin2.jpg";
import Mountain5 from "../assets/nijhum1.png";
import Mountain6 from "../assets/nijhum2.jpg";
import Mountain2 from "../assets/sajek2.jpg";
import Mountain1 from "../assets/sajek3.jpg";
import DestinatinData from './DestinationData';



const Destination = () => {
    return(
        <div className="destination">
            <h1 className="centered">Popular Destinations</h1>
            <p className="centered">Tours give you the opportunity to see a lot, within a time frame.</p>
            <DestinatinData
            cName="description"
            headings="Sajek Valley, Khagrachari"
            text="Sajek valley is known for its natural environment and is surrounded by mountains, dense forest, and grassland hill tracks. Many small rivers flow through the mountains among which the Kachalong and the Machalong are notable. On the way to Sajek valley, one has to cross the Mayni range and the Mayni river. The road to Sajek has high peaks and falls"
            img1={Mountain1}
            img2={Mountain2} />
            <DestinatinData cName="description-reverse"
            headings="St. Martin, Cox's Bazar"
            text="St. Martin's Island is a small island in the northeastern part of the Bay of Bengal, about 9 km south of the tip of the Cox's Bazar-Teknaf peninsula, and forming the southernmost part of Bangladesh. There is a small adjoining island that is separated at high tide, called Chera Dwip. It is about 8 kilometres west of the northwest coast of Myanmar, at the mouth of the Naf River."
            img1={Mountain3}
            img2={Mountain4} />
            <DestinatinData
            cName="description"
            headings="Nijhum Dwip, Noakhali"
            text="A cluster of islands emerged in the early 1950s as an alluvium in the shallow estuary of the Bay of Bengal on the south of Noakhali.During winter, thousands of migratory birds flock in to island. The fishermen use the airy and sunny land as an ideal place for drying their catches from the sea. Sometimes many of them also construct straw huts on the island as seasonal residences."
            img1={Mountain5}
            img2={Mountain6} />
        
        </div>
    );
}

export default Destination;