import "./nav.css";
const Navbar = () => {
    return(
      <nav >
        <ul className="navbar">
        <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#reservations">Reservations</a></li>
            <li><a href="#orderonline">Order online</a></li>
            <li><a href="#login">Login</a></li>
        </ul>
      </nav>
    )
}
export default Navbar;