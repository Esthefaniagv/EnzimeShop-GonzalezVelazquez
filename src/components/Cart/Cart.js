import { useContext } from "react";
import CartItem from "../CartItem/CartItem";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";


const Cart = () => {
    const { cart, clearCart, totalPrice, totalQuantity  } = useContext(CartContext);

    if(totalQuantity === 0 ){
        return(
            <div>
                <h2>
                    No products in shopping cart
                </h2>
                <Link to="/" className="button">Return to products</Link>
            </div>
        )
    }
    console.log({cart})
    return (
        <div>
            {cart.map((product) => <CartItem key={product.id} {...product}/>)}
            <h3>{totalPrice}</h3>
            <button onClick={()=> clearCart()}>Clear Cart</button>
            <Link to="/checkoutForm">Go to Checkout</Link>
        </div>
        
    )
}

export default Cart; 