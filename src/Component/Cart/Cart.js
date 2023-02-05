import React, { useContext } from "react";
import CartContext from "../../Store/cart-context";
import Modal from "../UI/Modal";
import "./Cart.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext)

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
  const hasItems = cartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item, amount:1})

  }

  const cartItemRemoveHandler = (idSize) => {
    cartCtx.removeItem(idSize)
  }

  const ClearHandler = () => {
   fetch("http://demo5922353.mockable.io/orders", {
        method:'POST',
        body: JSON.stringify({
        orderedItems: cartCtx.items
        })
      })
    cartCtx.clearItem()
    props.order(true)
  }

  const cartItems = (
    <ul className="cartitems">
      {cartCtx.items.map((item) => (
        <CartItem
        key = {Math.random()}
        name={item.name}
        amount={item.amount}
        price={item.price}
        size={item.size}
        onRemove={cartItemRemoveHandler.bind(null, item.id+item.size)}
        onAdd = {cartItemAddHandler.bind(null, item)}/>
      ))}
    </ul>
  );


  return (
      <Modal onClose={props.onClose}>
      {cartItems}
      <div className="total">
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className="actions">
        <button className="button-alt" onClick={props.onHide}>close</button>
        { hasItems && <button className="button" onClick={ClearHandler}>Order</button> }
      </div>
    </Modal>
  );
};

export default Cart;
