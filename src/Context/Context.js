import { createContext, useContext, useReducer, useState } from 'react';

import { cartReducer, productReducer } from './Reducer';

const Cart = createContext();

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    cart: [],
  });

  const [query, setQuery] = useState('');
  const [price, setPrice] = useState(1000);
  const [color, setColor] = useState('');
  const [type, setType] = useState('');
  const [gender, setGender] = useState('');

  const clearFilter = () => {
    setQuery('');
    setPrice(1000);
    setColor('');
    setType('');
    setGender('');
  };

  return (
    <Cart.Provider
      value={{
        state,
        dispatch,

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

        clearFilter,
      }}
    >
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
