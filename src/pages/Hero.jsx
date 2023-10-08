import React from 'react';
import styles from './Hero.module.css'
import { Link } from "react-router-dom";


import Jupiter from  '../assets/Jupiter/planet_jupiter.png'
import Mars from  '../assets/Mars/planet_mars.png'
import Pluto from  '../assets/Pluto/planet_pluto.jpg'
import Venus from  '../assets/Venus/planet_venus.png'
import Mercury from  '../assets/Mercury/planet_mercury.png'
import Saturn from  '../assets/Saturn/planet_saturn.png'
import Uranus from  '../assets/Uranus/planet_uranus.png'
import Neptune from  '../assets/Neptune/planet_neptune.png'
const Hero =() => {
const planets = [
    {
        img: Jupiter,
        text: "Jupiter"
    },
    {
        img: Pluto,
        text: "Pluto"
    }, {
        img: Mercury,
        text: "Mercury"
    }, {
        img: Mars,
        text: "Mars"
    }, {
        img: Saturn,
        text: "Saturn"
    }, {
        img: Uranus,
        text: "Uranus"
    }, {
        img: Venus,
        text: "Venus"
    }, {
        img: Neptune,
        text: "Neptune"
    },
    
]
    return (

        <>
        <div className={styles.heroSection}>
<div className={styles.header}>
    <p>Milky Tour </p>
    <div className={styles.Main}>
        <h2> Transition through Planets</h2>
        <p> Journey into the Universe: Epic planetary awaits your Journey</p>

     <Link to="/explore"> <button className='bg-blue-900 text-white'> Start Exploring 🚀</button></Link>   
    
</div>
<div className={styles.carousel}>
<div className={styles.carouselHeader}>
    <h4> Explore the Milky Way</h4>
</div>
<div className={styles.carouselImgs}>


        {planets.map((e) => (
               <div className={styles.planetImg}>
        <img src={e.img} />
        <p>{e.text}</p>
    </div>
        ))}
         
    
    
   
    
  
</div>
</div>
</div>


        </div>
        </>

    )
}
export default Hero