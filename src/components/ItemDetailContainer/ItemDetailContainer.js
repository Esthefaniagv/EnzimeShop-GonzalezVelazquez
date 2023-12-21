import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../asynMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../config/firebase"


const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null);

    const { itemId } = useParams()

    useEffect(() => {

        const docRef = doc(db , "products" , itemId)

        const getDetailedProduct = async () => {

            await getDoc(docRef)
            .then((response) => {
                const data = response.data()
                const productAdapted = { id: response.id, ...data}
                setProduct(productAdapted)
            })
            .catch((error) =>{
                console.error(error)
            })
        }

        getDetailedProduct()
    }, [itemId])

    // useEffect(() => {
    //     getProductById(itemId)
    //     .then((response) => {
    //         setProduct(response)
    //     })
    //     .catch((error) => console.error(error))
    // }, [itemId])

    return (
        <div >
            <ItemDetail {...product}/>
    
        </div>
        
    )
}

export default ItemDetailContainer;
