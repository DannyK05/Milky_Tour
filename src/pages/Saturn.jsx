import { Planets } from "../components/planet";
import { Fact } from "../components/fact";
import { Link } from "react-router-dom";
import { saturn, saturn_ring } from "../assets";
import { titan } from "../assets";
import { cassini } from "../assets";

const Saturn = () => {
    return(
        <Planets>
        <section>
            <p className="animate__animated animate__bounceInRight">Our next cosmic rendezvous is with the majestic Saturn, adorned with the most stunning ring system in the solar system. Get ready for a ringside seat to celestial elegance.</p>
            <div className="planet_profile">
                    <img className="animate__animated animate__bounce" src={saturn} alt="Saturn" />
                    <h1 className="animate__animated animate__bounceInLeft">Saturn - The Ringed Majesty</h1>
            </div>
    
            <Fact image= {saturn_ring} content = "Marvel at Saturn's breathtaking rings, a cosmic jewelry collection that would make any space fashionista jealous. These aren't just rings; they're a symphony of icy elegance. "/>
            <Fact image={titan} content = "Say hello to Titan, Saturn's largest moon, shrouded in a thick atmosphere. It's like a misty moon dream waiting to be explored. "/>
            <Fact image= {cassini} content = "Remember the Cassini spacecraft? It performed a grand finale by diving into Saturn's atmosphere. Talk about a cosmic swan song! "/>
            <p>As we glide past Saturn, think of it as a cosmic slingshot, propelling us to the next destination – Uranus!</p>
        </section>
     <Link to="/uranus" ><button className="bg-blue-900 text-white my-6">Keep gliding</button></Link>   
    </Planets>
    )
    
}

export default Saturn;