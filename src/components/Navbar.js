import React, {useState, useContext} from "react"
import {AiOutlineMenu, AiOutlineMenuFold, AiOutlineMenuUnfold} from "react-icons/ai"
// import {NavHashLink as Link} from "react-router-hash-link"
import {data} from "../data/NavbarData.js"
import {NavContext} from "../Context"
import useWindowWidth from "../hooks/useWindowWidth"

export default function Navbar() {
    const [navbar, setNavbar] = useState(false)
    const {activeId, setActiveId} = useContext(NavContext)
    const windowWidth = useWindowWidth()

    const toggleNavbar = () => {
        setNavbar(!navbar)
    }

    const hideNavbarOnClick = () => {
        if (windowWidth < 1300) {
            setNavbar(false)
        }
    }

    const handleClick = (item) => {
        setActiveId(item.id)
        const el = document.getElementById(item.scrollId)
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset
        const yOffset = -60;
        if (windowWidth < 1300) {
            window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' })
        }
        else{
            el.scrollIntoView({ behavior: 'smooth' })
        }

    }

    // const scrollWithOffset = (el) => {
    //     const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset
    //     const yOffset = -60;
    //     if (windowWidth < 1300) {
    //         window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' })
    //     }
    //     else {
    //         window.scrollTo({ top: yCoordinate, behavior: 'smooth' })
    //     }
    // }
    const navbarItems = data.map((item, idx) => {
        // return (
        //     <Link smooth to={item.src} scroll={scrollWithOffset} className="navbar-link" activeClassName="selected" key={item.key}>
        //         <li className="navbar-item" onClick={hideNavbarOnClick}>
        //             <span className="navbar-item_title">{item.title}</span>
        //         </li>
        //     </Link>
        // )
        return (
            <span id={item.id} className={activeId === item.id ? 'navbar-link selected' : 'navbar-link'} onClick={() => handleClick(item)} key={item.key}>
                <li className="navbar-item" onClick={hideNavbarOnClick}>
                    <span className="navbar-item_title">{item.title}</span>
                </li>
    		</span>
        )
    })

    return (
        <div className="navbar">
            <button className="navbar-icon" onClick={toggleNavbar}>
                {windowWidth < 1300 ? <AiOutlineMenu /> : navbar ? <AiOutlineMenuUnfold/> : <AiOutlineMenuFold />}
            </button>
            <nav className={navbar ? "navbar-menu active" : "navbar-menu"}>
                <ul className="navbar-items">
                    {navbarItems}
                </ul>
            </nav>
        </div>
    )
}
