import { CartContext } from "../../context/CartContext";
import React from "react";
import { useContext } from "react";



const CartItem = ({ name, price, id, quantity}) => {


    const { deleteItem } = useContext(CartContext);


    return (
        <div className="card-container">
            <div>
                <h2>{name}</h2>
                <p>Cantidad:{quantity}</p>
                <p>Total: {quantity * price}</p>
                <button onClick={() => deleteItem(id)}>Eliminar</button>
            </div>
        </div>
    )

}

export default CartItem;