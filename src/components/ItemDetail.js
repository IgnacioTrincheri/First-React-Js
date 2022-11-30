import Button from 'react-bootstrap/Button';
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cartContext";
import ItemCount from "./ItemCount";
import "./ItemDetail.css"


export const ItemDetail = ({ data }) => {
	const [goToCart, setGoToCart] = useState(false);
	const { addProduct } = useCartContext();

	const onAdd = (quantity) => {
		setGoToCart(true);
		addProduct(data, quantity);
	};

	return (
		<div>
			<div className="detail">
				<img className="detail__image" src={data.image} alt={data.name} />
				<div >
					<h1>{data.name}</h1>
					<p>{data.name} color {data.color} de excelente calidad</p>
					<p>Talles: {data.size}</p>
					<p>${data.price}</p>
					<div className="count">
					{goToCart ? (
						<Link to="/cart"><Button variant="outline-secondary"> Ir al carrito</Button></Link>
					) : (
						<ItemCount initial={1} stock={data.stock} onAdd={onAdd} />
					)}</div>
				</div>
			</div>
		</div>
	);
};

export default ItemDetail;