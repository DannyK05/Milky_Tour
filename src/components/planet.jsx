import '../App.css';
export  const Planets = (props) =>{
    return(
        <main className='planet'>
            <button className="exit_button">Exit Tour</button>
           
            {props.children}
    
        </main>
    )
}