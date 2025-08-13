import { Link } from "react-router-dom";

import { PlanetLayout } from "../../components/layouts/PlanetLayout";
import { FactLayout } from "../../components/layouts/FactLayout";

import {
  Saturn,
  SaturnRing,
  Titan,
  Cassini,
} from "../../components/image-exports";

const SaturnPage = () => {
  return (
    <PlanetLayout id="4">
      <section className="text-xl flex items-center flex-col space-y-2">
        {/* animating elements from the left overflows the website */}
        <p className=" greet animate__animated animate__bounceInLeft">
          We've arrived at the crown jewel of the solar system — Saturn. Even
          from here, its shimmering halo of rings glitters against the darkness,
          like a royal diadem worn by the most elegant monarch in space. At over
          120,000 kilometers wide, Saturn's rings make it impossible to mistake
          for any other planet.
        </p>

        <div className="planet_profile">
          <img
            className="animate__animated animate__bounce"
            src={Saturn}
            alt="Saturn"
          />
          <h1 className="animate__animated animate__bounceInLeft">
            Saturn — The Ringed Majesty
          </h1>
        </div>

        <FactLayout
          image={SaturnRing}
          content="These are not just rings — they're millions of icy shards,  
    from dust-sized grains to chunks as big as mountains, all orbiting in delicate balance.  
    Some scientists believe they may be the remains of a shattered moon,  
    others think they've been here since the dawn of the solar system.  
    Whatever their origin, they form a cosmic symphony of ice and light."
        />

        <FactLayout
          image={Titan}
          content="Meet Titan, Saturn's largest moon and one of the most intriguing worlds we know.  
    Beneath its thick, orange atmosphere of nitrogen lies a landscape carved by rivers and lakes —  
    not of water, but of liquid methane and ethane.  
    It's a frozen realm with weather, seasons, and the tantalizing possibility of exotic life."
        />

        <FactLayout
          image={Cassini}
          content="And here's a tribute to one of humanity's boldest explorers — the Cassini spacecraft.  
    For 13 years it orbited Saturn, revealing its storms, moons, and hidden secrets.  
    In 2017, it made a final, breathtaking dive into Saturn's atmosphere —  
    a deliberate plunge to avoid contaminating Titan or Enceladus,  
    ending its mission with a blaze of data and glory."
        />

        <p className="greet">
          We'll ride Saturn's gravitational pull as our next cosmic slingshot,
          hurling us toward the pale-blue enigma of Uranus. Keep your eyes on
          those rings as they fade into the distance — beauty like that deserves
          a long, last look.
        </p>

        <Link to="/uranus">
          <button className="bg-blue-900 text-white my-6 px-4 py-2 rounded-md hover:bg-blue-700 transition">
            🌌 Keep Gliding to Uranus
          </button>
        </Link>
      </section>
    </PlanetLayout>
  );
};

export default SaturnPage;
