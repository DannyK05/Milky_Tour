import { useState } from "react";
const Sidenav = () => {
    const toggleVisibility = () => {
        // Update the URL with a query parameter
        const newUrl = window.location.pathname + (window.location.search ? '&visible=true' : '?visible=true');
        window.history.replaceState(null, null, newUrl);
    };
    
    return(
        <div>
        <nav className={`side-nav fixed px-2 top-60 right-0 md:right-0 bg-[#ad79ec]`}>
            <ul>
                <li onClick={toggleVisibility} className="text-white"><ion-icon size="large" name="glasses-outline"></ion-icon></li>
            </ul>
        </nav>
        </div>
    )
}
export default Sidenav;