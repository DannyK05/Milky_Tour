
const Sidenav = () => {
    function Open (idName) {
       let visor = document.getElementById(idName)
       visor.classlist.remove('hidden')
    }
    return(
        <aside>
            <ul>
                <li onClick={Open(visor)}>Visor</li>
            </ul>
        </aside>
    )
}
export default Sidenav;