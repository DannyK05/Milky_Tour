import { Link } from "react-router-dom";

import { PlanetLayout } from "../../components/layouts/PlanetLayout";
import { FactLayout } from "../../components/layouts/FactLayout";

import {
  Mars,
  OlympusMons,
  MarsValleries,
  CuriosityRover,
} from "../../components/image-exports";

const MarsPage = () => {
  return (
    <PlanetLayout id="2">
      <section>
        {/* animating elements from the left overflows the website */}
        <p className="greet animate__animated animate__bounceInLeft">
          Our next cosmic pitstop is the Red Planet,
        </p>
        <div className="planet_profile">
          <img
            className="animate__animated animate__bounce"
            src={Mars}
            alt="Mars"
          />
          <h1 className="animate__animated animate__bounceInLeft">Mars</h1>
        </div>

        <FactLayout
          image={OlympusMons}
          content="Behold Olympus Mons, the tallest volcano in the solar system! It's so massive you could host the ultimate interplanetary ski competition on its slopes. "
        />
        <FactLayout
          image={MarsValleries}
          content="Zoom in on Valles Marineris, a canyon system that makes the Grand Canyon look like a crack in the sidewalk. Mars goes big or goes home! "
        />
        <FactLayout
          image={CuriosityRover}
          content="Fun fact - our trusty rover friend, Curiosity, is roaming around down there. It's like the solar system's own remote-controlled explorer. "
        />
        <p>
          We're swinging by Mars, utilizing its gravitational force for a cosmic
          slingshot effect. It's like a space rollercoaster - thrilling and
          fuel-efficient!
        </p>
        <p className="greet">
          Hold on tight as we bid farewell to the Red Planet.
        </p>
        <Link to="/asteroid">
          <button className="bg-blue-900 my-6 text-white">
            Heading towards a celestial dodgeball
          </button>
        </Link>
      </section>
    </PlanetLayout>
  );
};
export default MarsPage;
