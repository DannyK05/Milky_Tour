
const Sidenav = () => {
    function Open (idName) {
       let visor = document.getElementById(idName)
       visor.classlist.remove('hidden')
    }
    return(
        <nav className="side-nav  top-40 right-0 bg-[#ad79ec]">
            <ul>
                <li onClick={Open} className="text-white">Visor</li>
            </ul>
        </nav>
    )
}
export default Sidenav;