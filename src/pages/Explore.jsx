import React from 'react'
import { Link } from 'react-router-dom'

const Explore = () => {
  return (
    <div className='bg-[#000026] p-8 h-full' >
      <Link to="/" > <button className='bg-blue-600 block px-6 py-2 mb-12'>
            Exit Tour
        </button> <\Link>
        <div className='text-xl mb-12'>
           <span className='pr-6'> Explore,</span>    Guidelines
        </div>

    <div className='sm:px-24'>
    Welcome, space enthusiasts, to NASA's Milky Tour! 
    I'm your virtual tour guide, and I'm thrilled to 
    take you on an out-of-this-world adventure. Today,
     we're embarking on a cosmic journey from Earth to Pluto 
     and back aboard our state-of-the-art spacecraft, the Orion 3.
    
    <div className='flex justify-center items-center pt-4 pb-8 '>
    <img src="./src/assets/orion3.png" alt="" className=''/>
    </div>

    Enhanced Features of the Orion 3:
Advanced Propulsion System:
Our spacecraft features a cutting-edge propulsion system for faster and more efficient travel, reducing the time between each celestial stop.

360-Degree Observation Windows:
Enjoy panoramic views of space with our improved observation windows, providing an immersive experience as we cruise through the cosmos.

Virtual Reality Tours:
Immerse yourself even further with virtual reality tours of each celestial destination, enhancing your understanding and appreciation of the wonders beyond.

Zero-Gravity Lounges:
Relax in zero-gravity lounges during the journey, offering a unique and comfortable space experience.

Personalized Itineraries:
Customize your space adventure with personalized itineraries. Choose specific planets you'd like to explore in more detail or opt for a scenic route through the asteroid belt.

    </div>

    <div>
        <div className='flex justify-center'>
    <img src="./src/assets/iva_suit.png" alt="" className=''/>

    
    </div>
    Now, before we take off, let's don our Special Intra-Vehicular Activity (IVA) suits. These suits are designed for comfort and safety during our journey. Their features include:
   
Embedded Haptic Feedback: Feel the subtle vibrations and sensations that correspond to the celestial bodies we visit.
Augmented Reality Visor: Get real-time information about each planet and enjoy augmented reality features, making the tour both informative and captivating.

Now that we're suited up, fasten your seat belts as we prepare to launch into the cosmos.
Get ready for an unforgettable adventure as we explore the wonders of our solar system and beyond. Buckle up and brace yourselves for an experience of a lifetime! 🚀✨.
    </div>
    <Link to="/venus"><button className='bg-blue-600 block px-6 py-2 mt-8 mb-12 mx-auto text-white'>
            Let's move to Venus
        </button></Link> 
    </div>
  )
}

export default Explore
