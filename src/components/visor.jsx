import { planetData } from "../data/planets-data";
const Visor = (props) => {
  let body = planetData[props.id];
  return (
    <section
      id="visor"
      className={`visor ${
        props.isVisible ? "" : "hidden"
      } fixed  px-5 top-[30%] md:left-[20%] border-4 z-10 w-[90%] md:w-[70%] flex justify-between items-center flex-col`}
    >
      <div className="name border text-[#ad79ec] w-1/2 bg-white border-b-0 pt-1">
        <h2>{body.name}</h2>
      </div>
      <div className="info flex border-x-0 py-2 border w-full items-center justify-between">
        <span className="position flex flex-col align-center w-1/5  ">
          <h2 className="inline">Positon:</h2>
          <p>
            {body.position}
            <sup>
              {body.position === 1
                ? "st"
                : body.position === 2
                ? "nd"
                : body.position === 3
                ? "rd"
                : "th"}
            </sup>
          </p>
        </span>

        <span className="temp  flex flex-col items-center w-1/5 ">
          <h2 className="inline">Temperature:</h2>
          <p>
            {body.temp}
            <sup>o</sup>C
          </p>
        </span>

        <span className="size  flex flex-col items-center w-1/5 ">
          <h2 className="inline">Size:</h2>
          <p>{body.size.toLocaleString()}km</p>
        </span>

        <span className="time flex flex-col items-center w-1/4 ">
          <h2 className="inline">Duration of one rotation:</h2>
          <p>{body.time}</p>
        </span>
      </div>
      <span className="time flex flex-col border-b  items-center w-full ">
        <h2 className="inline">Atmosphere:</h2>
        <p>{body.atmosphere}</p>
      </span>
      <div className="caution  flex flex-col border-4 border-y-2 p-2 items-center  ">
        <h2 className="inline">Caution:</h2>
        <p>{body.caution}</p>
      </div>
    </section>
  );
};
export default Visor;
