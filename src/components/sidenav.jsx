
const Sidenav = () => {
    function Open (idName) {
       let visor = document.getElementById(idName)
       visor.classlist.remove('hidden')
    }
    return(
        <nav className="side-nav absolute top-40 left-40 bg-[#ad79ec] hidden">
            <ul>
                <li onClick={Open}>Visor</li>
            </ul>
        </nav>
    )
}
export default Sidenav;