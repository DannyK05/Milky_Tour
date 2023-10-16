import { Link } from "react-router-dom";

export  const Asteroid = (props) =>{
    return(
        <main className='asteroid'>
          <Link to="/">  <button className="exit_button">Exit Tour</button></Link>
           
            {props.children}
    
        </main>
    )
}