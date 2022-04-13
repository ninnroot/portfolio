import "./Nav.css"


function Nav(){
    return(
        <div className="nav-wrapper">
            <a href="#contacts"><div className="nav-container"><p>Contacts</p></div></a>
            <a href="#highlights"><div className="nav-container"><p>Highlights</p></div></a>
            <a href="#about-me"><div className="nav-container"><p>About</p></div></a>
            <a href="#programming-skills"><div className="nav-container"><p>Skills</p></div></a>
            <div className="nav-container" style={{visibility: "hidden"}}><p>
                ......................
                </p></div>
        </div>
    )
}

export default Nav;