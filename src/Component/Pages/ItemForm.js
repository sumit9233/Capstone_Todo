import React, { useRef } from "react";
import Input from "../UI/Input";
import "./ItemForm.css";

const ItemForm = (props) => {
  const InputRef = useRef();
 
  const submitHandler = (event) => {
    event.preventDefault()

    const enteredQty = InputRef.current.value;
    const QuantityNumber = +enteredQty

    props.onAddToCart(QuantityNumber)
  }

  return (
    <form className="form" onSubmit={submitHandler}>
      <Input
        ref={InputRef}
        label="Quantity"
        input={{
          id: "Qty_+props.id",
          type: "number",
          min: "1",
          max: "4",
          step: "1",
          defaultValue: "1",
        }}
      />
       
      <button>+ Add</button>
      <br></br>
      {props.err && <p style={{color:'red' , marginTop:'2rem'}}> * Size is required</p>}
    </form>
  );
};

export default ItemForm;
