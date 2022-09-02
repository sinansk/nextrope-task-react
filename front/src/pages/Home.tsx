import { useEffect } from "react";
import Book from "../components/Book";
import { fetchBooks, setPage } from "../redux/booksSlice";
import { useAppDisptch, useAppSelector } from "../redux/store";
import { BookType } from "../types";

const Home = () => {
  const dispatch = useAppDisptch();
  const products = useAppSelector((state) => state.books.data);
  const currentPage = useAppSelector((state) => state.books.currentPage);

  useEffect(() => {
    dispatch(fetchBooks(currentPage));
  }, []);

  useEffect(() => {
    dispatch(fetchBooks(currentPage));
  }, [currentPage]);

  const handlePage = (e: any) => {
    dispatch(setPage(e.target.value));
  };

  return (
    <div>
      <div className="flex flex-col items-center gap-1 sm:items-center sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-3 sm:h-full">
        {products?.map((product: BookType) => (
          <Book product={product} key={product.id} />
        ))}
      </div>
      <div className="flex">
        <div className="mx-auto my-2 btn-group">
          <button
            onClick={handlePage}
            value="1"
            className={`btn ${currentPage === "1" && `btn-active`}`}
          >
            1
          </button>
          <button
            onClick={handlePage}
            value="2"
            className={`btn ${currentPage === "2" && `btn-active`}`}
          >
            2
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
