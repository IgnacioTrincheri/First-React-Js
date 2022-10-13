import Button from 'react-bootstrap/Button';
import CartIcon from '../img/CartIcon.png'


function CartWidget() {
    return (
        <div>
            <Button variant="secondary">
                <img src={CartIcon} alt='Imagen carrito' />
            </Button>{' '}
        </div>
    );
}
export default CartWidget;

