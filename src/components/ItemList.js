import React from "react";
import Item from "./Item";

const ItemList = ({ data = [] }) => {
	return data.map((Prod) => <Item key={Prod.id} info={Prod} />);
};

export default ItemList;