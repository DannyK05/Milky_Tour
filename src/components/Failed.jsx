import CrashingUfo from "./icons/CrashingUfo";

const Failed = () => {
  return (
    <div className="flex items-center w-full flex-col">
      <p className="text-2xl">Uh Oh!!, Bzorp didn't deliver the mail today</p>
      <CrashingUfo />
    </div>
  );
};

export default Failed;
