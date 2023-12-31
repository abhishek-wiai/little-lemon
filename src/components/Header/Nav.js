import { Link } from "react-router-dom";
import "./Header.css"
const Nav = () => {

    return (
        <nav>
            <ul className="navList">
                <li className="navItem"><Link to="/">Home</Link></li>
                <li className="navItem"><Link to="/">About</Link></li>
                <li className="navItem"><Link to="/">Menu</Link></li>
                <li className="navItem"><Link to="/Reserve">Reserve</Link></li>
                <li className="navItem"><Link to="/">Order Online</Link></li>
                <li className="navItem"><Link to="/">Login</Link></li>
            </ul>

        </nav>
    );

}

export default Nav;