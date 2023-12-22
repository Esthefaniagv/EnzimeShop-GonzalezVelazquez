import NavBar from "./components/NavBar/NavBar";
import logo from "./img/enzime.png"
import "./App.css"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart"
import "bulma/css/bulma.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import CheckoutForm from "./components/CheckoutForm/CheckoutForm";



const App = () => {
    return (
        <div>
            <BrowserRouter>
                <CartProvider>
                    <NavBar img={logo} />
                    <Routes>
                        <Route path="/" element={<ItemListContainer greeting='Bienvenidos a Enzime Store' />} />
                        <Route path="/category/:categoryId" element={<ItemListContainer />} />
                        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                        <Route path="/cart" element={<Cart/>} />
                        <Route path="/checkout" element={<CheckoutForm />} />
                        <Route path="*" element={<h1>ESTAS EN 404</h1>} />
                    </Routes>
                </CartProvider>
            </BrowserRouter>
        </div>

    )
}

export default App;