import Lemoncake from "./lemon.png";
import Greeksalad from "./greeks.png";
import Bruschetta from "./brusc.png";
import "./specials.css";

const Specials = () => {
    return(
        <section className="specials-title">
            <div className="title-container">
                <h1>Specials</h1>
                <button>Online menu</button>
            </div>
            <div className="specials-box">
                <div className="box1">
                <img src={Greeksalad} alt="Greek salad"></img>
                <div>
                <h3>Greek Salad</h3>
                <h3>12,11$</h3>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
                <button>Order a delivery</button>
                </div>
                <div className="box2">
                <img src={Bruschetta} alt="Bruschetta"></img>
                <div>
                <h3>Bruschetta</h3>
                <h3>6,99$</h3>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
                <button>Order a delivery</button>
                </div>
                <div className="box3">
                <img src={Lemoncake} alt="Lemon cake"></img>
                <div>
                <h3>Lemon cake</h3>
                <h3>5,00$</h3>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
                <button>Order a delivery</button>
                </div>
            </div>
        </section>
    )
}
export default Specials;