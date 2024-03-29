import { Planets } from "../components/planet";
import { Fact } from "../components/fact";
import { Link } from "react-router-dom";
import { darkspot, neptune, neptune_storm, triton } from "../assets";
import Visor from "../components/visor";

const Neptune = () => {
    return(
        <Planets>
        <section>
            <Visor id="6"/>
            {/* animating elements from the left overflows the website */}
            <p className="greet animate__animated animate__bounceInLeft">We've now arrived at Neptune, the mystic ice giant at the edge of our solar system. Brace yourselves for the deep blue wonders of this distant beauty. </p>
            <div className="planet_profile">
                    <img className="animate__animated animate__bounce" src={neptune} alt="Neptune" />
                    <h1 className="animate__animated animate__bounceInLeft">Neptune - The Mystic Ice Giant</h1>
            </div>
        
            <Fact image={neptune_storm} content = "Dive into Neptune's dynamic atmosphere, adorned with fast-moving storms and swirling clouds. It's like a celestial ballet of atmospheric dynamics. "/>
            <Fact image={triton} content = "Say hello to Triton, Neptune's moon with a rebellious spirit - it orbits the planet backward. Now that's one moon with its own cosmic groove! "/>
            <Fact image={darkspot} content = "Observe the Great Dark Spot, a storm system akin to Jupiter's Great Red Spot. It's like Neptune's mysterious eye staring into the depths of space. "/>
            <p className="greet">We're catching Neptune's gravitational waves for another boost, propelling us toward the edge of our solar system - the dwarf planet Pluto!</p>
        </section>
     <Link to="/kupier"> <button className="bg-blue-900 text-white my-6"> Zooming off </button></Link>   
    </Planets>
    )
}

export default Neptune;