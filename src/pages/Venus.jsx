import { Planets } from "../components/planet";
import { Fact } from "../components/fact";
import { Link } from "react-router-dom";
import { venus_volanoes } from "../assets";

const Venus = () => {
    return(
        <Planets >
            <section>
                <p>Welcome, space travelers! Look out your windows, and you'll catch a glimpse of our sizzling neighbor, </p>
                <div className="planet_profile">
                    <img src=".\src\assets\Venus\planet_venus.png" alt="Venus" />
                    <h1 className="pt-2">Venus - also known as the 'fiery diva' of the solar system</h1>
                </div>
                <p className="special">Venus is a cooking pot with a runaway greenhouse effect, trapping heat in its thick atmosphere. No need to break out the sunscreen; you'd turn into a toasty astronaut nugget in seconds!</p>
                <Fact image="" content = "Venus has a peculiar retrograde rotation, meaning it spins backward compared to most planets. It's like the ultimate cosmic dance move! "/>
                <Fact image={venus_volanoes} content = "If we could see through those thick clouds, you'd spot towering volcanoes and vast plains. Venus is like the solar system's mysterious beauty hiding behind a veil. "/>
                <p className="special">Hold on tight, folks! We're zipping past Venus at breakneck speed, and here's a little secret: we're using its gravitational force for a boost. It's like catching a cosmic wave, allowing us to surf through space more efficiently and save on fuel. Efficiency is the name of the game in space tourism!</p>
                <p className="special">Now that Venus is in our rearview mirrors, get ready for the next leg of our Milky Tour. Fasten your seat belts and brace yourselves as we journey deeper into the cosmic wonders.</p>
            </section>
            <Link to="/mercury">  <button className="bg-blue-900 my-6 text-white">Onward to the next stop! 🚀✨</button> </Link>.
        </Planets>
    ) 
}

export default Venus;