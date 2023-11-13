import { planetData } from "../data/data"
const Visor = (props) => {
    <planetData/>
   let body = planetData[props.id]
    return(
        <section id="visor" className="visor hidden fixed py-[20px] px-[20px] top-[30%] h-auto md:left-[20%] z-10 w-[90%] md:w-[70%] md:h-[40%] flex justify-between align-center flex-col">
            <div className=" name">
                <h2>{body.name}</h2>
            </div>
            <div className="info flex  align-center justify-between">
            <span className="position flex flex-col align-center w-[20%]  ">
            <h2 className="inline">Positon in solar system:</h2>
            <p >{body.position}/8</p>
            </span>
            
            <span className="temp  flex flex-col align-center w-[20%] ">
            <h2 className="inline">Temperature:</h2>
            <p>{body.temp}C</p>
            </span>

            <span className="size  flex flex-col align-center w-[20%] ">
            <h2 className="inline">Size of {body.name}:</h2>
            <p>{body.size}km</p>
            </span>

            <span className="time flex flex-col align-center w-[25%] ">
            <h2 className="inline">Time it takes to complete one revolution:</h2>
            <p>{body.time}</p>
            </span>

            </div>
            <div className="caution  flex flex-col align-center  ">
            <h2 className="inline">Info:</h2>
            <p>{body.caution}</p>
            </div>
        </section>
    )
}
export default Visor