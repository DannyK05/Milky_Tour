import { Planets } from "../components/planet";
import { Fact } from "../components/fact";
import {Visual} from "../assets/Mercury/planet_mercury.png"
const Mercury = () => {
    <Planets>
        <section>
            <p> Our Milky Tour now brings us to the sweltering domain of Mercury, the swift messenger of the solar system. Get ready to witness the scorched beauty of the closest planet to the Sun.</p>
            <Fact image={Visual} content = "Approaching Mercury - The Swift Messenger: "/>
            <p>Brace yourselves for extreme temperatures on Mercury, ranging from scorching hot to freezing cold. It's like a planet of weather extremes, where you could experience summer and winter in the same day!</p>
            <Fact image={Caloris} content = "Observe the Caloris Basin, a colossal impact site that could fit Texas within its borders. It's like a cosmic scar from a colossal collision. "/>
            <Fact image={Rotation} content = "Learn about Mercury's slow rotation, which means it experiences incredibly long days and nights. It's like a planet caught in a cosmic slow dance with the Sun. "/>
            <p>Feel the heat as we soar past the swift messenger, Mercury, absorbing the intensity of the Sun's rays. Now, with newfound energy, our spacecraft ventures deeper into the cosmic abyss. Onward, brave adventurers, as we continue our Milky Tour beyond the brilliance of our star! 🌞🚀✨</p>
        </section>
    </Planets>
}

export default Mercury;