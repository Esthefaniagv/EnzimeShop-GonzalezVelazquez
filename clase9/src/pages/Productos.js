import dataProducts from "../data";
import "../pages/Productos.css"
import { Link } from "react-router-dom";

const Productos = () => {

    return(
        <div>
            <h2>Productos</h2>
            <div className="galeria">
                {dataProducts.map((product) => {
                    return (
                        <article key={product.id}>
                            <img src={product.image} alt={product.category} />
                            <h4>{product.title}</h4>
                            <Link to={`/productos/${product.id}`} className="linkProduct">Detalle</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default Productos;