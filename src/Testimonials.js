import "./testimonials.css";
import pic1 from "./peo-1.jpg";
import pic2 from "./peo-2.jpg";
import pic3 from "./peo3.jpg";
import pic4 from "./peo4.jpg";


const Testimonials = () => {
    return(
        <div className="testimonials">
            <div className="title">
                <h1>Testimonials</h1>
            </div>
            <div className="rev-boxes">
                <div className="box1">
                    <div>
                    <img src={pic3} alt="reviever1"></img>
                    <h3>4.6</h3>
                    <h4>Jane Doe</h4>
                    </div>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit”</p>
                </div>
                <div className="box2">
                    <div>
                    <img src={pic1} alt="reviewer2"></img>
                    <h3>4.6</h3>
                    <h4>John Doe</h4>
                    </div>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit”</p>
                </div>
                <div className="box3">
                    <div>
                    <img src={pic2} alt="reviewer 3"></img>
                    <h3>4.6</h3>
                    <h4>Sam Watson</h4>
                    </div>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit”</p>
                </div>
                <div className="box4">
                    <div>
                    <img src={pic4} alt="reviewer 4"></img>
                    <h3>4.6</h3>
                    <h4>Tina Johnes</h4>
                    </div>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit”</p>
                </div>
            </div>
        </div>
    )
}
export default Testimonials;