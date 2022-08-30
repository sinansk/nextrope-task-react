import { BookType } from "../../src/types";
import { useAppDisptch } from "../redux/store";
import { addProduct, removeProduct } from "../redux/cartRedux";
interface IBookProps {
  book: BookType;
}

const Book = (props: IBookProps) => {
  const dispatch = useAppDisptch();

  const addToCartHandler = (product: BookType) => {
    dispatch(addProduct(product));
  };

  const removeFromCartHandler = (id: number) => {
    dispatch(removeProduct(id));
  };

  const { book } = props;
  return (
    <div className="flex flex-col shadow-xl card bg-base-100">
      <figure>
        <img className="h-52" src={book.cover_url} alt="book" />
      </figure>
      <div className="px-3 -mt-5 text-center h-72 card-body">
        <h2 className="text-base card-title ">
          {book.title}
          {/* <div className="badge badge-secondary">NEW</div> */}
        </h2>
        <p className="mt-auto text-sm">
          <span className="font-semibold ">Author:</span> {book.author}
        </p>
        <div className="items-center mt-auto justify-evenly card-actions">
          <h2 className="text-xl font-semibold">{book.price} PLN</h2>
          <div className="text-xs badge badge-outline badge-sm">
            {book.pages} Pages
          </div>
        </div>
        <button
          onClick={() => addToCartHandler(book)}
          className="btn btn-primary"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default Book;
