import { Planets } from "../components/planet";
import { Fact } from "../components/fact";
import {Visual} from "../assets/Uranus/planet_uranus.png";
import {Montage} from "../assets/Uranus/Uranus_Montage.jpg";

const Uranus = () => {
    <Planets>
        <section>
            <p>Our celestial tour now takes us to Uranus, the quirky and tilted ice giant of the solar system. Get ready to witness a planet that's doing its own funky dance in space.</p>
            <Fact image={Visual} content = "Uranus - The Tilted Ice Giant "/>
            <Fact image={Spin} content = "Uranus is a rebel in our planetary lineup, spinning on its side like a space somersault artist. It's the solar system's coolest acrobat! "/>
            <Fact image={Tilt} content = " Dive into the mysteries of Uranus's magnetic field, which is tilted at a crazy angle. It's like the planet has its own magnetic dance routine."/>
            <Fact image={Montage} content = " Admire the ensemble of Uranian moons, each with its own peculiar charm. They're like the supporting cast in Uranus's cosmic ballet. "/>
            <p>Hold on tight as we utilize Uranus's gravitational pull for a boost. Our next cosmic stop is the distant and mysterious Neptune!</p>
        </section>
        <button>Next stop, Neptune</button>
    </Planets>
}
export default Uranus;