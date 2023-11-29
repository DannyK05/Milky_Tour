import { Belt } from "../components/belt";
import { Fact } from "../components/fact";
import { Link } from "react-router-dom";
import Solarflare from "../assets/Sun/solar_flare.webp"
import Solarwind from "../assets/Sun/solar_wind.jpeg";
import Solarspot from "../assets/Sun/solar_spot.webp"
import sun from "../assets/Sun/sun.webp";
const Sun = () => {
    return(
        <Belt>
            <section>
                   {/* animating elements from the left overflows the website */}{/* animating elements from the left overflows the website */}
            <p className="greet animate__animated animate__bounceInLeft">Prepare yourselves for the most awe-inspiring moment of our Milky Tour as we approach the mighty Sun, the blazing heart of our solar system. Brace for a spectacle of solar grandeur!</p>
            <div className="planet_profile">
                <img className="animate__animated animate__bounce" src={sun} alt="Sun" />
                <h1 className="animate__animated animate__bounceInLeft">Sun - The Cosmic Inferno </h1>
            </div>
            <Fact image={Solarflare} content = "Marvel at the solar flares, eruptions of energy dancing across the Sun's surface. It's like a mesmerizing display of cosmic fireworks in the vast theater of space. "/>
            <Fact image= {Solarspot} content = "Observe sunspots, mysterious dark spots on the Sun caused by intense magnetic activity. They're like puzzles in the solar puzzle book, constantly changing and shifting. "/>
            <Fact image= {Solarwind} content = "Feel the solar wind, a stream of charged particles flowing outward from the Sun. It's like a gentle cosmic breeze brushing against our spacecraft."/>
            <p className="greet">Feel the heat as we soar past the swift messenger, Mercury, absorbing the intensity of the Sun's rays. Now, with newfound energy, our spacecraft ventures deeper into the cosmic abyss. Onward, brave adventurers, as we continue our Milky Tour beyond the brilliance of our star! 🌞🚀✨</p>   
            </section>
            <Link to="/mars" > <button className="my-6 bg-blue-900 text-white">Next stop: the red planet, Mars!</button> </Link>
        </Belt>
    )
}
export default Sun