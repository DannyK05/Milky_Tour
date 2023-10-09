import '../App.css';
export const Fact = (props) => {
    return(
        <div className="fact flex-column ">
            <img src= {props.image}/>
            <p>{props.content}</p>
        </div>
    )
}