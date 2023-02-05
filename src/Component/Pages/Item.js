import React, { useContext, useState } from "react";
import ItemForm from "./ItemForm";
import "./Item.css";
import CartContext from "../../Store/cart-context";

const Item = (props) => {
  const [size, setSize] = useState("");
  const [isError, setIsError] = useState(false)

  const cartCtx = useContext(CartContext);

  const addToCartHandler = (quantity) => {
    if (size === "") {
      setIsError(true)
    } else {
      setIsError(false)
      cartCtx.addItem({
        key: props.id + size,
        id: props.id,
        name: props.title,
        amount: quantity,
        price: props.price,
        size: size,
      });
      console.log(cartCtx.items);
    }
  };

  const sizeHandler = (event) => {
    setSize(event.target.value);
    setIsError(false)
    //console.log(event.target.value)
  };

  return (
    <li key={props.id} className="card">
      <div>
        <h2>{props.title}</h2>
        <div>{props.style}</div>
        <p>
          {"Description : "}
          {props.description === "" ? "NA" : props.description}
        </p>
        
        <select className={isError ? 'error' : 'noerror'} onClick={sizeHandler} defaultValue="">
          <option value="">Please select size</option>
          {props.sizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>

        <p className={props.shipping ? "free" : "paid"}>
          {props.currencyFormat + " " + props.price}
        </p>
      </div>

      <ItemForm id={props.id} err ={isError} onAddToCart={addToCartHandler} />
    </li>
  );
};

export default Item;
