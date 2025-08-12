import { Link } from "react-router-dom";

import "animate.css";

import { PlanetLayout } from "../../components/layouts/PlanetLayout";
import { FactLayout } from "../../components/layouts/FactLayout";

import {
  Venus,
  VenusVolcanoes,
  VenusSpin,
} from "../../components/image-exports";

const VenusPage = () => {
  return (
    <PlanetLayout id="1">
      <section>
        {/* animating elements from the left overflows the website */}
        <p className="animate__animated animate__bounceInLeft">
          Welcome, space travelers! Out your observation windows, you will see a
          golden world shimmering in the sunlight — that is Venus, our brilliant
          and fiery next-door neighbor.
        </p>

        <div className="planet_profile">
          <img
            className="animate__animated animate__bounce"
            src={Venus}
            alt="Venus"
          />
          <h1 className="text-#e3af41 animate__animated animate__bounceInLeft">
            Venus - the fiery diva of the solar system
          </h1>
        </div>

        <p className="special">
          Venus is sometimes called Earth's twin because of its similar size and
          rocky composition, but do not let that nickname fool you — she is far
          more temperamental. Wrapped in thick clouds of sulfuric acid and a
          dense carbon dioxide atmosphere, Venus experiences a runaway
          greenhouse effect that traps heat with ruthless efficiency. The
          surface temperature stays around 465°C (869°F) — hot enough to melt
          lead — making it the most scorching planet in our solar system.
        </p>

        <p className="special">
          And here is a surprising twist: a day on Venus lasts longer than a
          year here. That is because Venus rotates so slowly — one full spin
          takes 243 Earth days, while it completes an orbit around the Sun in
          only 225. Even stranger, Venus spins in the opposite direction to most
          planets, a retrograde rotation that makes the Sun rise in the west and
          set in the east.
        </p>

        <FactLayout
          image={VenusSpin}
          content="Venus's retrograde rotation means it spins backward compared to most planets — if you stood on the surface (and somehow survived), you would see the Sun rise in the west and set in the east. Scientists believe this unusual spin may have been caused by a massive collision early in the planet's history, or long-term tidal effects from the Sun's gravitational pull."
        />

        <FactLayout
          image={VenusVolcanoes}
          content="Beneath Venus's thick clouds are more than 1,600 major volcanoes — more than on any other planet in our solar system. While many are likely dormant, radar mapping from missions like Magellan shows evidence of relatively young lava flows, suggesting that Venus might still be geologically active today."
        />

        <p className="special">
          The pressure on Venus is another extreme — standing on its surface
          would feel like being 900 meters (3,000 feet) underwater on Earth.
          Combine that with the heat, and you can see why no spacecraft has
          survived more than about two hours down there. The Soviet Venera
          landers in the 1970s and 1980s braved the planet long enough to send
          back haunting images of a rocky, orange landscape before the
          environment claimed them.
        </p>

        <p className="special">
          But for us, today, Venus is not a place to land — it is a cosmic ally.
          We are using her immense gravitational pull for a slingshot maneuver,
          gaining speed without burning extra fuel. It is like surfing the curve
          of spacetime itself, letting the planet's momentum propel us deeper
          into the solar system.
        </p>

        <p className="special">
          As Venus drifts into the distance, we adjust our course. The next
          chapter of our journey awaits, where the smallest planet packs some of
          the biggest surprises.
        </p>

        <Link to="/mercury">
          <button className="bg-blue-900 my-6 text-white">
            Onward to Mercury! 🚀✨
          </button>
        </Link>
      </section>
    </PlanetLayout>
  );
};

export default VenusPage;
