import { useReducer } from "react";
import CartContext from "./cart-context";

// Setting up the default state
const defaultCartState = {
  items: [],
  totalAmount: 0,
};

// Cart reduer has the previous state, then the action.  In order to use this
// you send an object with a type, and a payload (names can vary)
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    //check if item is already in array
    for (let x = 0; x < state.items.length; x++) {
      if (state.items[x].name === action.item.name) {
        let updatedItems = state.items.map((item) => {
          return { ...item };
        });
        updatedItems.find((item) => item.name == action.item.name).quantity +=
          action.item.quantity;
        const updatedTotalAmount =
          state.totalAmount + action.item.price * action.item.quantity;
        return { items: updatedItems, totalAmount: updatedTotalAmount };
      }
    }
    const addedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.quantity;
    return {
      items: addedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    let updatedItems = state.items.map((item) => {
      return { ...item };
    });
    //checks if there is only 1 quantity
    if (
      updatedItems.find((item) => item.name == action.item.name).quantity === 1
    ) {
      let index = updatedItems.indexOf(action.item.name);
      updatedItems.splice(index, 1);
    } else {
      updatedItems.find((item) => item.name == action.item.name).quantity -= 1;
    }
    const updatedTotalAmount = state.totalAmount - action.item.price;
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }
  return defaultCartState;
};

// React component that has the logic for adjusting the state, returns the
// default cart-context with a provider wrapper.  Passes the items, total amount
// and the functions to change the state
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (name) => {
    dispatchCartAction({ type: "REMOVE", item: name });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
