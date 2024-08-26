import { planetData } from "../data/data";
const Visor = (props) => {
  let body = planetData[props.id];
  return (
    <section
      id="visor"
      className={`visor ${
        props.isVisible ? "" : "hidden"
      } fixed py-[20px] px-[20px] top-[30%] h-auto md:left-[20%] z-10 w-[90%] md:w-[70%] md:h-[40%] flex justify-between items-center flex-col`}
    >
      <div className=" name">
        <h2>{body.name}</h2>
      </div>
      <div className="info flex  items-center justify-between">
        <span className="position flex flex-col align-center w-[20%]  ">
          <h2 className="inline">Positon:</h2>
          <p>{body.position}/8</p>
        </span>

        <span className="temp  flex flex-col items-center w-[20%] ">
          <h2 className="inline">Temperature:</h2>
          <p>{body.temp}C</p>
        </span>

        <span className="size  flex flex-col items-center w-[20%] ">
          <h2 className="inline">Size:</h2>
          <p>{body.size}km</p>
        </span>

        <span className="time flex flex-col items-center w-[25%] ">
          <h2 className="inline">Duration of one rotation:</h2>
          <p>{body.time}</p>
        </span>
      </div>
      <div className="caution  flex flex-col items-center  ">
        <h2 className="inline">Info:</h2>
        <p>{body.caution}</p>
      </div>
    </section>
  );
};
export default Visor;
