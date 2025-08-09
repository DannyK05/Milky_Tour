import { Link } from "react-router-dom";

import { BeltLayout } from "../../components/layouts/BeltLayout";
import { FactLayout } from "../../components/layouts/FactLayout";

import AsteroidBelt from "/assets/images/asteroid/asteroid_belt.webp";
import Ceres from "/assets/images/asteroid/ceres.jpeg";
import Trojan from "/assets/images/asteroid/trojan.webp";
const AsteroidPage = () => {
  return (
    <BeltLayout>
      <section>
        {/* animating elements from the left overflows the website */}
        {/* animating elements from the left overflows the website */}
        <p className="greet animate__animated animate__bounceInLeft">
          Our Milky Tour now takes us through the asteroid belt, a vast expanse
          of rocky debris between Mars and Jupiter. Brace yourselves for a
          celestial game of dodgeball!
        </p>
        <div className="planet_profile">
          <img
            className="animate__animated animate__bounce"
            src={AsteroidBelt}
            alt="Asteroid belt"
          />
          <h1 className="animate__animated animate__bounceInLeft">
            Asteroid Belt - Celestial Dodgeball
          </h1>
        </div>
        <FactLayout
          image={AsteroidBelt}
          content="Peer out your windows and witness the rocky neighbors of the solar system. These asteroids are like ancient travelers, remnants from the early days of our cosmic neighborhood. "
        />
        <FactLayout
          image={Ceres}
          content="Spot Ceres, the largest object in the asteroid belt and a dwarf planet in its own right. It's like an oasis in this cosmic desert, standing out amidst the asteroid crowd. "
        />
        <FactLayout
          image={Trojan}
          content="Learn about the Trojan asteroids, loyal companions that share orbits with Jupiter. It's like a celestial convoy, traveling in harmony with the mighty gas giant. "
        />
        <p className="greet">
          Maneuvering through the asteroid belt requires precision and finesse.
          Thanks to Orion 3's advanced navigation systems, we'll gracefully
          weave through this rocky cosmic dance without a scratch.
        </p>
      </section>
      <Link to="/jupiter">
        <button className="my-6 bg-blue-900 text-white">
          Next stop: the mighty gas giant, Jupiter!
        </button>
      </Link>
    </BeltLayout>
  );
};
export default AsteroidPage;
