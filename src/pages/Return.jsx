import { Link } from "react-router-dom";

const ReturnPage = () => {
  return (
    <section className=" return bg-[#000026] p-4  h-full text-white">
      <div className="sm:px-24 ">
        <p>
          Dear fellow cosmic travelers, our Milky Tour has been an extraordinary
          odyssey through the wonders of our solar system. From the scorching
          beauty of Venus to the icy realms of the Kuiper Belt, we've marveled
          at celestial wonders, danced with gravitational forces, and embraced
          the vastness of space.
        </p>
      </div>
      <ul className="md:w-[70ch] mx-auto my-4 sm:28">
        <h2>Memorable Highlights:</h2>
        <li className="my-2">
          Venus, the fiery diva, with its runaway greenhouse effect.
        </li>
        <li className="my-2">
          The Red Marvel, Mars, and its towering Olympus Mons.
        </li>
        <li className="my-2">
          The Giant Stormy Sphere, Jupiter, with its Great Red Spot.
        </li>
        <li className="my-2">
          The Ringed Majesty, Saturn, adorned with stunning rings.
        </li>
        <li className="my-2">
          The Tilted Ice Giant, Uranus, and its rebellious spin.
        </li>
        <li className="my-2">
          The Mystic Ice Giant, Neptune, with its dynamic atmosphere.
        </li>
        <li className="my-2">
          The Charming Dwarf, Pluto, and its heart-shaped feature.
        </li>
        <li className="my-2">
          The Celestial Inferno, our close encounter with the Sun.
        </li>
        <li className="my-2">
          The Celestial Dodgeball, navigating the asteroid belt.
        </li>
        <li className="my-2">
          The Icy Realms Beyond, exploring the Kuiper Belt.
        </li>
      </ul>
      <div className="sm:px-24 mx-auto my-4">
        <p className="md:w-[70ch] m-auto">
          As we gracefully descend back to Earth, I want to express my gratitude
          for joining this cosmic adventure. Your curiosity and enthusiasm have
          made this journey truly unforgettable. Remember, the wonders of space
          are always within reach, and the cosmos eagerly awaits your return.
        </p>
      </div>
      <div className="sm:px-24 mx-auto my-4">
        <p className="md:w-[70ch] m-auto">
          On behalf of NASA and the entire Milky Tour team, thank you for
          traveling with us. Whether you're a seasoned space enthusiast or a
          first-time explorer, may the spirit of discovery continue to guide
          you. Until our paths cross again among the stars, farewell and safe
          travels back to Earth! 🌍🚀✨
        </p>
      </div>
      <Link to="/">
        <button className="bg-blue-600 block px-6 py-2 mt-8  mx-auto text-white">
          Byeee 🖐
        </button>
      </Link>
    </section>
  );
};
export default ReturnPage;
