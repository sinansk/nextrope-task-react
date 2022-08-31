import { BookType } from "../../src/types";
import { useAppDisptch } from "../redux/store";
import { addProduct, removeProduct } from "../redux/cartRedux";
import { FunctionComponent } from "react";
interface IBookProps {
  product: BookType;
}

const Book: FunctionComponent<IBookProps> = (props) => {
  const dispatch = useAppDisptch();

  const addToCartHandler = (product: BookType) => {
    dispatch(addProduct(product));
  };

  const { product } = props;
  return (
    <div className="flex flex-col shadow-xl card bg-base-100">
      <figure>
        <img className="h-52" src={product.cover_url} alt="book" />
      </figure>
      <div className="px-3 -mt-5 text-center h-72 card-body">
        <h2 className="text-base card-title ">{product.title}</h2>
        <p className="mt-auto text-sm">
          <span className="font-semibold ">Author:</span> {product.author}
        </p>
        <div className="items-center mt-auto justify-evenly card-actions">
          <h2 className="text-xl font-semibold">{product.price} PLN</h2>
          <div className="text-xs badge badge-outline badge-sm">
            {product.pages} Pages
          </div>
        </div>
        <button
          onClick={() => addToCartHandler(product)}
          className="btn btn-primary"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default Book;
