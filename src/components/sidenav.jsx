
const Sidenav = () => {
    function Open () {
       let screen = document.querySelector("section.visor")
       console.log(screen)
       screen.classlist.remove('hidden')

    }
    return(
        <nav className="side-nav fixed px-2 top-60 right-0 md:right-0 bg-[#ad79ec]">
            <ul>
                <li onClick={Open} className="text-white"><ion-icon size="large" name="glasses-outline"></ion-icon></li>
            </ul>
        </nav>
    )
}
export default Sidenav;