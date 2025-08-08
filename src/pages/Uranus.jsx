import { Link } from "react-router-dom";

import { PlanetLayout } from "../components/layouts/PlanetLayout";
import { FactLayout } from "../components/layouts/FactLayout";

import { Uranus, UranusTilt, UranusMontage } from "../components/image-exports";

const UranusPage = () => {
  return (
    <PlanetLayout id="5">
      <section>
        {/* animating elements from the left overflows the website */}
        <p className="greet animate__animated animate__bounceInLeft">
          Our celestial tour now takes us to Uranus, the quirky and tilted ice
          giant of the solar system. Get ready to witness a planet that's doing
          its own funky dance in space.
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
          image=""
          content="Uranus is a rebel in our planetary lineup, spinning on its side like a space somersault artist. It's the solar system's coolest acrobat! "
        />
        <FactLayout
          image={UranusTilt}
          content=" Dive into the mysteries of Uranus's magnetic field, which is tilted at a crazy angle. It's like the planet has its own magnetic dance routine."
        />
        <FactLayout
          image={UranusMontage}
          content=" Admire the ensemble of Uranian moons, each with its own peculiar charm. They're like the supporting cast in Uranus's cosmic ballet. "
        />
        <p className="greet">
          Hold on tight as we utilize Uranus's gravitational pull for a boost.
          Our next cosmic stop is the distant and mysterious Neptune!
        </p>
      </section>
      <Link to="/neptune">
        <button className="my-6 bg-blue-900 text-white">
          Next stop, Neptune
        </button>
      </Link>
    </PlanetLayout>
  );
};

export default UranusPage;
