import { Planets } from "../components/planet";
import { Fact } from "../components/fact";
import {Visual} from "../assets/Saturn/planet_saturn.png";
import {Ring} from "../assets/Saturn/saturn_ring.png";
import {Titan} from "../assets/Saturn/titan.png";
import {Cassini} from "../assets/Saturn/Cassini.jpg";

const Saturn = () => {
    <Planets>
        <section>
            <p>Our next cosmic rendezvous is with the majestic Saturn, adorned with the most stunning ring system in the solar system. Get ready for a ringside seat to celestial elegance.</p>
            <Fact image ={Visual} content= "Saturn - The Ringed Majesty"/>
            <Fact image={Ring} content = "Marvel at Saturn's breathtaking rings, a cosmic jewelry collection that would make any space fashionista jealous. These aren't just rings; they're a symphony of icy elegance. "/>
            <Fact image={Titan} content = "Say hello to Titan, Saturn's largest moon, shrouded in a thick atmosphere. It's like a misty moon dream waiting to be explored. "/>
            <Fact image={Cassini} content = "Remember the Cassini spacecraft? It performed a grand finale by diving into Saturn's atmosphere. Talk about a cosmic swan song! "/>
            <p>As we glide past Saturn, think of it as a cosmic slingshot, propelling us to the next destination – Uranus!</p>
        </section>
        <button>Keep gliding</button>
    </Planets>
}

export default Saturn;