import { Link } from "react-router-dom";

import { PlanetLayout } from "../../components/layouts/PlanetLayout";
import { FactLayout } from "../../components/layouts/FactLayout";

import Rotation from "/assets/images/mercury/mercury_rotation.jpeg";
import { Caloris, Mercury } from "../../components/image-exports";

const MercuryPage = () => {
  return (
    <PlanetLayout id="0">
      <section>
        {/* animating elements from the left overflows the website */}
        <p className="greet animate__animated animate__bounceInLeft">
          Our Milky Tour now brings us to the scorched and mysterious realm of
          Mercury — the swift messenger of the solar system. Hugging closest to
          the Sun, this tiny world races around its orbit in just 88 Earth days.
          Get ready to witness a place where the extremes push the very limits
          of what a planet can endure.
        </p>

        <div className="planet_profile">
          <img
            className="animate__animated animate__bounce"
            src={Mercury}
            alt="Mercury"
          />
          <h1 className="animate__animated animate__bounceInLeft">
            Mercury — The Swift Messenger
          </h1>
        </div>

        <p>
          Here, temperatures swing from blistering highs of about 430°C (800°F)
          in the daytime to freezing lows of -180°C (-290°F) at night. With
          virtually no atmosphere to trap or distribute heat, Mercury is a
          planet of brutal contrasts — you could experience searing “summer” and
          bone-chilling “winter” in the span of one long day.
        </p>

        <FactLayout
          image={Caloris}
          content="Behold the Caloris Basin, one of the largest impact craters in the solar system — so wide it could swallow the entire state of Texas. This massive scar was formed billions of years ago when a giant asteroid slammed into Mercury, sending shockwaves across the planet's surface. Those ripples are still visible today in the form of twisted cliffs and ridges."
        />

        <FactLayout
          image={Rotation}
          content="Mercury rotates so slowly that a single day — from sunrise to sunrise — lasts 176 Earth days. Oddly enough, it spins exactly three times on its axis for every two trips around the Sun, a rare orbital dance known as a 3:2 spin-orbit resonance. This cosmic rhythm means if you stood in the same spot, you could watch the Sun appear to rise, reverse direction, and then set again."
        />

        <p>
          Despite its proximity to the Sun, Mercury holds water ice in
          permanently shadowed craters at its poles — a discovery confirmed by
          NASA's MESSENGER spacecraft. These deep pockets never see sunlight,
          making them some of the coldest spots in the solar system.
        </p>

        <p className="greet">
          As we glide past Mercury, you can feel the Sun's brilliance pouring
          through the spacecraft's protective shields. This close, the Sun's
          light is more than seven times stronger than on Earth. We carry this
          energy with us as we leave the swift messenger behind, our sights now
          set on the very heart of our solar system — the Sun itself. 🌞🚀✨
        </p>

        <Link to="/sun">
          <button className="my-6 bg-blue-900 text-white">
            Our cosmic dance continues
          </button>
        </Link>
      </section>
    </PlanetLayout>
  );
};

export default MercuryPage;
