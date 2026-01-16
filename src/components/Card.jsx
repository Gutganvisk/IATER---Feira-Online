import "./Card.css";
import "./Buttons.css";

function Card({ product }) {
    return (
        <div className="product-card-col">
            <img src={product.image}
            alt={product.name}
            className="product-card__image"
            />
            <div className="product-card__content-col">
                <h3 className="product-card__title">{product.title}</h3>
                <p className="product-card__producer">Produtor: {product.produtor}</p>
                <span className="product-region">Região: {product.regiao}</span>
                <strong className="product-price">R${product.price}</strong>
                <button className="btn btn-buy"> Comprar</button>
            </div>
        </div>
    );
}

export default Card;
