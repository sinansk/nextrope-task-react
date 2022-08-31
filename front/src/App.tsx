import { Routes, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Order from "./pages/Order";

function App() {
  return (
    <>
      <Navbar />
      <div className="grid mx-auto xl:px-32 xl:py-16 lg:px-20 lg:py-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="order" element={<Order />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
