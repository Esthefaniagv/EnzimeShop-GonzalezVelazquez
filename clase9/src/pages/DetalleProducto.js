import { Link, useParams } from "react-router-dom";
import dataProducts from "../data";

const DetalleProducto = () => {

    const {productoId} =  useParams();

    const producto = dataProducts.find((product) => product.id == productoId )
    
    const {image, title, price} = producto;

    return(
        <div>
            <img src={image} alt={title}/>
            <h2>{title}</h2>
            <h2>{price}</h2>
            <Link to="/productos" >Volver</Link>
            </div>
    )
}

export default DetalleProducto;