import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAppSelector } from "../redux/store";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const cartProductsLenght = useAppSelector(
    (state) => state.cartProducts.length
  );
  const handleNav = () => {
    setIsNavOpen((prev) => !prev);
  };
  return (
    <div className="sticky top-0 left-0 z-50 border-b-[0.5px] border-slate-700 text-sm font-semibold bg-white font-sans-serif navbar text-slate-900 backdrop-blur-2xl sm:h-[14vh] xl:px-32 lg:px-20 ">
      <div className=" navbar-start">
        <div className="">
          <label className="btn btn-ghost lg:hidden" onClick={handleNav}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <div
            className={`${
              isNavOpen
                ? `flex  flex-col  justify-evenly items-center absolute top-0 left-0 bg-gray-100 p-30  z-10  w-screen h-screen `
                : `hidden`
            } overflow-y-hidden`}
          >
            <div
              className="absolute top-0 left-0 px-4 py-4"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="w-8 h-8 text-slate-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul
              className="flex flex-col items-center justify-between min-h-[250px]"
              onClick={() => setIsNavOpen(false)}
            >
              <NavLink to="/">
                <li className="my-8 uppercase border-b border-gray-400">
                  HOME
                </li>
              </NavLink>
              <NavLink to="/cart">
                <li className="my-8 uppercase border-b border-gray-400">
                  CART
                </li>
              </NavLink>
              <NavLink to="/order">
                <li className="my-8 uppercase border-b border-gray-400">
                  ORDER
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
        <NavLink to="/">
          <div className="w-16 scale-90 cursor-pointer ">
            <img src={require("../assets/books2.png")} alt="book-logo" />
          </div>
        </NavLink>
        <NavLink to="/">
          <p className="hidden font-serif text-xl font-bold cursor-pointer sm:flex">
            BOOKSTROPE
          </p>
        </NavLink>
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="p-0 menu menu-horizontal">
          <li className="justify-between">
            <NavLink to="/">HOME</NavLink>
          </li>
          <li className="">
            <NavLink to="/cart">CART</NavLink>
          </li>
          <li className="">
            <NavLink to="/order">ORDER</NavLink>
          </li>
        </ul>
      </div>
      <div className="gap-2 navbar-end">
        <NavLink to="/cart">
          <button className="btn btn-primary btn-outline">
            <img
              src={require("../assets/shopping-cart.png")}
              alt="shopping-icon"
              className="scale-75"
            />
            <div className="badge badge-accent">{cartProductsLenght}</div>
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
