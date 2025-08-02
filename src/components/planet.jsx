import "../App.css";
import { Link } from "react-router-dom";
import Visor from "../components/visor";
import { useState } from "react";

export const Planets = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <main className="planet">
      <Link to="/">
        <button className="exit_button">Exit Tour</button>
      </Link>

      <nav
        className={`side-nav fixed px-2 top-60 right-0 md:right-0 bg-[#ad79ec]`}
      >
        <ul>
          <li onClick={toggleVisibility} className="text-white">
            <ion-icon size="large" name="glasses-outline"></ion-icon>
          </li>
        </ul>
      </nav>

      {props.children}

      <Visor id={props.id} isVisible={isVisible} />
    </main>
  );
};
