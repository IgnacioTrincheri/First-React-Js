import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Title from "./Title";
import "./ItemListContainer.css"
import {
	collection,
	getDocs,
	getFirestore,
	query,
	where,
} from "firebase/firestore";

export const ItemListContainer = ({ texto }) => {
	const [data, setData] = useState([]);
	const { type } = useParams();

	useEffect(() => {
		const querydb = getFirestore();
		const queryCollection = collection(querydb, "Productos");
		if (type) {
			const queryFilter = query(
				queryCollection,
				where("type", "==", type),
			);
			getDocs(queryFilter).then((res) =>
				setData(
					res.docs.map((product) => ({ id: product.id, ...product.data() })),
				),
			);
		} else {
			getDocs(queryCollection).then((res) =>
				setData(
					res.docs.map((product) => ({ id: product.id, ...product.data() })),
				),
			);
		}
	}, [type]);

	return (
		<div className="card-cont">
			<Title greeting={texto} />
			<ItemList data={data} />
		</div>
	);
};

export default ItemListContainer;