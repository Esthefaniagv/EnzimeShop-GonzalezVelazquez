import CardWidget from "../CardWidget/CardWidget";

const NavBar = (props) => {
    let { img } = props;
    return (
        <nav id="navbar">
            <div className="navbarContainer">
                <img src={img} alt="company logo" />
                <button className="button-81">Home</button>
                <button className="button-81">Decoración</button>
                <button className="button-81" >Mesa</button>
                <button className="button-81">Cocina</button>
            </div>
            <CardWidget />
        </nav>
    )
    
}

export default NavBar;

{/* <nav id="navbar">
<div>
    <img src={img} alt="company logo" />
    <button className="button-35">Home</button>
    <button>Decoración</button>
    <button>Mesa</button>
    <button>Cocina</button>
</div>
</nav> */}