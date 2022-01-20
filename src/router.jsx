import {
  Route,
  Routes
} from "react-router-dom";
import Cart from "./Views/Cart"
import Products from "./Views/Products"

const Routers = () => {
  return (
    <>
    <Routes>
      <Route path="/" exact element={<Products />}/>
      <Route path="/cart" element={<Cart />}/>
    </Routes>
    </>
  )
}
export default Routers