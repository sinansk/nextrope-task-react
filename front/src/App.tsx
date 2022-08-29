import { Routes, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Order from "./pages/Order";

function App() {
  return (
    <div className="relative grid w-screen h-full px-10 xl:px-32 lg:px-20">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="order" element={<Order />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
