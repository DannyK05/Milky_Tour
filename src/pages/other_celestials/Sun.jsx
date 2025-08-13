import { Link } from "react-router-dom";

import { BeltLayout } from "../../components/layouts/BeltLayout";
import { FactLayout } from "../../components/layouts/FactLayout";

import Solarflare from "/assets/images/sun/solar_flare.webp";
import Solarwind from "/assets/images/sun/solar_wind.jpeg";
import Solarspot from "/assets/images/sun/solar_spot.webp";
import sun from "/assets/images/sun/sun.webp";

const SunPage = () => {
  return (
    <BeltLayout>
      <section className="text-xl flex items-center flex-col space-y-2">
        {/* animating elements from the left overflows the website */}
        {/* animating elements from the left overflows the website */}
        <p className="greet w-full animate__animated animate__bounceInLeft">
          Prepare yourselves for the most awe-inspiring moment of our Milky Tour
          — we are now approaching the blazing heart of our solar system: the
          mighty Sun. This colossal sphere of plasma is so massive that it
          accounts for 99.8% of all the mass in the solar system. Without it,
          life as we know it could never exist. Brace yourselves for a front-row
          seat to the greatest show in space!
        </p>

        <div className="planet_profile">
          <img
            className="animate__animated animate__bounce"
            src={sun}
            alt="Sun"
          />
          <h1 className="animate__animated animate__bounceInLeft">
            Sun — The Cosmic Inferno
          </h1>
        </div>

        <FactLayout
          image={Solarflare}
          content="Witness the raw power of solar flares — titanic bursts of energy and radiation that erupt from the Sun's surface. Each flare can release energy equivalent to millions of nuclear bombs in just minutes. These fiery arcs dance across the corona, sending shockwaves that can ripple all the way to Earth."
        />

        <FactLayout
          image={Solarspot}
          content="Look closely at those darker patches — sunspots. These are cooler regions caused by intense magnetic fields twisting and tangling within the Sun. They can grow larger than our entire planet and often serve as the launch sites for massive solar storms."
        />

        <FactLayout
          image={Solarwind}
          content="Now feel the solar wind — a constant stream of charged particles flowing outward from the Sun at up to 900 km/s (about 2 million mph). This invisible gale shapes the space weather across our solar system, paints Earth's skies with auroras, and can even disrupt satellites and power grids."
        />

        <p>
          From this vantage point, you can see the Sun's outer atmosphere, the
          corona, shimmering like a ghostly crown. It burns hotter than the
          surface itself — a scientific mystery still puzzling astronomers.
          NASA's Parker Solar Probe is currently diving closer to the Sun than
          any spacecraft in history to uncover its secrets.
        </p>

        <p className="greet">
          The Sun is both our life-giver and a cosmic force to be reckoned with.
          As our ship's shields absorb its blinding light and searing heat, we
          carry that energy forward, leaving the golden giant behind. Our next
          destination awaits — a small, dusty world with a big reputation: Mars,
          the red planet. 🌞🚀✨
        </p>

        <Link to="/mars">
          <button className="my-6 bg-blue-900 text-white">
            Next stop: the Red Planet, Mars!
          </button>
        </Link>
      </section>
    </BeltLayout>
  );
};
export default SunPage;
