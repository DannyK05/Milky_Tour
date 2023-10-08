import { Planets } from "../components/planet";
import { Fact } from "../components/fact";

const Mars = () => {
    return(
        <Planets >
            <section>
                <p> Our next cosmic pitstop is the Red Planet,  </p>
                <div className="planet_profile">
                        <img src="./src/assets/Mars/planet_mars.png" alt="Mars" />
                        <h1 className="">Mars</h1>
                </div>
                
                <Fact image="./src/assets/Mars/olympus_mons.jpg" content = "Behold Olympus Mons, the tallest volcano in the solar system! It's so massive you could host the ultimate interplanetary ski competition on its slopes. "/>
                <Fact image="./src/assets/Mars/mars-valleries.jpg" content = "Zoom in on Valles Marineris, a canyon system that makes the Grand Canyon look like a crack in the sidewalk. Mars goes big or goes home! "/>
                <Fact image="./src/assets/Mars/curiosity_rover.jpg" content = "Fun fact - our trusty rover friend, Curiosity, is roaming around down there. It's like the solar system's own remote-controlled explorer. "/>
                <p>We're swinging by Mars, utilizing its gravitational force for a cosmic slingshot effect. It's like a space rollercoaster - thrilling and fuel-efficient!</p>
                <p>Hold on tight as we bid farewell to the Red Planet.</p>
                <button>Next stop: the mighty gas giant, Jupiter!</button>
            </section>
        </Planets>
    )
    
}
export default Mars;