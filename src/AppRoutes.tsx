import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RotaPrivate } from "./utils/RotaPrivate";
import Instructions from "./pages/Instructions";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Data from "./pages/Data";
import Shipping from "./pages/Shipping";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/instructions" element={<Instructions />}></Route>
                <Route path="/order" element={<Order />}></Route>
                <Route path="/data" element={<Data />}></Route>
                <Route path="/shipping" element={<Shipping />}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes;