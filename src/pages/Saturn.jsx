import { Link } from "react-router-dom";

import { PlanetLayout } from "../components/layouts/PlanetLayout";
import { FactLayout } from "../components/layouts/FactLayout";

import { Saturn, SaturnRing, Titan, Cassini } from "../assets";

const SaturnPage = () => {
  return (
    <PlanetLayout id="4">
      <section>
        {/* animating elements from the left overflows the website */}
        <p className=" greet animate__animated animate__bounceInLeft">
          Our next cosmic rendezvous is with the majestic Saturn, adorned with
          the most stunning ring system in the solar system. Get ready for a
          ringside seat to celestial elegance.
        </p>
        <div className="planet_profile">
          <img
            className="animate__animated animate__bounce"
            src={Saturn}
            alt="Saturn"
          />
          <h1 className="animate__animated animate__bounceInLeft">
            Saturn - The Ringed Majesty
          </h1>
        </div>

        <FactLayout
          image={SaturnRing}
          content="Marvel at Saturn's breathtaking rings, a cosmic jewelry collection that would make any space fashionista jealous. These aren't just rings; they're a symphony of icy elegance. "
        />
        <FactLayout
          image={Titan}
          content="Say hello to Titan, Saturn's largest moon, shrouded in a thick atmosphere. It's like a misty moon dream waiting to be explored. "
        />
        <FactLayout
          image={Cassini}
          content="Remember the Cassini spacecraft? It performed a grand finale by diving into Saturn's atmosphere. Talk about a cosmic swan song! "
        />
        <p className="greet">
          As we glide past Saturn, think of it as a cosmic slingshot, propelling
          us to the next destination - Uranus!
        </p>
      </section>
      <Link to="/uranus">
        <button className="bg-blue-900 text-white my-6">Keep gliding</button>
      </Link>
    </PlanetLayout>
  );
};

export default SaturnPage;
