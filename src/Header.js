import logo from "./Vector.png"
import Navbar from "./Nav";
import "./Header.css"
const Header = () => {
    return(
        <header className="header">
            <img src={logo} alt="Little Lemon logo"></img>
            <Navbar></Navbar>

        </header>
    )
}
export default Header;