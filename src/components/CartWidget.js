import React from "react";
import { Button } from "react-bootstrap";
import { useCartContext } from "../context/cartContext";
import CartIcon from '../Img/CartIcon.png'

const CartWidget = () => {
	const { totalProducts } = useCartContext();

	return (
		<div>
			<Button variant="secondary"><img src={CartIcon} alt="Cart Icon"></img></Button>
			<span>{totalProducts() || ""}</span>
			</div>
	);
};

export default CartWidget;