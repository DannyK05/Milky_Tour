import { Link } from "react-router-dom";

const ReturnPage = () => {
  return (
    <section className="text-xl return bg-[#000026] p-4 h-full text-white">
      <div className="sm:px-24">
        <p>
          Dear fellow cosmic travelers, our Milky Tour has been an extraordinary
          odyssey — a journey across light-years of wonder, through the heart of
          our solar system and out into its frozen frontiers. We have sailed on
          beams of sunlight, danced with planetary giants, and stood at the edge
          of the Sun's reach, where the warmth fades into eternal night.
        </p>
      </div>

      <ul className="md:w-[70ch] mx-auto my-4 sm:28">
        <h2 className="text-lg font-semibold mb-2">Memorable Highlights:</h2>
        <li className="my-2">
          🔥 Venus — the fiery diva with a runaway greenhouse effect.
        </li>
        <li className="my-2">
          🔴 Mars — the Red Marvel crowned by Olympus Mons, the tallest volcano
          in the solar system.
        </li>
        <li className="my-2">
          🌪 Jupiter — the Giant Stormy Sphere, home to the centuries-old Great
          Red Spot.
        </li>
        <li className="my-2">
          💍 Saturn — the Ringed Majesty with shimmering bands of ice and rock.
        </li>
        <li className="my-2">
          🌀 Uranus — the Tilted Ice Giant, spinning sideways like a cosmic
          acrobat.
        </li>
        <li className="my-2">
          🌊 Neptune — the Mystic Ice Giant, alive with fast winds and swirling
          storms.
        </li>
        <li className="my-2">
          💙 Pluto — the Charming Dwarf with its heart-shaped Tombaugh Regio.
        </li>
        <li className="my-2">
          ☀️ The Sun — our Celestial Inferno, radiating life and energy.
        </li>
        <li className="my-2">
          🪨 The Asteroid Belt — a Celestial Dodgeball game between Mars and
          Jupiter.
        </li>
        <li className="my-2">
          ❄️ The Kuiper Belt — the Icy Realms Beyond, where ancient worlds drift
          in shadow.
        </li>
      </ul>

      <div className="sm:px-24 mx-auto my-4">
        <p className="md:w-[70ch] m-auto">
          As we gently descend toward Earth, the blue marble comes back into
          view — fragile, beautiful, and full of promise. This voyage has been
          more than sightseeing; it's been a reminder that exploration is woven
          into the very fabric of who we are. Every crater, every ring, every
          icy cliff we've visited holds a lesson about our place in the cosmos.
        </p>
      </div>

      <div className="sm:px-24 mx-auto my-4">
        <p className="md:w-[70ch] m-auto">
          On behalf of NASA and the entire Milky Tour team, thank you for
          traveling with us. Whether you are a lifelong stargazer or someone
          seeing these wonders for the first time, may your curiosity remain as
          boundless as the universe itself. Until our orbits cross again among
          the stars — farewell, safe travels, and keep looking up. 🌍🚀✨
        </p>
      </div>

      <Link to="/">
        <button className="bg-blue-600 block px-6 py-2 mt-8 mx-auto text-white rounded hover:bg-blue-500 transition">
          Byeee 🖐
        </button>
      </Link>
    </section>
  );
};
export default ReturnPage;
