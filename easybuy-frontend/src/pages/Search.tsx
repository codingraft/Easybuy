import { useState } from "react";
import ProductCard from "../components/ProductCard";

const Search = () => {
  const [range, setRange] = useState<number>(1000);
  const [category, setCategory] = useState<string>("");
  const [sort, setSort] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  const addToCart = () => {};
  return (
    <div className="container flex items-start justify-between mx-auto gap-7 p-10 sticky top-2">
      <aside className="search-sidebar border border-slate-200 flex-1 p-10 rounded bg-white">
        <h1 className="text-2xl mb-5">Filters</h1>
        <div className="filter mb-5">
          <h2>Sort</h2>
          <select
          value={sort}
            name="sort"
            id=""
            className="p-2 border border-gray-300 rounded-md w-full"
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="asc">Price (High to low)</option>
            <option value="dsc">Price (Low to High)</option>
          </select>
        </div>
        <div className="filter mb-4">
          <h2>Max Price: {range || ""}</h2>
          <input
            type="range"
            min={100}
            max={100000}
            value={range}
            onChange={(e) => setRange(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div className="filter">
          <h2>Category</h2>
          <select
            name="sort"
            id=""
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-2 border border-gray-300 rounded-md w-full"
          >
            <option value="price">All</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </aside>
      <main className="search-main lg:w-3/4 sm:w-full">
        <h1 className="text-2xl ">Products</h1>
        <div className="search">
          <input
            type="text"
            placeholder="Search by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="mt-1 p-2 block w-full bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />

          <div className="product_card">
            <ProductCard
              productId="sdv"
              image="https://m.media-amazon.com/images/I/514T0SvwkHL._SL1500_.jpg"
              name="Random"
              price={66878}
              quantity={0}
              handler={addToCart}
            />
          </div>
        </div>

        <article className="pagination flex items-center justify-center mt-5 gap-4">
          <button
            onClick={() => setPage(page - 1)}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
            disabled={page === 1}
          >
            Previous
          </button>
          <span className="text-lg">
            {page} of {4}
          </span>
          <button
            onClick={() => setPage(page + 1)}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
            disabled={page === 4}
          >
            Next
          </button>
        </article>
      </main>
    </div>
  );
};
export default Search;
