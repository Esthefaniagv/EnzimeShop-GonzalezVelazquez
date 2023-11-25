import ItemCount from "../ItemCount/ItemCount";
import "../ItemDetail/ItemDetail.css"

const ItemDetail = ({ id, img, name, description, price, stock }) => {
    return (
        <>
            <div className="general-detail">

                <div className="detail-card-container">

                    <div className="detail-img-container">
                        <img src={img} alt={`product${name}`} className="img"/>
                    </div>
                    <div className="product-detail">
                        <h2>{name}</h2>
                        <p>{description}</p>
                        <p>Precio ${price}</p>
                        <p>Stock {stock}</p>
                        <ItemCount stock={15} initial={1} onAdd={(quantity) => console.log("Cantidad agregada" + quantity)} />
                    </div>

                </div>
            </div>
        </>

    )
}

export default ItemDetail;