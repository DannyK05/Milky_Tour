import { Planets } from "../components/planet";
import { Fact } from "../components/fact";
import { Link } from "react-router-dom";
import { caloris, mercury } from "../assets";

const Mercury = () => {
    return(
        <Planets>
        <section>
            {/* animating elements from the left overflows the website */}
            <p className="greet animate__animated animate__bounceInLeft"> Our Milky Tour now brings us to the sweltering domain of Mercury, the swift messenger of the solar system. Get ready to witness the scorched beauty of the closest planet to the Sun.</p>
            <div className="planet_profile">
                    <img className="animate__animated animate__bounce" src={mercury} alt="Mercury" />
                    <h1 className="animate__animated animate__bounceInLeft">Mercury - The Swift Messenger</h1>
            </div>
            
            <p>Brace yourselves for extreme temperatures on Mercury, ranging from scorching hot to freezing cold. It's like a planet of weather extremes, where you could experience summer and winter in the same day!</p>
            <Fact image={caloris} content = "Observe the Caloris Basin, a colossal impact site that could fit Texas within its borders. It's like a cosmic scar from a colossal collision. "/>
            <Fact image="" content = "Learn about Mercury's slow rotation, which means it experiences incredibly long days and nights. It's like a planet caught in a cosmic slow dance with the Sun. "/>
            <p className="greet">Feel the heat as we soar past the swift messenger, Mercury, absorbing the intensity of the Sun's rays. Now, with newfound energy, our spacecraft ventures deeper into the cosmic abyss. Onward, brave adventurers, as we continue our Milky Tour beyond the brilliance of our star! 🌞🚀✨</p>
        </section>
        <Link to="/mars" > <button className="my-6 bg-blue-900 text-white">Our cosmic dance continues</button> </Link>
    </Planets>
    )
}

export default Mercury;