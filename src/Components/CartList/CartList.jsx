import React from 'react';
import { store } from '../../store';

function CartList() {
  const state = store.getState();
  // eslint-disable-next-line
  const cartItems = state.cartReducer.cartItems;
  console.log(cartItems);
  if (state.cartReducer.count === 0) {
    return (
      <h1>No items on cart</h1>
    );
  }
  return (
    <h1>Items on cart</h1>
  );
}
export default CartList;
