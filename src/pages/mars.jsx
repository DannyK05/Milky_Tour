import { Planets } from "../components/planet";
import { Fact } from "../components/fact";
import {Visual} from "../assets/Mars/planet_mars.jpg";
import {Mons} from "../assets/Mars/olympus_mons.jpg";
import {Valles} from "../assets/Mars/mars_valleries.jpg";
import {Curiosity} from "../assets/Mars/curiosity_rover.jpg";

const Mars = () => {
    <Planets >
        <section>
            <p> Our next cosmic pitstop is the Red Planet,  </p>
            <Fact image={Visual} content = "Mars"/>
            <Fact image={Mons} content = "Behold Olympus Mons, the tallest volcano in the solar system! It's so massive you could host the ultimate interplanetary ski competition on its slopes. "/>
            <Fact image={Valles} content = "Zoom in on Valles Marineris, a canyon system that makes the Grand Canyon look like a crack in the sidewalk. Mars goes big or goes home! "/>
            <Fact image={Curiosity} content = "Fun fact - our trusty rover friend, Curiosity, is roaming around down there. It's like the solar system's own remote-controlled explorer. "/>
            <p>We're swinging by Mars, utilizing its gravitational force for a cosmic slingshot effect. It's like a space rollercoaster - thrilling and fuel-efficient!</p>
            <p>Hold on tight as we bid farewell to the Red Planet.</p>
            <button>Next stop: the mighty gas giant, Jupiter!</button>
        </section>
    </Planets>
}
export default Mars;