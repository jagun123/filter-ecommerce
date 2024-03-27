import React from 'react';
import { AiFillShopping } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { CartState, StoreContext } from '../Context/Context';
import { useContext } from 'react';

function Header() {
  const {
    state: { cart },
    query,
    setQuery,
  } = CartState();
  return (
    <nav class="flex sticky top-2 z-50 items-center justify-between max-w-3xl  rounded-2xl mx-auto  bg-white shadow-md p-5 md:px-10">
      <a class="inline-flex items-center justify-center w-10 h-10" href="/">
        Ecommerce
      </a>

      <ul class="flex items-center space-x-2 text-sm font-medium text-gray-500">
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <AiOutlineSearch className="" />
          </span>
          <input
            type="search"
            name="Search"
            id="search"
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none bg-gray-100 text-gray-800 focus:bg-gray-50"
          />
        </div>

        <Link to={'/cart'}>
          <div class=" pointer  flex space-x-2">
            <AiFillShopping class="h-11" />
            <span class=" mt-2 text-lg">{cart.length}</span>
          </div>
        </Link>
      </ul>
    </nav>
  );
}

export default Header;
