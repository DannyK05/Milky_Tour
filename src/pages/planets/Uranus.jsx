import { Link } from "react-router-dom";

import { PlanetLayout } from "../../components/layouts/PlanetLayout";
import { FactLayout } from "../../components/layouts/FactLayout";

import {
  Uranus,
  UranusTilt,
  UranusMontage,
} from "../../components/image-exports";

const UranusPage = () => {
  return (
    <PlanetLayout id="5">
      <section className="text-xl flex items-center flex-col space-y-2">
        {/* animating elements from the left overflows the website */}
        <p className="greet w-full animate__animated animate__bounceInLeft">
          Our celestial journey brings us to Uranus — the mysterious,
          sideways-spinning ice giant. Unlike any other planet, Uranus is tilted
          so far that it practically rolls around the Sun, making it the
          ultimate cosmic acrobat. This unique tilt gives Uranus some of the
          most extreme and longest seasons in the solar system — each lasting
          decades.
        </p>

        <div className="planet_profile">
          <img
            className="animate__animated animate__bounce"
            src={Uranus}
            alt="Uranus"
          />
          <h1 className="animate__animated animate__bounceInLeft">
            Uranus - The Tilted Ice Giant
          </h1>
        </div>

        <FactLayout
          image={UranusTilt}
          content="Uranus spins on its side at a tilt of about 98 degrees, likely the result of a  
    colossal collision in its distant past. This bizarre orientation causes its poles to  
    bask in 42 years of sunlight, followed by 42 years of darkness — seasons on a truly  
    epic timescale."
        />

        <FactLayout
          image={UranusTilt}
          content="Its magnetic field is just as strange — tilted 59 degrees away from its spin axis  
    and offset from the planet's center. This creates a lopsided magnetic bubble that  
    wobbles wildly as Uranus rotates, unlike anything else in the solar system."
        />

        <FactLayout
          image={UranusMontage}
          content="Uranus is orbited by 27 known moons, most named after Shakespearean and  
    Alexander Pope characters. Titania, Oberon, Miranda, Ariel, and Umbriel each offer  
    landscapes of icy cliffs, deep canyons, and mysterious ridges — a frozen, theatrical  
    ensemble in Uranus's cosmic drama."
        />

        <p className="greet">
          Hold on tight as we harness Uranus's gravitational pull for a final
          boost. Our next destination lies at the edge of the solar system —
          Neptune, the deep blue giant with the fastest winds in the cosmos.
        </p>

        <Link to="/neptune">
          <button className="my-6 bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            🌊 Next stop: Neptune — The Windy Blue Giant!
          </button>
        </Link>
      </section>
    </PlanetLayout>
  );
};

export default UranusPage;
