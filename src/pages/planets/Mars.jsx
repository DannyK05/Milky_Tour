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
      <section className="text-xl flex items-center flex-col space-y-2">
        {/* animating elements from the left overflows the website */}
        <p className="greet w-full  animate__animated animate__bounceInLeft">
          Buckle up, travelers — our next cosmic pitstop is the fabled Red
          Planet: Mars! Known for its rust-colored deserts, paper-thin
          atmosphere, and tantalizing hints of ancient rivers, Mars has captured
          human imagination for centuries. Let's see why explorers — robotic and
          human alike — dream of setting foot here.
        </p>

        <div className="planet_profile">
          <img
            className="animate__animated animate__bounce"
            src={Mars}
            alt="Mars"
          />
          <h1 className="animate__animated animate__bounceInLeft">
            Mars — The Red Frontier
          </h1>
        </div>

        <FactLayout
          image={OlympusMons}
          content="Behold Olympus Mons — the tallest volcano in the solar system! Standing at a staggering 21.9 km (13.6 miles) high, it's nearly three times the height of Mount Everest. Its base is so massive it could cover all of Arizona, and its gentle slope means you could technically hike it… if you were ready for a trek that takes days just to reach the summit."
        />

        <FactLayout
          image={MarsValleries}
          content="Feast your eyes on Valles Marineris, a canyon system so vast it makes Earth's Grand Canyon look like a crack in the sidewalk. It stretches over 4,000 km (2,500 miles) — about the distance from New York to Los Angeles — and drops as deep as 7 km (4.3 miles). Scientists believe it formed from ancient tectonic activity, slowly tearing the Martian crust apart."
        />

        <FactLayout
          image={CuriosityRover}
          content="Down on the dusty surface, NASA's Curiosity rover has been hard at work since 2012. It drills into rocks, studies ancient lakebeds, and even sniffs the thin Martian air for signs of methane. Every image it sends back helps us piece together Mars's history — and decide if it could one day host a human colony."
        />

        <p>
          As we swing past Mars, we're tapping into its gravity for a slingshot
          maneuver — a cosmic speed boost that sends us hurtling through the
          void faster than ever. It's like catching the perfect wave, only the
          ocean is made of stars and the surfboard is our spacecraft.
        </p>

        <p className="greet">
          Farewell, Mars. Next up: the chaotic, rock-strewn realm of the
          asteroid belt — where space debris dances to the Sun's gravitational
          tune.
        </p>

        <Link to="/asteroid">
          <button className="bg-blue-900 my-6 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            🚀 Into the Asteroid Belt — Dodgeball at Cosmic Speed!
          </button>
        </Link>
      </section>
    </PlanetLayout>
  );
};
export default MarsPage;
