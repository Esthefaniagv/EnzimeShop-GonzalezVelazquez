import cart from "./assets/cart.svg"

const CardWidget = () => {
    return (
        <div className="button-56">
        <img src={cart} alt="shopping cart icon" width={20}/>
        <p style={{paddingLeft: 12}}>0</p>
        </div>
    )
}

export default CardWidget;