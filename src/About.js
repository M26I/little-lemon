import "./about.css";
import ma1 from  "./m&a1.png";
import ma2 from "./m&a2.png";

const About = () => {
    return(
        <div className="about">
            <div className="text">
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
            </div>
            <div>
                <img src={ma1} alt="Mario and Antonio 1"></img>
                <img src={ma2} alt="Mario and Antonio 2"></img>
            </div>
        </div>
    )
}
export default About;