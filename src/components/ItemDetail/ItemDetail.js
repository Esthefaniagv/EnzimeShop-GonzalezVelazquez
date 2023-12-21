import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import "../ItemDetail/ItemDetail.css"
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ id, img, name, description, price, stock }) => {

    const [quantity, setQuantity] = useState(0);

    const { addItem } = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        setQuantity(quantity)

        const item = {
            id, name, price
        }

        addItem(item, quantity)
    }

    return (
        <>
            <div className="general-detail">
                <div className="detail-card-container">
                    <div className="detail-img-container">
                        <img src={img} alt={`product${name}`} className="img" />
                    </div>
                    <div className="product-detail">
                        <h2>{name}</h2>
                        <p>{description}</p>
                        <p>Precio ${price}</p>
                        <p>Stock {stock}</p>
                        { quantity > 0 ? 
                        (<Link to="/cart" >Terminar Compra</Link>) 
                        : (<ItemCount stock={stock} initial={1} onAdd={handleOnAdd} />)}

                    </div>

                </div>
            </div>
        </>
    )
}

export default ItemDetail;