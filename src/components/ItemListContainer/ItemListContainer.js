import { useEffect , useState} from "react";
import ItemList from  "../ItemList/ItemList"
import  { getProductsByCategory , getProducts} from "../../asynMock"
import { useParams } from "react-router-dom";
import "../ItemListContainer/ItemListContainer.css"

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])

    const { categoryId } = useParams();

    useEffect(() => {

        const asyncMock = categoryId ? getProductsByCategory : getProducts;

        asyncMock(categoryId)
        .then((response) => {
            setProducts(response)
        })
        .catch((error) => console.error(error))
    }, [categoryId]);

    return (
        <div className="parent">
            <div className="greetingMsg">
                <h1>{greeting}</h1>
            </div>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer;

