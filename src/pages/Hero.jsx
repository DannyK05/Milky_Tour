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
import Layout from "../components/layouts/Layout";

const HeroPage = () => {
  return (
    <Layout>
      <section className="text-xl heroSection ">
        <img
          src={Astronaut}
          className="astronaut w-full lg:w-2/5 absolute bottom-[35%] lg:bottom-[20%] md:left-[22%]m lg:left-[30%]"
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
            <figure className="text-center">
              <img
                className="w-[192px] h-[108px] min-w-[192px] min-h-[108px]"
                width="192px"
                height="108px"
                src={Mercury}
                alt="Image of Mercury"
              />
              <figcaption>Mercury</figcaption>
            </figure>
          </Link>
          <Link to="/venus">
            <figure className="text-center">
              <img
                className="w-[192px] h-[108px] min-w-[192px] min-h-[108px]"
                width="192px"
                height="108px"
                src={Venus}
                alt="image of Venus"
              />
              <figcaption>Venus</figcaption>
            </figure>
          </Link>
          <Link to="/mars">
            <figure className="text-center">
              <img
                className="w-[120px] h-[100px] min-w-[120px] min-h-[100px]"
                width="120px"
                height="100px"
                src={Mars}
                alt="an image of Mars"
              />
              <figcaption>Mars</figcaption>
            </figure>
          </Link>
          <Link to="/jupiter">
            <figure className="text-center">
              <img
                className="w-[168px] h-[108px] min-w-[168px] min-h-[108px]"
                width="168px"
                height="108px"
                src={Jupiter}
                alt="an image of Jupiter"
              />
              <figcaption>Jupiter</figcaption>
            </figure>
          </Link>
          <Link to="/saturn">
            <figure className="text-center">
              <img
                className="w-[192px] h-[108px] min-w-[192px] min-h-[108px]"
                width="192px"
                height="108px"
                src={Saturn}
                alt="an image of Saturn"
              />
              <figcaption>Saturn</figcaption>
            </figure>
          </Link>
          <Link to="/uranus">
            <figure className="text-center">
              <img
                className="w-[162px] h-[108px] min-w-[162px] min-h-[108px]"
                width="162px"
                height="108px"
                src={Uranus}
                alt="an image of Uranus"
              />
              <figcaption>Uranus</figcaption>
            </figure>
          </Link>
          <Link to="/neptune">
            <figure className="text-center">
              <img
                className="w-[162px] h-[108px] min-w-[162px] min-h-[108px]"
                width="162px"
                height="108px"
                src={Neptune}
                alt="an image of Neptune"
              />
              <figcaption>Neptune</figcaption>
            </figure>
          </Link>
          <Link to="/pluto">
            <figure className="text-center">
              <img
                className="w-[192px] h-[108px] min-w-[192px] min-h-[108px]"
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
    </Layout>
  );
};
export default HeroPage;
