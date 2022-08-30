import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/order", { replace: true });
  };
  return (
    <div className="mt-5 flex flex-col text-lg lg:h-[calc(100vh-4rem)]">
      <div className="mb-5 ">
        <ul className="">
          <li className="flex flex-row gap-3 mb-5">
            <img
              src="http://localhost:3001/static/cover/book/458.jpg"
              alt="book"
              className="w-40 h-40 rounded-lg"
            />
            <div className="">
              <h2 className="mb-2 text-xl font-semibold">
                Matematyka 1. Podręcznik. Zakres rozszerzony
              </h2>
              <p className="text-sm">
                <span className="font-semibold ">Author:</span> M. Karpiński, M.
                Dobrowolska, M. Braun, J. Lech
              </p>
              <p className="text-sm">
                <span className="font-semibold ">Number Of Pages:</span> 300
              </p>
              <p className="text-xs">
                <span className="font-semibold ">Product Id:</span> 458
              </p>
            </div>
            <div className="flex flex-col items-center my-auto ml-auto text-3xl gap-7">
              <div className="flex gap-1">
                <span className="cursor-pointer">-</span>
                <span>1</span>
                <span className="cursor-pointer">+</span>
              </div>
              <h2>$ 100</h2>
            </div>
          </li>
          <li className="flex flex-row gap-3 mb-5">
            <img
              src="http://localhost:3001/static/cover/book/458.jpg"
              alt="book"
              className="w-40 h-40 rounded-lg"
            />
            <div className="">
              <h2 className="mb-2 text-xl font-semibold">
                Matematyka 1. Podręcznik. Zakres rozszerzony
              </h2>
              <p className="text-sm">
                <span className="font-semibold ">Author:</span> M. Karpiński, M.
                Dobrowolska, M. Braun, J. Lech
              </p>
              <p className="text-sm">
                <span className="font-semibold ">Number Of Pages:</span> 300
              </p>
              <p className="text-xs">
                <span className="font-semibold ">Product Id:</span> 458
              </p>
            </div>
            <div className="flex flex-col items-center my-auto ml-auto text-3xl gap-7">
              <div className="flex gap-1">
                <span className="cursor-pointer">-</span>
                <span>1</span>
                <span className="cursor-pointer">+</span>
              </div>
              <h2>$ 100</h2>
            </div>
          </li>
        </ul>
      </div>

      <button onClick={handleClick} className="btn btn-warning">
        NEXT
      </button>
    </div>
  );
};

export default Cart;
