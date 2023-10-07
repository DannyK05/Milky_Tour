import { Planets } from "../components/planet";
import { Fact } from "../components/fact";
import {Visual} from "../assets/Pluto/planet_pluto.png";
import {Heart} from "../assets/Pluto/heart_shape.png";
import {Kupier} from "../assets/Pluto/kupier_belt.jpg";
import {Horizon} from "../assets/Pluto/horizon.png";
const Pluto = () => {
    <Planets>
        <section>
            <p>Our final celestial rendezvous brings us to the charming dwarf planet, Pluto, at the outskirts of our solar system. Get ready to witness the enigmatic beauty of this small world.</p>
            <Fact image={Visual} content = "Pluto - The Charming Dwarf "/>
            <Fact image={Heart} content = "Zoom in on the heart-shaped feature on Pluto's surface, appropriately named Tombaugh Regio. It's like Pluto's cosmic love letter to the universe. "/>
            <Fact image={Kupier} content = "Explore the dynamics of dwarf planets and their place in the Kuiper Belt, a distant region beyond Neptune. It's a realm of icy wonders and celestial oddities. "/>
            <Fact image={Horizon} content = "Remember the New Horizons mission? It made a historic flyby of Pluto, giving us our first up-close look at this distant world. It's like unlocking the secrets of a cosmic time capsule. "/>
            <p>As we bid farewell to Pluto, we're gearing up for the return journey to Earth. But fear not, fellow explorers! On our way back, you'll have the special opportunity to revisit your favorite celestial destinations. So, fasten your seat belts once more, and let's make our way home with memories of a Milky Tour that's truly out of this world! 🌌🌍🚀</p>
        </section>
        <button>Back to earth</button>
    </Planets>
}

export default Pluto;