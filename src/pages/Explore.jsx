import { Link } from "react-router-dom";

import { Orion, IvaSuit } from "../components/image-exports";
const ExplorePage = () => {
  return (
    <div className="bg-[#000026] flex items-center flex-col w-full text-center text-xl p-8 text-white">
      <Link to="/">
        <button className="bg-blue-600 block px-6 py-2 mb-12 text-white">
          Exit Tour
        </button>
      </Link>
      <div className="text-xl mb-12">
        <h1 className="pr-6">Explore</h1>
      </div>

      <div className="flex items-center flex-col w-full ">
        <p className="w-4/5">
          Welcome aboard, fellow traveler! 🌌 You've just stepped into the
          embarkation hall of <strong>NASA's Milky Tour</strong> — your ticket
          to the grandest journey this side of the galaxy.
        </p>

        <p className="w-4/5">
          I'll be your virtual tour guide, your companion in wonder, as we set
          sail across the cosmic ocean. Today, our path stretches from our blue
          home, Earth, to the icy edges of Pluto and back — all aboard our
          gleaming spacecraft, the <strong>Orion&nbsp;3</strong>.
        </p>

        <div className="flex justify-center items-center pt-4 pb-8">
          <img src={Orion} alt="Orion 3 spacecraft" />
        </div>

        <p className="w-4/5">
          The Orion 3 isn't just a ship; she's a masterpiece of exploration. Her
          cutting-edge propulsion system bends time in our favor, shortening the
          leap between worlds. With panoramic windows stretching like crystal
          domes, you'll drink in the sight of swirling nebulae and far-off
          planets as if they were just beyond your fingertips.
        </p>

        <p className="w-4/5">
          Want more than just a view? Slip into our{" "}
          <em>Virtual Reality Chambers</em>, where every celestial stop springs
          to life around you. Walk the dusty plains of Mars, soar through
          Jupiter's turbulent clouds, or stand at the rim of Saturn's icy rings
          without ever leaving the ship.
        </p>

        <p className="w-4/5">
          And for the dreamers among us, our zero-gravity lounges offer a place
          to drift — literally — as the universe glides by.
        </p>
      </div>

      <br />

      <p className="w-4/5">
        Before we depart, it's time to suit up in your{" "}
        <strong>Special Intra-Vehicular Activity (IVA) gear</strong>.
      </p>

      <div className="flex justify-center">
        <img src={IvaSuit} alt="IVA suit" />
      </div>

      <p className="w-4/5">
        These suits are designed with comfort and cosmic flair in mind:
        <br />• <strong>Embedded Haptic Feedback</strong> — feel the gentle
        tremors of Saturn's storms or the subtle pull of Jupiter's gravity. •{" "}
        <strong>Augmented Reality Visor</strong> — your personal heads-up
        display, streaming live details about every world we pass.
      </p>

      <p className="w-4/5">
        Now… straps tight, hearts steady. The engines hum, the countdown begins.
        In moments, we'll pierce the sky and chase the Sun itself. This isn't
        just a tour — it's the start of your personal chapter in the story of
        the stars. 🚀✨
      </p>

      <Link to="/venus">
        <button className="bg-blue-600 block px-6 py-2 mt-8 mb-12 mx-auto text-white">
          Set Course for Venus →
        </button>
      </Link>
    </div>
  );
};

export default ExplorePage;
