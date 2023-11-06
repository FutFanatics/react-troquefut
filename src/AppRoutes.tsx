import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RotaPrivate } from "./utils/RotaPrivate";

import Home from "./pages/Home";
import Order from "./pages/Order";
import Data from "./pages/Data";
import Shipping from "./pages/Shipping";
import Devolution from "./pages/Devolution";
import Objetos from "./pages/Objetos";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/order" element={<Order />}></Route>
                <Route path="/data" element={<Data />}></Route>
                <Route path="/shipping" element={<Shipping />}></Route>
                <Route path="/objetos/:productId" element={<Objetos />} />
                <Route path="/devolution" element={<Devolution />}></Route>
                
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes;