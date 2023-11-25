import { useState } from "react"
import "../ItemCount/ItemCount.css"


const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

    const handleIncrement = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
    return (
        <div className="cardButtons">
            <div className="quantityBtn">
                <button className="button" onClick={handleDecrement}>-</button>
                <span>{quantity}</span>
                <button className="button" onClick={handleIncrement}>+</button>
            </div>
            <button className="button is-fullwidth" onClick={() => onAdd(quantity)} disabled={!stock}>Agregar al carrito</button>
        </div>
    )
} 

export default ItemCount;