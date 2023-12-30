import "./Header.css"
const Nav = () => {

    return (
        <nav>
            <ul className="navList">
                <li className="navItem"><a href="/#Home">Home</a></li>
                <li className="navItem"><a href="/#About">About</a></li>
                <li className="navItem"><a href="/#Menu">Menu</a></li>
                <li className="navItem"><a href="/#Reservations">Reservations</a></li>
                <li className="navItem"><a href="/#Order">Order Online</a></li>
                <li className="navItem"><a href="/#Login">Login</a></li>
            </ul>

        </nav>
    );

}

export default Nav;