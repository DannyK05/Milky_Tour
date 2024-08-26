import '../App.css';
import { Link } from "react-router-dom";
import Sidenav from '../components/sidenav';
import  Visor from "../components/visor";
import { useState } from "react";

export  const Planets = (props) =>{
  const[isVisible, setIsVisible] = useState(false)
  const toggleVisibility = () => {
      setIsVisible(!isVisible)
  };
    return(
        <main className='planet'>
          <Link to="/">  <button className="exit_button">Exit Tour</button></Link>
            {props.children}
           <Sidenav toggleVisibility={toggleVisibility}/>  
           <Visor id={props.id} isVisible={isVisible}/>
        </main>
       
    )
}