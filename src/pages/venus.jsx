import { Planets } from "../components/planet";
import { Fact } from "../components/fact";
import {Visual} from "../assets/Venus/planet_venus.png";
import {Volcanoes} from "../assets/Venus/venus_volcanoes.jpg";


const Venus = () => {
    <Planets >
        <section>
            <p>Welcome, space travelers! Look out your windows, and you'll catch a glimpse of our sizzling neighbor, </p>
            <Fact image={Visual} content = "Venus - also known as the 'fiery diva' of the solar system"/>
            <p>Venus is a cooking pot with a runaway greenhouse effect, trapping heat in its thick atmosphere. No need to break out the sunscreen; you'd turn into a toasty astronaut nugget in seconds!</p>
            <Fact image={Spin} content = "Venus has a peculiar retrograde rotation, meaning it spins backward compared to most planets. It's like the ultimate cosmic dance move! "/>
            <Fact image={Volcanoes} content = "If we could see through those thick clouds, you'd spot towering volcanoes and vast plains. Venus is like the solar system's mysterious beauty hiding behind a veil. "/>
            <p>Hold on tight, folks! We're zipping past Venus at breakneck speed, and here's a little secret: we're using its gravitational force for a boost. It's like catching a cosmic wave, allowing us to surf through space more efficiently and save on fuel. Efficiency is the name of the game in space tourism!</p>
            <p>Now that Venus is in our rearview mirrors, get ready for the next leg of our Milky Tour. Fasten your seat belts and brace yourselves as we journey deeper into the cosmic wonders.</p>
        </section>
        <button>Onward to the next stop! 🚀✨</button>
    </Planets>
}

export default Venus;