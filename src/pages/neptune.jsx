import { Planets } from "../components/planet";
import { Fact } from "../components/fact";
import {Visual} from "../assets/Neptune/planet_neptune.png";
import {Atmosphere} from "../assets/Neptune/neptune_atmosphere.png";
const Neptune = () => {
    <Planets>
        <section>
            <p>We've now arrived at Neptune, the mystic ice giant at the edge of our solar system. Brace yourselves for the deep blue wonders of this distant beauty. </p>
            <Fact image={Visual} content = "Neptune - The Mystic Ice Giant "/>
            <Fact image={Atmosphere} content = "Dive into Neptune's dynamic atmosphere, adorned with fast-moving storms and swirling clouds. It's like a celestial ballet of atmospheric dynamics. "/>
            <Fact image={Triton} content = "Say hello to Triton, Neptune's moon with a rebellious spirit - it orbits the planet backward. Now that's one moon with its own cosmic groove! "/>
            <Fact image={Spot} content = "Observe the Great Dark Spot, a storm system akin to Jupiter's Great Red Spot. It's like Neptune's mysterious eye staring into the depths of space. "/>
            <p>We're catching Neptune's gravitational waves for another boost, propelling us toward the edge of our solar system - the dwarf planet Pluto!</p>
        </section>
        <button> Propel to Pluto</button>
    </Planets>
}

export default Neptune;