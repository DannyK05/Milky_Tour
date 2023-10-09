import { Planets } from "../components/planet";
import { Fact } from "../components/fact";
import { Link } from "react-router-dom";
import { planet_jupiter } from "../assets";
import { red_spot } from "../assets";
import { jupiter_moons } from "../assets";
import { jovain_atmosphere } from "../assets";
const Jupiter = () => {

    return(
        <Planets>
        <section>
            <p>Our celestial journey brings us to the grandeur of Jupiter, the largest planet in our solar system. Brace yourselves for a spectacle of swirling storms and colossal beauty.</p>
            <div className="planet_profile">
                    <img src={planet_jupiter} alt="Jupiter" />
                    <h1 className="">Jupiter - The Giant Stormy Sphere </h1>
            </div>
            <Fact image={red_spot} content = "Feast your eyes on the Great Red Spot, a storm that has been raging for centuries. It's like the solar system's eternal masterpiece of chaos. "/>
            <Fact image= {jupiter_moons} content = "Look closely, and you'll witness the dance of Jupiter's four largest moons - Io, Europa, Ganymede, and Callisto. It's like a celestial ballet in our very own cosmic theater. "/>
            <Fact image= {jovain_atmosphere} content = "Jupiter's atmosphere is a mesmerizing blend of colorful bands and swirling clouds. It's a living canvas of atmospheric art. "/>
            <p>Hang tight as we slingshot around Jupiter, using its mighty gravity to propel us toward the ringed beauty - Saturn!</p>
        </section>
       <Link to="/saturn" > <button className="my-6 bg-blue-900 text-white">Our cosmic dance continues</button> </Link>
    </Planets>
    )
    
}
export default Jupiter;
