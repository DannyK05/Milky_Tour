import { Link } from "react-router-dom";

import { Orion, IvaSuit } from "../assets";
const ExplorePage = () => {
  return (
    <div className="bg-[#000026] p-8 h-full text-white">
      <Link to="/">
        <button className="bg-blue-600 block px-6 py-2 mb-12 text-white">
          Exit Tour
        </button>
      </Link>
      <div className="text-xl mb-12">
        <h1 className="pr-6"> Explore</h1>
      </div>

      <div className="sm:px-24 ">
        <p className="md:w-[70ch] m-auto">
          Welcome, space enthusiasts, to NASA's Milky Tour!
        </p>
        <p className="md:w-[70ch] m-auto">
          I'm your virtual tour guide, and I'm thrilled to take you on an
          out-of-this-world adventure. Today, we're embarking on a cosmic
          journey from Earth to Pluto and back aboard our state-of-the-art
          spacecraft, the Orion 3.
        </p>

        <div className="flex justify-center items-center pt-4 pb-8 ">
          <img src={Orion} alt="" className="" />
        </div>
        <p className="md:w-[70ch] m-auto">
          This new version of Orion comes with more features than it's
          predecessors ranging from; a cutting-edge propulsion system for faster
          and more efficient travel, reducing the time between each celestial
          stop.
        </p>
        <p className="md:w-[70ch] m-auto">
          Enjoy panoramic views of space with our improved observation windows,
          providing an immersive experience as we cruise through the cosmos.
        </p>
        <p className="md:w-[70ch] m-auto">
          Immerse yourself even further with virtual reality tours of each
          celestial destination, enhancing your understanding and appreciation
          of the wonders beyond.
        </p>
        <p className="md:w-[70ch] m-auto">
          You can also relax in zero-gravity lounges during the journey,
          offering a unique and comfortable space experience.
        </p>
      </div>
      <br />
      <p className="md:w-[70ch] m-auto">
        Now, before we take off, let's don our Special Intra-Vehicular Activity
        (IVA) suits.
      </p>
      <div className="flex justify-center">
        <img src={IvaSuit} alt="" />
      </div>
      <p className="md:w-[70ch] m-auto">
        These suits are designed for comfort and safety during our journey.
        Their features include:
        <br />
        Embedded Haptic Feedback: Feel the subtle vibrations and sensations that
        correspond to the celestial bodies we visit.
        <br />
        Augmented Reality Visor: Get real-time information about each planet and
        enjoy augmented reality features, making the tour both informative and
        captivating.
      </p>
      <p className="md:w-[70ch] m-auto">
        Now that we're suited up, fasten your seat belts as we prepare to launch
        into the cosmos. Get ready for an unforgettable adventure as we explore
        the wonders of our solar system and beyond. Buckle up and brace
        yourselves for an experience of a lifetime! 🚀✨.
      </p>
      <Link to="/venus">
        <button className="bg-blue-600 block px-6 py-2 mt-8 mb-12 mx-auto text-white">
          Let's move to Venus
        </button>
      </Link>
    </div>
  );
};

export default ExplorePage;
