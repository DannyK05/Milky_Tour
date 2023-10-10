import { Planets } from "../components/planet";
import { Fact } from "../components/fact";
import { Link } from "react-router-dom";
import { planet_mars } from "../assets";
import { olympus_mons } from "../assets";
import { mars_valleries } from "../assets";
import { curiosity_rover } from "../assets";
const Mars = () => {
    return(
        <Planets >
            <section>
                {/* animating elements from the left overflows the website */}
                <p className="greet animate__animated animate__bounceInLeft"> Our next cosmic pitstop is the Red Planet,  </p>
                <div className="planet_profile">
                        <img className="animate__animated animate__bounce" src= {planet_mars} alt="Mars" />
                        <h1 className="animate__animated animate__bounceInLeft">Mars</h1>
                </div>
                
                <Fact image={olympus_mons} content = "Behold Olympus Mons, the tallest volcano in the solar system! It's so massive you could host the ultimate interplanetary ski competition on its slopes. "/>
                <Fact image={mars_valleries} content = "Zoom in on Valles Marineris, a canyon system that makes the Grand Canyon look like a crack in the sidewalk. Mars goes big or goes home! "/>
                <Fact image={curiosity_rover} content = "Fun fact - our trusty rover friend, Curiosity, is roaming around down there. It's like the solar system's own remote-controlled explorer. "/>
                <p>We're swinging by Mars, utilizing its gravitational force for a cosmic slingshot effect. It's like a space rollercoaster - thrilling and fuel-efficient!</p>
                <p className="greet">Hold on tight as we bid farewell to the Red Planet.</p>
            <Link to="/jupiter">  <button className="bg-blue-900 my-6 text-white">Next stop: the mighty gas giant, Jupiter!</button></Link>
            </section>
        </Planets>
    )
    
}
export default Mars;