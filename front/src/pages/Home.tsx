import { useEffect, useState } from "react";
import Book from "../components/Book";
import { publicRequest } from "../requests";
import { BooksType } from "../types";
import { BookType } from "../types";

const Home = () => {
  const [page, setPage] = useState(1);
  const [books, setBooks] = useState([]);
  const getBooks = async () => {
    try {
      const { data } = await publicRequest.get("/book?page=" + page);
      setBooks(data.data);
      console.log(data.data);
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
      <div className="flex flex-col items-center gap-1 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-3 sm:h-full">
        {books?.map((book) => (
          <Book book={book} key={book} />
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
