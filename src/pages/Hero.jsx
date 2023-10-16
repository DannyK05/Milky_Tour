import React from 'react';
import  './Hero.css';
import { Link } from "react-router-dom";

import Astronaut from "../assets/astronaut.png"
import Jupiter from  '../assets/Jupiter/planet_jupiter.png'
import Mars from  '../assets/Mars/planet_mars.png'
import Pluto from  '../assets/Pluto/planet_pluto.jpg'
import Venus from  '../assets/Venus/planet_venus.png'
import Mercury from  '../assets/Mercury/planet_mercury.png'
import Saturn from  '../assets/Saturn/planet_saturn.png'
import Uranus from  '../assets/Uranus/planet_uranus.png'
import Neptune from  '../assets/Neptune/planet_neptune.png'
const Hero =() => {

    return (

        <section className='heroSection '>
            <img src={Astronaut} className='astronaut  absolute bottom-[30%] md:left-[20%] w-[100%]' alt=""/>
            <header>
            <p className=''>Milky Tour </p>
            </header>
        
            <div className=' content text-white'>
                <h1 className=''> Transition through Planets</h1>
                <p> Journey into the Universe: Epic planetary awaits your Journey</p>
            <Link to="/explore"> <button className='bg-blue-900 m-10 text-white'> Start Exploring 🚀</button></Link>   
            
            </div>
            <div className='carousel flex '>
                <Link to="/mercury"><figure>
                    <img src={Mercury} alt="Mercury" />
                    <figcaption>Mercury</figcaption>
                </figure></Link>
                <Link to="/venus"><figure>
                    <img src={Venus} alt="Venus" />
                    <figcaption>Venus</figcaption>
                </figure></Link>
                <Link to="/mars"><figure>
                    <img src={Mars} alt="" />
                    <figcaption>Mars</figcaption>
                </figure></Link>
                <Link to="/jupiter"><figure>
                    <img src={Jupiter} alt="" />
                    <figcaption>Jupiter</figcaption>
                </figure></Link>
                <Link to="/saturn"><figure>
                    <img src={Saturn} alt="" />
                    <figcaption>Saturn</figcaption>
                </figure></Link>
                <Link to="/uranus"><figure>
                    <img src={Uranus} alt="" />
                    <figcaption>Uranus</figcaption>
                </figure></Link>
                <Link to="/neptune"><figure>
                    <img src={Neptune} alt="" />
                    <figcaption>Neptune</figcaption>
                </figure></Link>
                <Link to="/pluto"><figure>
                    <img src={Pluto} alt="" />
                    <figcaption>Pluto</figcaption>
                </figure></Link>
            </div>




        
        </section>

    )
}
export default Hero