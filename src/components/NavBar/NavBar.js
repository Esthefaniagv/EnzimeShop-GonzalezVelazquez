import CardWidget from "../CardWidget/CardWidget";
import { Link } from "react-router-dom";

const NavBar = (props) => {
    let { img } = props;
    return (
        <nav id="navbar">
            <div className="navbarContainer">
                <Link to="/"> <img className="navLogo" src={img} alt="company logo" /></Link>
                <Link to={`/category/Home`}className="button-81" >Home</Link>
                <Link to={`/category/Decoration`}className="button-81" >Decoration</Link>
                <Link to={`/category/Tableware`}className="button-81" >Tableware</Link>
                <Link to={`/category/Kitchen`}className="button-81" >Kitchen</Link>
            </div>
            <CardWidget />
        </nav>
    )
    
}

export default NavBar;

