import NavBar from "./components/NavBar/NavBar";
import logo from "./img/enzime.png"
import "./App.css"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


const App = () => {
return (
    <div className="App">
    <NavBar img={logo} />
    <ItemListContainer greeting={"Bienvenidos a Enzime"}/>
    </div>
)
}

export default App;