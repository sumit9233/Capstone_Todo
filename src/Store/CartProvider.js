import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => (item.id === action.item.id && item.size === action.item.size)
    );
    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;

    if (existingCartItem) {
      let updatedItem;
      updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }


  if (action.type === "REMOVE_ITEM") {
    console.log(action.id)

    const existingCartItemIndex = state.items.findIndex(
      (item) => (item.key === action.id ),
    );

    const existingCartItem = state.items[existingCartItemIndex];
    console.log(existingCartItem)

    const updatedTotalAmount =
      state.totalAmount - existingCartItem.price ;

    let updatedItems;

    if (existingCartItem.amount===1) {
      updatedItems = state.items.filter(item => (item.key !== action.id))
    }else {
      let updatedItem;
      updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount -1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } 

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }


  if (action.type === "CLEAR"){
    return defaultCartState
  };

  return defaultCartState;

  
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", item: item });
  };

  const removeItemFromCartHandler = (idSize) => {
    dispatchCartAction({ type: "REMOVE_ITEM", id: idSize});
  };


  const clearItemHandler = () => {
    dispatchCartAction({ type: "CLEAR"});
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearItem: clearItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
