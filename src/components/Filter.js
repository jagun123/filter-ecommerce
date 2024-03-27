import React from 'react';
import { useContext } from 'react';
import { CartState, StoreContext } from '../Context/Context';

const COLORS = ['Blue', 'Red', 'Green'];

const GENDRE = ['Men', 'Women'];
const TYPE = ['Polo', 'Hoodie', 'Basic'];

const PRICE = ['0-250', ' 250-500', '500-1000'];

function Filter() {
  const {
    query,
    setQuery,
    price,
    setPrice,
    color,
    setColor,
    type,
    setType,
    gender,
    setGender,
    updatePrice,

    clearFilter,
    item,
    addTocart,
    deleteItem,
  } = CartState();

  return (
    <div class="lg:sticky lg:top-24  ">
      <details open class="overflow-hidden border border-gray-200 rounded">
        <summary class="flex items-center justify-between px-5 py-3 bg-gray-100 lg:hidden">
          <span class="text-sm font-medium">Toggle Filters</span>

          <svg
            class="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </summary>

        <form action="" class="border-t border-gray-200 lg:border-t-0">
          <fieldset onChange={(e) => setColor(e.target.value)}>
            <legend class="block w-full px-5 py-3 text-xs font-medium bg-gray-50">
              Color
            </legend>

            <div class="px-5 py-6 space-y-2">
              {COLORS.map((color) => (
                <label class="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                    value={color}
                  />
                  <span class="text-sm text-gray-700">{color}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <div>
            <fieldset onChange={(e) => setGender(e.target.value)}>
              <legend class="block w-full px-5 py-3 text-xs font-medium bg-gray-50">
                Gender
              </legend>

              <div class="px-5 py-6 space-y-2">
                {GENDRE.map((gendre) => (
                  <label class="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                      value={gendre}
                    />
                    <span class="text-sm text-gray-700">{gendre}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          </div>

          <div>
            <fieldset onChange={(e) => setPrice(e.target.value)}>
              <legend class="block w-full px-5 py-3 text-xs font-medium bg-gray-50">
                Price
              </legend>

              <div class="px-5 py-6 space-y-2">
                {PRICE.map((price) => (
                  <label class="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                      value={price}
                    />
                    <span class="text-sm text-gray-700">{price}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          </div>
          <div>
            <fieldset onChange={(e) => setType(e.target.value)}>
              <legend class="block w-full px-5 py-3 text-xs font-medium bg-gray-50">
                Type
              </legend>

              <div class="px-5 py-6 space-y-2">
                {TYPE.map((type) => (
                  <label class="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                      value={type}
                    />
                    <span class="text-sm text-gray-700">{type}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          </div>

          <div class="flex justify-center px-5 py-3 border-t border-gray-200">
            <button
              name="apply"
              onClick={clearFilter}
              type="button"
              class="px-5 py-3 text-xs font-medium text-white bg-green-600 rounded"
            >
              Clear Filters
            </button>
          </div>
        </form>
      </details>
    </div>
  );
}

export default Filter;
