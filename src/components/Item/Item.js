import { Link } from "react-router-dom";
import "../Item/Item.css"

const Item = ({ id, name, img, price, stock }) => {


  return (
    <div className="card-container">
      <article>
        <header>
          <h2>{name}</h2>
        </header>
        <figure className="container">
          <img src={img} alt={`product${name}`} className="image"/>
          <div className="overlay">
          <Link to={`/item/${id}`} className="text">Ver detalle</Link>
          </div>
        </figure>
        <section>
          <p>Precio ${price}</p>
          <p>Stock {stock}</p>
        </section>
      </article>

    </div>
  )
}

export default Item;
