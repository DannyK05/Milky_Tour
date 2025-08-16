import FlyingUfo from "./icons/FlyingUfo";
import { alienFacts } from "../data/alien-facts";

const AlienPop = ({ className }) => {
  const chosenId = Math.round(Math.random() * 21);

  const chosenFact = alienFacts[chosenId];

  return (
    <div
      className={`${className} alien-popup fixed top-20 lg:top-40 flex flex-col items-center w-4/5 lg:max-w-3/4 space-y-4`}
    >
      <div className="px-4 py-6 flex flex-col items-center text-center space-y-3 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg">
        <h2 className="text-xl lg:text-2xl font-semibold border-b pb-1 w-full">
          Incoming Transmission from BZorp 👽
        </h2>
        <p className="font-bold text-lg lg:text-xl">
          {chosenFact.encryptedText}
        </p>
        <span className="italic text-sm text-gray-300">translating...</span>
        <p className="font-medium decrypting">{chosenFact.translatedText}</p>
      </div>
      <FlyingUfo />
    </div>
  );
};

export default AlienPop;
