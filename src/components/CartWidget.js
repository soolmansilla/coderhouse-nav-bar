import shoppingCart from '../images/shopping-cart.svg' ; 

const CartWidget = () => {
    return (
       
        <div>
           <img src={shoppingCart} alt="shopping cart" className="icon-navbar" />
        </div>
    );
}

export default CartWidget;
