import { useEffect, useState } from "react";
import Book from "../components/Book";
import { publicRequest } from "../requests";
import { BooksType } from "../types";
import { BookType } from "../types";

const Home = () => {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState<BookType[]>([]);
  const getBooks = async () => {
    try {
      const { data } = await publicRequest.get<BooksType>("/book?page=" + page);
      setProducts(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  useEffect(() => {
    getBooks();
  }, [page]);

  const handlePage = (e: any) => {
    setPage(e.target.value);
  };

  return (
    <div>
      <div className="flex flex-col items-center gap-1 sm:items-center sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-3 sm:h-full">
        {products?.map((product) => (
          <Book product={product} key={product.id} />
        ))}
      </div>
      <div className="flex">
        <div className="mx-auto btn-group">
          <button
            onClick={handlePage}
            value="1"
            className={`btn ${page === 1 && `btn-active`}`}
          >
            1
          </button>
          <button
            onClick={handlePage}
            value="2"
            className={`btn ${page === 2 && `btn-active`}`}
          >
            2
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
