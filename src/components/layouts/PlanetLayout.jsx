import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "../../App.css";

import Visor from "../visor2";
import AlienPop from "../AlienPopup";
import ScrollToTop from "../../utils/ScrollToTop";

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
    <main className="planet text-center">
      <ScrollToTop />
      <Link to="/">
        <button className="exit_button text-lg">Exit Tour</button>
      </Link>

      <nav className="side-nav z-10 fixed flex items-center justify-center py-1 px-2 top-60 rounded-l-md cursor-pointer right-0 bg-[#ad79ec] hover:px-4 active:px-3">
        <span onClick={toggleVisibility} className="text-white">
          <ion-icon size="large" name="glasses-outline"></ion-icon>
        </span>
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

      <Visor
        id={props.id}
        isVisible={isVisible}
        toggleVisibility={toggleVisibility}
      />
    </main>
  );
};
