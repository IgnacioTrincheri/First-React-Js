import Button from 'react-bootstrap/Button';
import { addDoc, collection, getFirestore } from "firebase/firestore";
import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cartContext";
import ItemCart from "./ItemCart";

const Cart = () => {
	const { cart, totalPrice } = useCartContext();

	const order = {
		buyer: {
			name: "Juan",
			email: "Juan@gmail.com",
			phone: "123456",
			address: "Ja1234",
		},
		items: cart.map((product) => ({
			id: product.id,
			name: product.name,
			price: product.price,
			quantity: product.quantity,
		})),
		total: totalPrice(),
	};

	const handleClick = () => {
		const db = getFirestore();
		const ordersCollection = collection(db, "Orders");
		addDoc(ordersCollection, order).then(({ id }) => console.log(id));
	};

	if (cart.length === 0) {
		return (
			<div>
				<p>No hay elementos en el carrito</p>
				<Link to="/"><Button variant="outline-secondary">Ir a la Tienda</Button></Link>
			</div>
		);
	}else{
		return (
		<div>
			{cart.map((product) => (
				<ItemCart key={product.id} product={product} />
			))}
			<p>Total: {totalPrice()}</p>
			<Button variant="outline-secondary" onClick={handleClick}>Finalizar compra</Button>
		</div>
	);}	
};

export default Cart;