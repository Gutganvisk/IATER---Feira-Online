import hero from "../assets/hero.png";
import "./Hero.css";
import "../components/Buttons.css";
import { FaShoppingCart } from "react-icons/fa";
import "../App.css";

function Hero() {
    return (
        <section className="hero">
            <div className="container hero-grid">
                <div className="hero-text">
                    <h1 className="hero-title">Feira Digital</h1>
                    <p>Produtos de qualidade é aqui</p>
                    <button className="btn btn-primary">
                        <FaShoppingCart />Quero comprar
                    </button>
                </div>
                <div className="hero-image">
                    <img src={hero} />
                </div>
            </div>
        </section>
    );
}

export default Hero;