import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './Home.css';
import Card from "../../Components/Home/Card/ItemListContainer";
import ProductosApi from "../../API/Productos.js";

function Home() {
    const [filter, setFilter] = useState("");
    const [Productos, setProductos] = useState([]);
    const { type } = useParams();

    const getImages = () => {
        setTimeout(() => {
            const Productos = ProductosApi;
            setProductos(Productos);
        }, 2000);
    };

    useEffect(() => {
        getImages();
    }, []);

    return (
        <div className="principal_cont">
            <h1>Productos</h1>
            <input
                id="filter"
                name="filter"
                type="text"
                value={filter}
                onChange={(event) => setFilter(event.target.value)}
            />

            <div className="card-cont">
                {type
                    ? Productos
                        .filter((Productos) => Productos.name.includes(filter))
                        .filter((Productos) => Productos.type === type)
                        .map((Prods, i) => (
                            <Card
                                id={i}
                                key={i}
                                name={Prods.name}
                                image={Prods.image}
                                color={Prods.color}
                                size={Prods.size}
                            />
                        ))
                    : Productos
                        .filter((Productos) => Productos.name.includes(filter))
                        .map((Prods, i) => (
                            <Card
                                id={i}
                                key={i}
                                name={Prods.name}
                                image={Prods.image}
                                color={Prods.color}
                                size={Prods.size}
                            />
                        ))}
            </div>
        </div>
    );
}

export default Home;
