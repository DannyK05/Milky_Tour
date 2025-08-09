import FlyingUfo from "./icons/FlyingUfo";
import { alienFacts } from "../data/alien-facts";

const AlienPop = ({ className }) => {
  const chosenId = Math.round(Math.random() * 21);

  const chosenFact = alienFacts[chosenId];

  return (
    <div
      className={`${className} alien-popup flex items-center fixed top-20 lg:top-40 space-x-1`}
    >
      <div className="px-2 py-4 ">
        <h2 className="text-2xl font-semibold border-b pb-1">
          👽 Bzorp - wAnTeD fugitive
        </h2>
        <p className="font-bold text-xl">{chosenFact.encryptedText}</p>
        <span>translating...</span>
        <p className="font-medium">{chosenFact.translatedText}</p>
      </div>
      <FlyingUfo />
    </div>
  );
};

export default AlienPop;
