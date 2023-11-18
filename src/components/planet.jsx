import '../App.css';
import { Link } from "react-router-dom";
import Sidenav from '../components/sidenav';

export  const Planets = (props) =>{
    return(
        <main className='planet'>
          <Link to="/">  <button className="exit_button">Exit Tour</button></Link>
            {props.children}
           <Sidenav/>  
        </main>
    )
}