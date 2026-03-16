import { Link } from "react-router-dom";

import { BeltLayout } from "../../components/layouts/BeltLayout";
import { FactLayout } from "../../components/layouts/FactLayout";

import { KupierBelt } from "../../components/image-exports";

import KupierObject from "/assets/images/kupier/kupier_objects.webp";
import Wave from "/assets/images/kupier/Kupier_belt.jpg";
import Horizon from "/assets/images/kupier/horizon.webp";

const KupierPage = () => {
  return (
    <BeltLayout>
      <section className="text-xl flex items-center space-y-2 flex-col text-center">
        {/* animating elements from the left overflows the website */}
        <p className="greet w-full animate__animated animate__bounceInLeft">
          Our next phase of the Milky Tour brings us to the Kuiper Belt — a
          vast, icy frontier beyond Neptune. Here, sunlight is faint, and
          countless frozen worlds drift in slow orbits, unchanged for billions
          of years. This is the solar system&apos; ancient archive, where each
          object tells a chapter of our cosmic origin story.
        </p>

        <div className="planet_profile">
          <img
            className="animate__animated animate__bounce"
            src={KupierBelt}
            alt="Kuiper Belt"
          />
          <h1 className="animate__animated animate__bounceInLeft">
            Kuiper Belt — Icy Realms Beyond
          </h1>
        </div>

        <FactLayout
          image={Wave}
          content="Wave to Pluto and its fellow dwarf planets — the charismatic ambassadors of the Kuiper Belt. 
    They're like distant cosmic relatives, each with their own landscapes, moons, and stories to tell."
        />

        <FactLayout
          image={KupierObject}
          content="Meet the Kuiper Belt objects, frozen time capsules left over from the solar system' youth. 
    Composed of rock, methane, and water ice, these relics preserve conditions from over 4 billion years ago."
        />

        <FactLayout
          image={Horizon}
          content="Trace the path of NASA' New Horizons spacecraft as it continues its voyage deeper into this 
    icy expanse. After revealing Pluto' hidden wonders, it now studies smaller Kuiper Belt objects — 
    explorers meeting explorers at the edge of the Sun' reach."
        />

        <p className="greet">
          Now that we've crossed this frozen frontier, it&apos; time to take a
          closer look at one of its most famous residents — the tiny yet
          captivating Pluto.
        </p>
        <Link to="/pluto">
          <button className="my-6 bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Propel to Pluto
          </button>
        </Link>
      </section>
    </BeltLayout>
  );
};
export default KupierPage;
