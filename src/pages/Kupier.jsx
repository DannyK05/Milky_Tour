import { Belt } from "../components/belt";
import { Fact } from "../components/fact";
import { Link } from "react-router-dom";
const Kupier = () => {
    return(
        <Belt>
            <section>
                {/* animating elements from the left overflows the website */}{/* animating elements from the left overflows the website */}
            <p className="greet animate__animated animate__bounceInLeft">Our next phase of the Milky Tour leads us to the Kuiper Belt, a distant region beyond Neptune teeming with icy wonders. Get ready to explore the outer realms of our solar system!</p>
            <div className="planet_profile">
                    <img className="animate__animated animate__bounce" src={""} alt="Kupier Belt" />
                    <h1 className="animate__animated animate__bounceInLeft">Kuiper Belt - Icy Realms Beyond </h1>
            </div>
            <Fact image={""} content = "Wave hello to Pluto and other dwarf planets, the ambassadors of the Kuiper Belt. It's like a cosmic gathering of distant cousins, each with its own unique charm. "/>
            <Fact image= {""} content = "Encounter Kuiper Belt objects, icy remnants from the early solar system. These are like time capsules, preserving the secrets of our cosmic origins. "/>
            <Fact image= {""} content = "Follow in the footsteps of the New Horizons spacecraft, which continues its journey into the Kuiper Belt after its historic Pluto flyby. It's like a cosmic explorer venturing into uncharted territory. "/>
            <p className="greet">Let's get a close up of our dwarf planet, Pluto. </p> 
            </section>
            <Link to="/pluto" > <button className="my-6 bg-blue-900 text-white">Propel to pluto</button> </Link>
        </Belt>
    )
}
export default Kupier