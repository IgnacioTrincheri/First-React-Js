import React from "react";
import { Link } from "react-router-dom";
import "./ItemListContainer.css"


const Item = ({ info }) => {
	return (
		<div className="card">
			<Link to={`/detalle/${info.id}`} className="link">
				<img src={info.image} alt={info.name} />
				<div className="description-container">
					<h3>{info.name}</h3>
					<p>$ {info.price}</p>
				</div>
			</Link>
		</div>
	);
};

export default Item;