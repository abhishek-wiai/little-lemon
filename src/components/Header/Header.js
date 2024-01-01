import logo from "../../assets/Logo.svg";
import Nav from "./Nav";
import "./Header.css";
const Header = () => {
  return (
    <header className="header">
      <img className="navLogo" src={logo} alt="Little Lemon Logo" />
      <Nav />
    </header>
  );
};

export default Header;
