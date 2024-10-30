import "./footer.css";
import logo from "./Vector.png"

const Footer = () => {
    return(
        <footer className="footer">

        <div className="logoContainer">
          <img src={logo} alt="Logo" className="logo" />
        </div>

        <div className="linksContainer">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#reservations">Reservations</a></li>
            <li><a href="#orderonline">Order online</a></li>
            <li><a href="#login">Login</a></li>
          </ul>
        </div>

        <div className="socialContainer">
          <a href="#facebook">Facebook</a>
          <a href="#twitter">Twitter</a>
          <a href="#instagram">Instagram</a>
        </div>
      </footer>

    )
}
export default Footer