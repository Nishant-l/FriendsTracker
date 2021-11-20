import { Link } from "react-router-dom";
import style from './NavBar.module.css'

const NavBar = ( ) => {
    return(
        <nav className={style.navBar}>
            <Link to="/">
                <h1 className={style.siteHedding}>Friend Tracker</h1>
            </Link>
            <Link to="/userProfile">
                <button className={style.profileButton}>MyProfile</button>
            </Link>
        </nav>
    )
}

export {NavBar}
