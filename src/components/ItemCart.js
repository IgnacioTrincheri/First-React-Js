import Button from 'react-bootstrap/Button';
import React from 'react';
import { useCartContext } from '../context/cartContext';
import "./ItemCart.css"

const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    return (
        <div className='itemCart'>
            <img src={product.image} alt={product.name} />
            <div className='itemCart'>
                <p>{product.name} - x {product.quantity} unidades - Subtotal: ${product.quantity * product.price}</p>    
                <Button variant="outline-secondary" onClick={() => removeProduct(product.id)}>X</Button>
            </div>
        </div>
    )
}

export default ItemCart