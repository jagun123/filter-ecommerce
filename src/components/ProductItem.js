import { useContext } from 'react';
import { AiFillShopping } from 'react-icons/ai';
import { CartState, StoreContext } from '../Context/Context';

function ProductItem({ prod }) {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div class="w-80 flex     justify-center items-center">
      <div class="w-full p-4">
        <div class="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
          <div class="prod-title">
            <p class="text-xl uppercase text-gray-900 font-bold">{prod.name}</p>
            <p class="text-sm text-gray-400">{prod.type}</p>
          </div>
          <div class="prod-img">
            <img
              src={prod.imageURL}
              class="w-full object-cover object-center"
            />
          </div>
          <div class="prod-info grid gap-10">
            <div></div>
            <div class="flex flex-col md:flex-row justify-between items-center text-gray-900">
              <p class="font-bold text-lg">Rs {prod.price}</p>
              {cart.some((p) => p.id === prod.id) ? (
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  variant="danger"
                  onClick={() =>
                    dispatch({
                      type: 'REMOVE_FROM_CART',
                      payload: prod,
                    })
                  }
                >
                  Remove from Cart
                </button>
              ) : (
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() =>
                    dispatch({
                      type: 'ADD_TO_CART',
                      payload: prod,
                    })
                  }
                  disabled={!prod.inStock}
                >
                  {!prod.inStock ? 'Out of Stock' : 'Add to Cart'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
