import { Link } from "react-router-dom";

import { PlanetLayout } from "../components/layouts/PlanetLayout";
import { FactLayout } from "../components/layouts/FactLayout";

import Rotation from "/assets/images/mercury/mercury_rotation.jpeg";
import { Caloris, Mercury } from "../components/image-exports";

const MercuryPage = () => {
  return (
    <PlanetLayout id="0">
      <section>
        {/* animating elements from the left overflows the website */}
        <p className="greet animate__animated animate__bounceInLeft">
          Our Milky Tour now brings us to the sweltering domain of Mercury, the
          swift messenger of the solar system. Get ready to witness the scorched
          beauty of the closest planet to the Sun.
        </p>
        <div className="planet_profile">
          <img
            className="animate__animated animate__bounce"
            src={Mercury}
            alt="Mercury"
          />
          <h1 className="animate__animated animate__bounceInLeft">
            Mercury - The Swift Messenger
          </h1>
        </div>

        <p>
          Brace yourselves for extreme temperatures on Mercury, ranging from
          scorching hot to freezing cold. It's like a planet of weather
          extremes, where you could experience summer and winter in the same
          day!
        </p>
        <FactLayout
          image={Caloris}
          content="Observe the Caloris Basin, a colossal impact site that could fit Texas within its borders. It's like a cosmic scar from a colossal collision. "
        />
        <FactLayout
          image={Rotation}
          content="Learn about Mercury's slow rotation, which means it experiences incredibly long days and nights. It's like a planet caught in a cosmic slow dance with the Sun. "
        />
        <p className="greet">
          Feel the heat as we soar past the swift messenger, Mercury, absorbing
          the intensity of the Sun's rays. Now, with newfound energy, our
          spacecraft ventures deeper into the cosmic abyss. Onward, brave
          adventurers, as we continue our Milky Tour beyond the brilliance of
          our star! 🌞🚀✨
        </p>
      </section>
      <Link to="/sun">
        <button className="my-6 bg-blue-900 text-white">
          Our cosmic dance continues
        </button>
      </Link>
    </PlanetLayout>
  );
};

export default MercuryPage;
