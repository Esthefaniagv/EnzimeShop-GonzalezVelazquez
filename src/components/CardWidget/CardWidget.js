import { useContext } from "react";
import cart from "./assets/cart.svg"
import { CartContext } from "../../context/CartContext";

const CardWidget = () => {

    const { totalQuantity} = useContext(CartContext)

    console.log(totalQuantity)
    return (
        <div className="button-56">
        <img src={cart} alt="shopping cart icon" width={20}/>
        <p style={{paddingLeft: 12}}>{totalQuantity()}</p>
        </div>
    )
}

export default CardWidget;