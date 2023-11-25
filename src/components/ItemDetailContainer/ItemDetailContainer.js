import { useEffect, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useParams } from "react-router-dom";
import { getProductById } from "../../asynMock";
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null);

    const { itemId } = useParams()

    useEffect(() => {
        getProductById(itemId)
        .then((response) => {
            setProduct(response)
        })
        .catch((error) => console.error(error))
    }, [itemId])

    // const [ detailProduct, setDetailProduct] = useState(null)
    return (
        <div >
            <ItemDetail {...product}/>
            
        </div>
        
    )
}

export default ItemDetailContainer;
