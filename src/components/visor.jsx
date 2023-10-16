import { planetData } from "../data/data"
export const Visor = (props) => {
    <planetData/>
   let body = planetData[props.id]
    return(
        <section id="visor" className="visor hidden fixed top-[40%] left-[20%] z-10 bg-white w-[60%] flex flex-col">
            <div className="planet">
                <h2>{body.name}</h2>
            </div>
            <div className="info">
            <span className="position border">
            {body.position}/8
            </span>
            <span className="temp border">
            {body.temp}
            </span>
            <span className="size border">
            {body.size}
            </span>
            <span className="time border">
            {body.time}
            </span>
            <span className="caution border">
            {body.caution}
            </span>
            </div>
        </section>
    )
}