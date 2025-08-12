import { Link } from "react-router-dom";

import { PlanetLayout } from "../../components/layouts/PlanetLayout";
import { FactLayout } from "../../components/layouts/FactLayout";

import {
  NeptuneDarkSpot,
  Neptune,
  NeptuneStorm,
  Triton,
} from "../../components/image-exports";

const NeptunePage = () => {
  return (
    <PlanetLayout id="6">
      <section>
        {/* animating elements from the left overflows the website */}
        <p className="greet animate__animated animate__bounceInLeft">
          We've now reached Neptune, the enigmatic ice giant cloaked in
          sapphire-blue clouds, reigning at the fringes of our solar system. Out
          here, sunlight is faint, winds are fierce, and mysteries swirl in the
          deep.
        </p>

        <div className="planet_profile">
          <img
            className="animate__animated animate__bounce"
            src={Neptune}
            alt="Neptune"
          />
          <h1 className="animate__animated animate__bounceInLeft">
            Neptune — The Mystic Ice Giant
          </h1>
        </div>

        <FactLayout
          image={NeptuneStorm}
          content="Neptune's atmosphere is a masterpiece of motion, home to the fastest winds in the solar system, reaching over 2,100 km/h (1,300 mph). Vast, swirling storms race across its face, reshaping the planet's cloudy bands in a constant dance of chaos and beauty."
        />

        <FactLayout
          image={Triton}
          content="Meet Triton, Neptune's largest moon — and a cosmic rebel. It's the only large moon in the solar system that orbits backward, defying Neptune's spin. Beneath its frozen crust, scientists suspect a hidden ocean, and its geysers spew icy plumes high into space."
        />

        <FactLayout
          image={NeptuneDarkSpot}
          content="Behold the Great Dark Spot, a massive storm system the size of Earth. First spotted by Voyager 2 in 1989, it appears and vanishes like a cosmic phantom, hinting at the turbulent forces shaping Neptune's ever-changing skies."
        />

        <p className="greet">
          With Neptune's gravitational pull at our backs, we slingshot deeper
          into the unknown, toward the frozen frontier and the small but
          fascinating world of Pluto.
        </p>

        <Link to="/kupier">
          <button className="bg-blue-900 text-white my-6">
            🚀 Zooming Off to Pluto
          </button>
        </Link>
      </section>
    </PlanetLayout>
  );
};

export default NeptunePage;
