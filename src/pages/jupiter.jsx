import { Planets } from "../components/planet";
import { Fact } from "../components/fact";
import {Visual} from "../assets/Jupiter/planet_jupiter";
import {Spot} from "../assets/Jupiter/red_spot.webp";
import {Montage} from "../assets/Jupiter/jupiter_moons.jpg";
import {Atmosphere} from "../assets/Jupiter/jovian_atmosphere.webp";

const Jupiter = () => {
    <Planets>
        <section>
            <p>Our celestial journey brings us to the grandeur of Jupiter, the largest planet in our solar system. Brace yourselves for a spectacle of swirling storms and colossal beauty.</p>
            <Fact image={Visual} content = "Jupiter - The Giant Stormy Sphere "/>
            <Fact image={Spot} content = "Feast your eyes on the Great Red Spot, a storm that has been raging for centuries. It's like the solar system's eternal masterpiece of chaos. "/>
            <Fact image={Montage} content = "Look closely, and you'll witness the dance of Jupiter's four largest moons - Io, Europa, Ganymede, and Callisto. It's like a celestial ballet in our very own cosmic theater. "/>
            <Fact image={Atmosphere} content = "Jupiter's atmosphere is a mesmerizing blend of colorful bands and swirling clouds. It's a living canvas of atmospheric art. "/>
            <p>Hang tight as we slingshot around Jupiter, using its mighty gravity to propel us toward the ringed beauty - Saturn!</p>
        </section>
        <button>Our cosmic dance continues</button>
    </Planets>
}
export default Jupiter;