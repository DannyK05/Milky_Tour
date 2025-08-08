import { Link } from "react-router-dom";

import { PlanetLayout } from "../components/layouts/PlanetLayout";
import { FactLayout } from "../components/layouts/FactLayout";

import { PlutoHeartShape, PlutoHorizon, KupierBelt, Pluto } from "../assets";
const PlutoPage = () => {
  return (
    <PlanetLayout id="7">
      <section>
        {/* animating elements from the left overflows the website */}
        <p className=" greet animate__animated animate__bounceInLeft">
          Our final celestial rendezvous brings us to the charming dwarf planet,
          Pluto, at the outskirts of our solar system. Get ready to witness the
          enigmatic beauty of this small world.
        </p>
        <div className="planet_profile">
          <img
            className="animate__animated animate__bounce"
            src={Pluto}
            alt="Pluto"
          />
          <h1 className="animate__animated animate__bounceInLeft">
            Pluto - The Charming Dwarf
          </h1>
        </div>

        <FactLayout
          image={PlutoHeartShape}
          content="Zoom in on the heart-shaped feature on Pluto's surface, appropriately named Tombaugh Regio. It's like Pluto's cosmic love letter to the universe. "
        />
        <FactLayout
          image={KupierBelt}
          content="Explore the dynamics of dwarf planets and their place in the Kuiper Belt, a distant region beyond Neptune. It's a realm of icy wonders and celestial oddities. "
        />
        <FactLayout
          image={PlutoHorizon}
          content="Remember the New Horizons mission? It made a historic flyby of Pluto, giving us our first up-close look at this distant world. It's like unlocking the secrets of a cosmic time capsule. "
        />
        <p className="greet">
          As we bid farewell to Pluto, we're gearing up for the return journey
          to Earth. But fear not, fellow explorers! On our way back, you'll have
          the special opportunity to revisit your favorite celestial
          destinations. So, fasten your seat belts once more, and let's make our
          way home with memories of a Milky Tour that's truly out of this world!
          🌌🌍🚀
        </p>
      </section>
      <Link to="/return">
        <button>Back to earth</button>
      </Link>
    </PlanetLayout>
  );
};

export default PlutoPage;
