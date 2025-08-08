import { Link } from "react-router-dom";

import { PlanetLayout } from "../components/layouts/PlanetLayout";
import { FactLayout } from "../components/layouts/FactLayout";

import {
  NeptuneDarkSpot,
  Neptune,
  NeptuneStorm,
  Triton,
} from "../components/image-exports";

const NeptunePage = () => {
  return (
    <PlanetLayout id="6">
      <section>
        {/* animating elements from the left overflows the website */}
        <p className="greet animate__animated animate__bounceInLeft">
          We've now arrived at Neptune, the mystic ice giant at the edge of our
          solar system. Brace yourselves for the deep blue wonders of this
          distant beauty.
        </p>
        <div className="planet_profile">
          <img
            className="animate__animated animate__bounce"
            src={Neptune}
            alt="Neptune"
          />
          <h1 className="animate__animated animate__bounceInLeft">
            Neptune - The Mystic Ice Giant
          </h1>
        </div>

        <FactLayout
          image={NeptuneStorm}
          content="Dive into Neptune's dynamic atmosphere, adorned with fast-moving storms and swirling clouds. It's like a celestial ballet of atmospheric dynamics. "
        />
        <FactLayout
          image={Triton}
          content="Say hello to Triton, Neptune's moon with a rebellious spirit - it orbits the planet backward. Now that's one moon with its own cosmic groove! "
        />
        <FactLayout
          image={NeptuneDarkSpot}
          content="Observe the Great Dark Spot, a storm system akin to Jupiter's Great Red Spot. It's like Neptune's mysterious eye staring into the depths of space. "
        />
        <p className="greet">
          We're catching Neptune's gravitational waves for another boost,
          propelling us toward the edge of our solar system - the dwarf planet
          Pluto!
        </p>
      </section>
      <Link to="/kupier">
        <button className="bg-blue-900 text-white my-6"> Zooming off </button>
      </Link>
    </PlanetLayout>
  );
};

export default NeptunePage;
