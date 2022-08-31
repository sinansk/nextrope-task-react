import { Link, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDisptch } from "../redux/store";
import { addProduct, removeProduct, emptyCart } from "../redux/cartRedux";
import { BookType } from "../types";
const Cart = () => {
  const dispatch = useAppDisptch();
  const cartProducts = useAppSelector((state) => state.cartProducts);
  console.log({ cartProducts });
  let navigate = useNavigate();

  const navigateToOrder = () => {
    navigate("/order", { replace: true });
  };

  const navigateToHome = () => {
    navigate("/", { replace: true });
  };

  const addToCartHandler = (product: BookType) => {
    dispatch(addProduct(product));
  };

  const removeFromCartHandler = (id: number) => {
    dispatch(removeProduct(id));
  };

  return (
    <div className="grid items-center min-h-[calc(100vh-20rem)]">
      {cartProducts.length > 0 ? (
        <div className="flex flex-col text-lg ">
          <button
            onClick={() => dispatch(emptyCart())}
            className="self-end btn btn-outline"
          >
            CLEAR CART
          </button>
          <div className="mb-5 ">
            <ul className="">
              {cartProducts?.map((product) => (
                <li className="flex flex-row gap-3 mb-5">
                  <img
                    src={product.cover_url}
                    alt="book"
                    className="w-40 h-40 rounded-lg"
                  />
                  <div className="">
                    <h2 className="mb-2 text-xl font-semibold">
                      {product.title}
                    </h2>
                    <p className="text-sm">
                      <span className="font-semibold ">Author:</span>{" "}
                      {product.author}
                    </p>
                    <p className="text-sm">
                      <span className="font-semibold ">Number Of Pages:</span>{" "}
                      {product.pages}
                    </p>
                    <p className="text-xs">
                      <span className="font-semibold ">Product Id:</span>{" "}
                      {product.id}
                    </p>
                  </div>
                  <div className="flex flex-col items-center my-auto ml-auto text-3xl gap-7">
                    <div className="flex items-center gap-1">
                      <span
                        onClick={() => addToCartHandler(product)}
                        className="cursor-pointer"
                      >
                        +
                      </span>
                      <span>{product.amount}</span>
                      {product.amount > 1 ? (
                        <span
                          onClick={() => removeFromCartHandler(product.id)}
                          className="cursor-pointer"
                        >
                          -
                        </span>
                      ) : (
                        <span
                          onClick={() => removeFromCartHandler(product.id)}
                          className="m-auto cursor-pointer"
                        >
                          <svg
                            width="24"
                            height="24"
                            xmlns="http://www.w3.org/2000/svg"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          >
                            <path d="M19 24h-14c-1.104 0-2-.896-2-2v-16h18v16c0 1.104-.896 2-2 2m-9-14c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm6 0c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm6-5h-20v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2zm-12-2h4v-1h-4v1z" />
                          </svg>
                        </span>
                      )}
                    </div>
                    <h2>{product.price * product.amount} PLN</h2>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <button onClick={navigateToOrder} className="btn btn-warning">
            NEXT
          </button>
        </div>
      ) : (
        <div className="grid items-center w-1/2 gap-10 m-auto text-3xl font-semibold text-center h-1/2">
          <h2>YOUR CART IS EMPTY</h2>
          <button onClick={navigateToHome} className="btn btn-warning">
            CONTINUE SHOPPING
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
