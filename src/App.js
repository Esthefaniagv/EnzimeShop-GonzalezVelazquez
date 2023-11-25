import NavBar from "./components/NavBar/NavBar";
import logo from "./img/enzime.png"
import "./App.css"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import "bulma/css/bulma.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";



const App = () => {
    return (
        <div>
            <BrowserRouter>
                <NavBar img={logo}/>
                <Routes>
                    <Route path="/" element={<ItemListContainer greeting='Bienvenidos a Enzime Store'/>}/>
                    <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
                    <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
                    <Route path="*" element={<h1>ESTAS EN 404</h1>}/>
                </Routes>
            </BrowserRouter>
        </div>
        // <div className="App">
        // <NavBar img={logo} />
        // <ItemListContainer greeting={"Bienvenidos a Enzime"}/>
        // </div>
    )
}

export default App;