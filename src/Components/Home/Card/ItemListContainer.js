import "./ItemListCont.css";
import { Link } from "react-router-dom";

const Card = ({ id, name, image, color, type, size }) => {
    return (
        <div className="card">
            <Link to={`productos/${id}`}>
                <img alt={`producto ${name}`} src={image} />
                <div className="description-container">
                    <h3>{name}</h3>
                    <p>{color}</p>
                    <p>Talles: {size}</p>
                </div>
            </Link>
        </div>
    );
};

export default Card;

