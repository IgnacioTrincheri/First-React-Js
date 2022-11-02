import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductoById } from "../../API/Productos";
import { Button } from "react-bootstrap";
import "./Productos.css"


const Productos = () => {
  const { idProducto } = useParams();

  const [Productos, setProductos] = useState({});

  useEffect(() => {
    setProductos(getProductoById(idProducto));
  }, []);

  return (<div className="Carta">
    <img alt={`producto ${Productos.name}`} src={Productos.image} />
    <div className="description-container">
      <h3>{Productos.name}</h3>
      <p>{Productos.color}</p>
      <p>Talles: {Productos.size}</p>
      <Button variant="outline-secondary">Añadir al Carrito</Button>
    </div>
  </div>);
};

export default Productos;
