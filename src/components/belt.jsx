import { Link } from "react-router-dom";

export  const Belt = (props) =>{
    return(
        <main className='belt'>
          <Link to="/">  <button className="exit_button">Exit Tour</button></Link>
           
            {props.children}
    
        </main>
    )
}