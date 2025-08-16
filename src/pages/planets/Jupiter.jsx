import { Link } from "react-router-dom";

import { PlanetLayout } from "../../components/layouts/PlanetLayout";
import { FactLayout } from "../../components/layouts/FactLayout";

import {
  Jupiter,
  RedSpot,
  JupiterMoons,
  JovainAtmosphere,
} from "../../components/image-exports";

const JupiterPage = () => {
  return (
    <PlanetLayout id="3">
      <section className="text-xl flex items-center flex-col space-y-4">
        {/* animating elements from the left overflows the website */}
        <p className="greet w-full animate__animated animate__bounceInLeft">
          Fasten your harness, crew — we've arrived at the mighty ruler of the
          outer solar system: Jupiter. This colossal gas giant is so massive it
          could swallow more than 1,300 Earths, yet it spins with dizzying
          speed, completing a day in less than 10 hours. Ahead of us stretches a
          horizon of swirling storms, dazzling cloud bands, and gravitational
          power unmatched in our planetary neighborhood.
        </p>

        <div className="planet_profile">
          <img
            className="animate__animated animate__bounce"
            src={Jupiter}
            alt="Jupiter"
          />
          <h1 className="animate__animated animate__bounceInLeft">
            Jupiter — The Giant Stormy Sphere
          </h1>
        </div>

        <FactLayout
          image={RedSpot}
          content="There it is — the Great Red Spot, a legendary storm that has been raging for at least 350 years, possibly much longer. It's so vast that Earth could fit inside it… twice. Winds whip through this swirling vortex at speeds up to 680 km/h (425 mph), and though it has slowly been shrinking in modern times, its crimson eye still stares defiantly across the planet's face — a monument to nature's fury on a truly planetary scale."
        />

        <FactLayout
          image={JupiterMoons}
          content="Orbiting nearby are the Galilean moons — Io, Europa, Ganymede, and Callisto — each a world in its own right. Io is alive with hundreds of volcanoes, Europa hides a deep, global ocean beneath its icy crust (a possible home for alien life), Ganymede is the largest moon in the solar system with its own magnetic field, and Callisto wears a surface scarred by ancient impacts. They dance in perfect rhythm, locked in gravitational harmony, like a four-part symphony that has played for billions of years."
        />

        <FactLayout
          image={JovainAtmosphere}
          content="Jupiter's atmosphere is a masterpiece of motion — thick belts of ammonia clouds, hydrogen, and helium, carved into bands by relentless jet streams. Some stretch for thousands of kilometers, hosting storms so large they could engulf continents. Here, there is no calm day; only an endless churn of energy, color, and chaos."
        />

        <p className="greet">
          Our navigators have locked in a gravity-assist maneuver — Jupiter's
          immense pull will sling us toward the next destination at breathtaking
          speed. Hold on as we leave the roaring heart of the gas giant and set
          our sights on the shimmering jewel of the solar system: Saturn.
        </p>

        <Link to="/saturn">
          <button className="my-6 bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            🪐 Next Stop: Saturn's Rings!
          </button>
        </Link>
      </section>
    </PlanetLayout>
  );
};
export default JupiterPage;
