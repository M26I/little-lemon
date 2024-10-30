import "./hero.css";
import Heroimg from "./heroimg.png";

const Hero = () => {
    return(
     <section>
        <div>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        <button>Reserve Table</button>
        </div>
        <div className="imageContainer">
            <img src={Heroimg} alt="Restaurant"></img>
        </div>
     </section>
    )
}
export default Hero;