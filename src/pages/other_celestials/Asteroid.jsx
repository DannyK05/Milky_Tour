import { Link } from "react-router-dom";

import { BeltLayout } from "../../components/layouts/BeltLayout";
import { FactLayout } from "../../components/layouts/FactLayout";

import AsteroidBelt from "/assets/images/asteroid/asteroid_belt.webp";
import Ceres from "/assets/images/asteroid/ceres.jpeg";
import Trojan from "/assets/images/asteroid/trojan.webp";
const AsteroidPage = () => {
  return (
    <BeltLayout>
      <section className="text-xl flex items-center flex-col space-y-2">
        {/* animating elements from the left overflows the website */}
        <p className="greet w-full animate__animated animate__bounceInLeft">
          Hold on tight, travelers — our Milky Tour now carries us into the
          mysterious expanse between Mars and Jupiter: the Asteroid Belt.
          Imagine a region where countless rocky bodies, from pebble-sized
          shards to mountain-sized giants, drift in an endless ballet around the
          Sun. Contrary to the wild scenes in sci-fi movies, the asteroids here
          are spaced far apart… but trust me, you still wouldn't want to take
          your helmet off.
        </p>

        <div className="planet_profile">
          <img
            className="animate__animated animate__bounce"
            src={AsteroidBelt}
            alt="Asteroid belt"
          />
          <h1 className="animate__animated animate__bounceInLeft">
            Asteroid Belt — Celestial Dodgeball
          </h1>
        </div>

        <FactLayout
          image={AsteroidBelt}
          content="Gaze out the observation deck and you'll see our rocky neighbors — ancient fragments left over from the dawn of the solar system, over 4.5 billion years old. They're like cosmic time capsules, preserving clues about how the planets formed."
        />

        <FactLayout
          image={Ceres}
          content="There's Ceres, the largest object in the belt and officially a dwarf planet. Spanning about 940 km (584 miles) across, it's big enough to hold water ice beneath its surface — a shimmering treasure in the midst of a dusty wasteland."
        />

        <FactLayout
          image={Trojan}
          content="And look far ahead — the Trojan asteroids, loyal followers of Jupiter, sharing its orbit like a cosmic caravan. These clusters are locked in a delicate gravitational dance, proving that not all space travelers wander alone."
        />

        <p className="greet">
          Steering through the belt requires the precision of a master pilot.
          Fortunately, Orion 3's navigation systems are charting a safe, elegant
          path — weaving between tumbling boulders and silent monoliths. The
          ride is smooth, but keep your cameras ready: you never know when a
          tumbling asteroid might glide past, silhouetted against the distant
          Sun.
        </p>

        <Link to="/jupiter">
          <button className="my-6 bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            🌪️ Next up: Jupiter, the Giant!
          </button>
        </Link>
      </section>
    </BeltLayout>
  );
};
export default AsteroidPage;
