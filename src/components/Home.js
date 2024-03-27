import React, { useContext } from 'react';
import Filter from './Filter';
import ProductItem from './ProductItem';
import data from '../data';
import { CartState, StoreContext } from '../Context/Context';

function Home() {
  const {
    query,

    price,

    color,

    type,

    gender,

    clearFilter,
  } = CartState();

  const filteredProducts = () => {
    let products = data.products;

    if (query) {
      products = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (price) {
      products = products.sort((a, b) =>
        price === 'Lowest' ? a.price - b.price : b.price - a.price
      );
    }

    if (color) {
      products = products.filter((product) =>
        product.color.toLowerCase().includes(color.toLowerCase())
      );
    }

    if (type) {
      products = products.filter((product) =>
        product.type.toLowerCase().includes(type.toLowerCase())
      );
    }

    if (gender) {
      products = products.filter((product) =>
        product.gender.toLowerCase().includes(gender.toLowerCase())
      );
    }

    return products;
  };

  return (
    <section>
      <div class="   px-4 py-12 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
        <div class=" grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-start">
          <Filter />
          <div class="  lg:col-span-3 ">
            <div class="   grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts().map((prod) => (
                <ProductItem key={prod} prod={prod} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
