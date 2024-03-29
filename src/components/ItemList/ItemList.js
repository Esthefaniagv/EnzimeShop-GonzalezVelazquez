import Item from "../Item/Item"
import "../ItemList/ItemList.css"

const ItemList = ({ products }) => {

    return (
        <div className="gridContainer">
            {products.map((product) => <Item key={product.id} {...product} />)}
        </div>
    )
}

export default ItemList;
