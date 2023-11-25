import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Productos from "./pages/Productos"
import Galeria from "./pages/Galeria"
import Error from "./pages/Error"
import DetalleProducto from "./pages/DetalleProducto";
import "./App.css"
import Layout from "./pages/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="galeria" element={<Galeria />} />
          <Route path="productos" element={<Productos />} />
          <Route path="productos/:productoId" element={<DetalleProducto/>}/>
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
