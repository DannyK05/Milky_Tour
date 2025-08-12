import FlyingUfo from "./icons/FlyingUfo";
import { alienFacts } from "../data/alien-facts";

const AlienPop = ({ className }) => {
  const chosenId = Math.round(Math.random() * 21);

  const chosenFact = alienFacts[chosenId];

  return (
    <div
      className={`${className} alien-popup flex items-center max-w-3/4 flex-col fixed top-20 lg:top-40 space-x-1`}
    >
      <div className="px-2 py-4 flex items-center text-center flex-col">
        <h2 className="text-2xl font-semibold border-b pb-1 w-full">
          Incoming transition from BZorp 👽
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
