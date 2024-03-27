import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartState, StoreContext } from '../Context/Context';
import { XCircleIcon } from '@heroicons/react/outline';
import { FaRegWindowClose } from 'react-icons/fa';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useContext } from 'react';

function Cart() {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <div>
      {cart.length === 0 ? (
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-2xl font-bold">No items in cart</h1>
          <Link to={'/'}> GO Shopping</Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-4 md:gap-5">
          <div className="overflow-x-auto md:col-span-3">
            <table className="min-w-full ">
              <thead className="border-b">
                <tr>
                  <th className="p-5 text-left">Item</th>
                  <th className="p-5 text-center">Quantity</th>
                  <th className="p-5 text-center">Price</th>
                  <th className="p-5 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((prod) => (
                  <tr key={prod.id} className="border-b">
                    <td>
                      <a className="flex items-center">
                        <img
                          src={prod.imageURL}
                          alt={prod.name}
                          width={50}
                          height={50}
                        ></img>
                        &nbsp;
                        {prod.name}
                      </a>
                    </td>

                    <td className="p-5 text-center">
                      <button
                        className="p-1 border rounded-md"
                        onClick={() =>
                          dispatch({
                            type: 'DEC',
                            payload: prod.id,
                          })
                        }
                      >
                        -
                      </button>
                      &nbsp;
                      {prod.qty}
                      &nbsp;
                      <button
                        className="p-1 border rounded-md"
                        onClick={() =>
                          dispatch({
                            type: 'INC',
                            payload: prod.id,
                          })
                        }
                      >
                        +
                      </button>
                    </td>

                    <td className="p-5 text-center">Rs {prod.price}</td>
                    <td className="p-5 text-center">
                      <button
                        onClick={() => {
                          dispatch({
                            type: 'REMOVE_FROM_CART',
                            payload: prod,
                          });
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className=" shadow-lg rounded-2xl  bg-white dark:bg-gray-900 w-64 m-auto relative  p-5">
            <ul>
              <li>
                <div className="pb-3 text-xl">Subtotal : {cart.length} </div>
              </li>
              <div className="pb-3 text-xl">Total Rs {total} </div>
              <li>
                <button
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  disabled={cart.length === 0}
                >
                  Check Out
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
