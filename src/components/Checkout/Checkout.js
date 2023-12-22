import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import CheckoutForm from "../CheckoutForm/CheckoutForm";


const Checkout = () => {

    const [ orderId, setOrderId] = useState("");

    const { cart, total, clearCart} = useContext(CartContext);


    const handleConfirm = ({name, phone, email}) => { console.log("orden creada", name, phone, email)
        return name 
    }

    return (
        <div className="card-container">
            <button>Checkout</button>
            <CheckoutForm onConfirm={handleConfirm}/>
        </div>
    )
}

export default Checkout;