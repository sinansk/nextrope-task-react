import Book from "../components/Book";

const Home = () => {
  return (
    <div className="grid items-center w-full h-full grid-cols-3 gap-5">
      <Book />
      <Book />
      <Book />
      <Book />
    </div>
  );
};

export default Home;
