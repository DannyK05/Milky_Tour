import '../App.css';
export const Fact = (props) => {
    return(
        <div className="fact">
            <img src= {props.image}/>
            <p>{props.content}</p>
        </div>
    )
}