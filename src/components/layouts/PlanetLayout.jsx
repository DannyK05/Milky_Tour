import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "../../App.css";

import Visor from "../Visor";
import AlienPop from "../AlienPopup";

export const PlanetLayout = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayAlien, setDisplayAlien] = useState(false);
  const [alienAnimation, setAlienAnimation] = useState("appear");

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    const showAlien = () => {
      setDisplayAlien(true);
      setAlienAnimation("appear");

      // Hide after 5 seconds
      setTimeout(() => {
        setAlienAnimation("disappear");
        setTimeout(() => setDisplayAlien(false), 500);
      }, 5000);
    };

    // Show immediately and then repeat every 20s
    showAlien();
    const intervalId = setInterval(showAlien, 20000);

    return () => clearInterval(intervalId); // Cleanup
  }, []);

  return (
    <main className="planet">
      <Link to="/">
        <button className="exit_button">Exit Tour</button>
      </Link>

      <nav className="side-nav fixed px-2 top-60 right-0 bg-[#ad79ec]">
        <ul>
          <li onClick={toggleVisibility} className="text-white">
            <ion-icon size="large" name="glasses-outline"></ion-icon>
          </li>
        </ul>
      </nav>

      {props.children}

      {displayAlien && (
        <AlienPop
          className={`animate__animated ${
            alienAnimation === "appear"
              ? "animate__fadeInLeftBig"
              : "animate__fadeOutRightBig"
          }`}
        />
      )}

      <Visor id={props.id} isVisible={isVisible} />
    </main>
  );
};
