import { Link } from "react-router-dom";

import "animate.css";

import Astronaut from "/assets/images/astronaut.png";
import Jupiter from "/assets/images/jupiter/planet_jupiter.png";
import Mars from "/assets/images/mars/planet_mars.png";
import Pluto from "/assets/images/pluto/planet_pluto.png";
import Venus from "/assets/images/venus/planet_venus.png";
import Mercury from "/assets/images/mercury/planet_mercury.png";
import Saturn from "/assets/images/saturn/planet_saturn.png";
import Uranus from "/assets/images/uranus/planet_uranus.png";
import Neptune from "/assets/images/neptune/planet_neptune.png";

const HeroPage = () => {
  return (
    <section className="heroSection ">
      <img
        src={Astronaut}
        className="astronaut w-full absolute bottom-[20%] md:left-[22%]m lg:left-[30%]"
        alt="an image of Saturn"
      />
      <img
        src={Mercury}
        className="mercury absolute fadeInRight w-[20%] top-[10%] right-[15%] md:top[10%] md:w-[10%]"
        alt="an image of Mercury"
      />
      <img
        src={Venus}
        className="venus absolute fadeInRight w-[20%] top-[30%] right-[13%] md:top[30%] md:w-[10%]"
        alt="an image of Venus"
      />
      <img
        src={Mars}
        className="mars absolute fadeInRight w-[20%] top-[50%] right-[10%] md:top[50%] md:w-[10%]"
        alt="an image of Mars"
      />
      <img
        src={Jupiter}
        className=" jupiter absolute fadeInRight w-[20%] top-[70%] right-[15%] md:top[70%] md:w-[10%]"
        alt="an image of Jupiter"
      />
      <img
        src={Saturn}
        className="saturn absolute fadeInLeft w-[20%] top-[70%] left-[15%] md:top[90%] md:w-[10%]"
        alt="an image of Saturn"
      />
      <img
        src={Uranus}
        className="uranus absolute fadeInLeft w-[20%] top-[50%] left-[13%] md:top[50%] md:w-[10%]"
        alt="an image of Uranus"
      />
      <img
        src={Neptune}
        className="neptune absolute fadeInLeft w-[20%] top-[30%] left-[10%] md:top[30%] md:w-[10%]"
        alt="an image of Neptune"
      />
      <img
        src={Pluto}
        className="pluto absolute fadeInLeft w-[20%] top-[10%] left-[15%] md:top[10%] md:w-[10%]"
        alt="an image of Pluto"
      />
      <header>
        <p className="">Milky Tour </p>
      </header>

      <div className=" content text-white">
        <h1 className=""> Transition through Planets</h1>
        <p> Journey into the Universe: Epic planetary awaits your Journey</p>
        <Link to="/explore">
          <button className="bg-blue-900 m-10 text-white">
            Start Exploring 🚀
          </button>
        </Link>
      </div>
      <div className="carousel flex ">
        <Link to="/mercury">
          <figure>
            <img
              width="192px"
              height="108px"
              src={Mercury}
              alt="Image of Mercury"
            />
            <figcaption>Mercury</figcaption>
          </figure>
        </Link>
        <Link to="/venus">
          <figure>
            <img
              width="192px"
              height="108px"
              src={Venus}
              alt="image of Venus"
            />
            <figcaption>Venus</figcaption>
          </figure>
        </Link>
        <Link to="/mars">
          <figure>
            <img
              width="192px"
              height="108px"
              src={Mars}
              alt="an image of Mars"
            />
            <figcaption>Mars</figcaption>
          </figure>
        </Link>
        <Link to="/jupiter">
          <figure>
            <img
              width="192px"
              height="108px"
              src={Jupiter}
              alt="an image of Jupiter"
            />
            <figcaption>Jupiter</figcaption>
          </figure>
        </Link>
        <Link to="/saturn">
          <figure>
            <img
              width="192px"
              height="108px"
              src={Saturn}
              alt="an image of Saturn"
            />
            <figcaption>Saturn</figcaption>
          </figure>
        </Link>
        <Link to="/uranus">
          <figure>
            <img
              width="192px"
              height="108px"
              src={Uranus}
              alt="an image of Uranus"
            />
            <figcaption>Uranus</figcaption>
          </figure>
        </Link>
        <Link to="/neptune">
          <figure>
            <img
              width="192px"
              height="108px"
              src={Neptune}
              alt="an image of Neptune"
            />
            <figcaption>Neptune</figcaption>
          </figure>
        </Link>
        <Link to="/pluto">
          <figure>
            <img
              width="192px"
              height="108px"
              src={Pluto}
              alt="an image of Pluto"
            />
            <figcaption>Pluto</figcaption>
          </figure>
        </Link>
      </div>
    </section>
  );
};
export default HeroPage;
