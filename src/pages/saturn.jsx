import { Planets } from "../components/planet";
import { Fact } from "../components/fact";


const Saturn = () => {
    return(
        <Planets>
        <section>
            <p>Our next cosmic rendezvous is with the majestic Saturn, adorned with the most stunning ring system in the solar system. Get ready for a ringside seat to celestial elegance.</p>
            <div className="planet_profile">
                    <img src="./src/assets/Saturn/planet_saturn.png" alt="Saturn" />
                    <h1 className="">Saturn - The Ringed Majesty</h1>
            </div>
    
            <Fact image="./src/assets/Saturn/saturn_ring.jpeg" content = "Marvel at Saturn's breathtaking rings, a cosmic jewelry collection that would make any space fashionista jealous. These aren't just rings; they're a symphony of icy elegance. "/>
            <Fact image="./src/assets/Saturn/titan.png" content = "Say hello to Titan, Saturn's largest moon, shrouded in a thick atmosphere. It's like a misty moon dream waiting to be explored. "/>
            <Fact image="./src/assets/Saturn/Cassini.jpg" content = "Remember the Cassini spacecraft? It performed a grand finale by diving into Saturn's atmosphere. Talk about a cosmic swan song! "/>
            <p>As we glide past Saturn, think of it as a cosmic slingshot, propelling us to the next destination – Uranus!</p>
        </section>
        <button>Keep gliding</button>
    </Planets>
    )
    
}

export default Saturn;