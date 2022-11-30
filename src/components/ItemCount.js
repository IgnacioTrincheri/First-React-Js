import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from "react";
import "./ItemCount.css"

const ItemCount = ({ initial, stock, onAdd }) => {
	const [count, setCount] = useState(parseInt(initial));
	const decrease = () => {
		setCount(count - 1);
	};

	const increase = () => {
		setCount(count + 1);
	};

	useEffect(() => {
		setCount(parseInt(initial));
	}, [initial]);

	return (
		<div>
			<div className="counter">
				<Button variant="outline-secondary" disabled={count <= 1} onClick={decrease}>-</Button>
				<span>{count}</span>
				<Button variant='outline-secondary' disabled={count >= stock} onClick={increase}> + </Button>
			</div>
			<div>
				<Button variant='outline-secondary' disabled={stock <= 0} onClick={() => onAdd(count)}> Agregar al carrito </Button>
			</div>
		</div>
	);
};

export default ItemCount;