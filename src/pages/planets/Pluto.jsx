import { Link } from "react-router-dom";

import { PlanetLayout } from "../../components/layouts/PlanetLayout";
import { FactLayout } from "../../components/layouts/FactLayout";

import {
  PlutoHeartShape,
  PlutoHorizon,
  KupierBelt,
  Pluto,
} from "../../components/image-exports";
const PlutoPage = () => {
  return (
    <PlanetLayout id="7">
      <section className="text-xl flex items-center flex-col space-y-2">
        {/* animating elements from the left overflows the website */}
        <p className="greet w-full animate__animated animate__bounceInLeft">
          Our final celestial rendezvous brings us to Pluto — the tiny wanderer
          at the frozen edge of our solar system. Out here, sunlight takes more
          than five hours to arrive, the air is whisper-thin, and ice mountains
          rise under an endless starry sky. Welcome to a world small in size,
          yet vast in mystery.
        </p>

        <div className="planet_profile">
          <img
            className="animate__animated animate__bounce"
            src={Pluto}
            alt="Pluto"
          />
          <h1 className="animate__animated animate__bounceInLeft">
            Pluto — The Charming Dwarf
          </h1>
        </div>

        <FactLayout
          image={PlutoHeartShape}
          content="On Pluto's surface lies a vast, bright expanse shaped like a heart — 
    Tombaugh Regio, named after Pluto's discoverer, Clyde Tombaugh. This icy plain 
    is made of frozen nitrogen and carbon monoxide, and it stretches for over a 
    thousand kilometers. It's as if Pluto itself is sending a silent, shimmering 
    love letter to the cosmos."
        />

        <FactLayout
          image={KupierBelt}
          content="Pluto isn't alone — it's one of thousands of icy bodies drifting in 
    the Kuiper Belt, a vast ring of frozen remnants left over from the birth of 
    the solar system. This is a realm of dwarf planets, comets, and strange worlds 
    that have barely changed in over 4 billion years — a time capsule of cosmic history."
        />

        <FactLayout
          image={PlutoHorizon}
          content="In 2015, NASA's New Horizons spacecraft made a daring flyby of Pluto, 
    traveling over 4.8 billion kilometers to reveal it in breathtaking detail for 
    the first time. Mountains of ice, valleys carved by glaciers, and hazy blue skies 
    transformed Pluto from a faint dot into a vibrant, living world."
        />

        <p className="greet">
          As we bid farewell to Pluto, we prepare for the long journey back to
          Earth. Keep your eyes open — on the way home, you can revisit any of
          your favorite stops from our grand tour. Together, we've explored
          giants, dwarfs, storms, rings, and moons, and brought back a story
          written across the stars. 🌌🌍🚀
        </p>

        <Link to="/return">
          <button className="bg-blue-900 text-white my-6 px-4 py-2 rounded hover:bg-blue-700 transition">
            🚀 Back to Earth
          </button>
        </Link>
      </section>
    </PlanetLayout>
  );
};

export default PlutoPage;
