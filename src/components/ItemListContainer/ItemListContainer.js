import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom";
import "../ItemListContainer/ItemListContainer.css"
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../config/firebase"

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        const collectionRef = categoryId
            ? query(collection(db, "products"), where("category", "==", categoryId))
            : collection(db, "products")

        const getProductsList = async () => {

            const data = await getDocs(collectionRef);
            const eachProduct = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id
            }));
            console.log(eachProduct)
            setProducts(eachProduct)
        }
        getProductsList()

    }, [categoryId])



    // const productsCollectionRef = collection(db , "products");

    // useEffect(() => {
    //     const getProductsList = async () => {

    //         const data = await getDocs(productsCollectionRef);
    //         const eachProduct = data.docs.map((doc) => ({
    //             ...doc.data(),
    //             id: doc.id
    //         }));

    //         setProducts(eachProduct);
    //     }

    //     getProductsList()
    // }, [])
    // useEffect(() => {

    //     const asyncMock = categoryId ? getProductsByCategory : getProducts;

    //     asyncMock(categoryId)
    //     .then((response) => {
    //         setProducts(response)
    //     })
    //     .catch((error) => console.error(error))
    // }, [categoryId]);

    return (
        <div className="parent">
            <div className="greetingMsg">
                <h1>{greeting}</h1>
            </div>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer;

