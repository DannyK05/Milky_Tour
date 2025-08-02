import { Link } from "react-router-dom";
import "animate.css";
import Astronaut from "../assets/images/astronaut.png";
import Jupiter from "../assets/images/jupiter/planet_jupiter.png";
import Mars from "../assets/images/mars/planet_mars.png";
import Pluto from "../assets/images/pluto/planet_pluto.png";
import Venus from "../assets/images/venus/planet_venus.png";
import Mercury from "../assets/images/mercury/planet_mercury.png";
import Saturn from "../assets/images/saturn/planet_saturn.png";
import Uranus from "../assets/images/uranus/planet_uranus.png";
import Neptune from "../assets/images/neptune/planet_neptune.png";

const HeroPage = () => {
  return (
    <section className="heroSection ">
      <img
        src={Astronaut}
        className="astronaut  absolute bottom-[20%] md:left-[22%] w-[100%]"
        alt=""
      />
      <img
        src={Mercury}
        className="mercury absolute fadeInRight w-[20%] top-[10%] right-[15%] md:top[10%] md:w-[10%]"
        alt="Mercury"
      />
      <img
        src={Venus}
        className="venus absolute fadeInRight w-[20%] top-[30%] right-[13%] md:top[30%] md:w-[10%]"
        alt="Venus"
      />
      <img
        src={Mars}
        className="mars absolute fadeInRight w-[20%] top-[50%] right-[10%] md:top[50%] md:w-[10%]"
        alt="Mars"
      />
      <img
        src={Jupiter}
        className=" jupiter absolute fadeInRight w-[20%] top-[70%] right-[15%] md:top[70%] md:w-[10%]"
        alt="Jupiter"
      />
      <img
        src={Saturn}
        className="saturn absolute fadeInLeft w-[20%] top-[70%] left-[15%] md:top[90%] md:w-[10%]"
        alt=""
      />
      <img
        src={Uranus}
        className="uranus absolute fadeInLeft w-[20%] top-[50%] left-[13%] md:top[50%] md:w-[10%]"
        alt=""
      />
      <img
        src={Neptune}
        className="neptune absolute fadeInLeft w-[20%] top-[30%] left-[10%] md:top[30%] md:w-[10%]"
        alt=""
      />
      <img
        src={Pluto}
        className="pluto absolute fadeInLeft w-[20%] top-[10%] left-[15%] md:top[10%] md:w-[10%]"
        alt=""
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
            <img src={Mercury} alt="Mercury" />
            <figcaption>Mercury</figcaption>
          </figure>
        </Link>
        <Link to="/venus">
          <figure>
            <img src={Venus} alt="Venus" />
            <figcaption>Venus</figcaption>
          </figure>
        </Link>
        <Link to="/mars">
          <figure>
            <img src={Mars} alt="" />
            <figcaption>Mars</figcaption>
          </figure>
        </Link>
        <Link to="/jupiter">
          <figure>
            <img src={Jupiter} alt="" />
            <figcaption>Jupiter</figcaption>
          </figure>
        </Link>
        <Link to="/saturn">
          <figure>
            <img src={Saturn} alt="" />
            <figcaption>Saturn</figcaption>
          </figure>
        </Link>
        <Link to="/uranus">
          <figure>
            <img src={Uranus} alt="" />
            <figcaption>Uranus</figcaption>
          </figure>
        </Link>
        <Link to="/neptune">
          <figure>
            <img src={Neptune} alt="" />
            <figcaption>Neptune</figcaption>
          </figure>
        </Link>
        <Link to="/pluto">
          <figure>
            <img src={Pluto} alt="" />
            <figcaption>Pluto</figcaption>
          </figure>
        </Link>
      </div>
    </section>
  );
};
export default HeroPage;
