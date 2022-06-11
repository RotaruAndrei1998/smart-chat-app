import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <div className="border border-gray-500 rounded-lg h-10 flex active:bg-red-500 w-96">
      <AiOutlineSearch className="w-5 h-5 m-auto ml-2" />
      <input
        placeholder="Search items, collections, and accounts"
        className="w-full p-2"
      />
    </div>
  );
};

export default Search;
