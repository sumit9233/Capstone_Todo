import React, { useContext, useState } from "react";
import Header from "../Header/Header";
import ItemCard from "./ItemCard";
import Cart from "../Cart/Cart";
import "./Home.css";
import Button from "../UI/Button";
import CartProvider from "../../Store/CartProvider";
import OrderSuccess from "./OrderSuccess";
import CartContext from "../../Store/cart-context";

const Home = (props) => {
  const cartCtx = useContext(CartContext)
  const [pageNum, setPageNum] = useState(1);
  const [cart, setCart] = useState(false);
  const [filteredPrice, setFilteredPrice] = useState(false);
  const[isOrdered, setIsOrdered] = useState(false)
 

  const PrevSubmitHandler = () => {
    let page_Num = pageNum - 1;
    setPageNum(page_Num);
  };

  const NextSubmitHandler = () => {
    let page_Num = pageNum + 1;
    setPageNum(page_Num);
  };

  const showCartHandler = () => {
    setCart(true);
  };

  const hideCartHandler = () => {
    setCart(false);
  };

  const FiltereHandler = (event) => {
    setFilteredPrice(event.target.value);
  };

  const removeFilterHandler = () => {
    setFilteredPrice(false);
    setPageNum(1);
  };

  const orderHandler = (value) =>{
    setCart(false)
    setIsOrdered(value)
  }

  const orderCloseHandler = () => {
    setIsOrdered(false)
  }

  
  return (
    <CartProvider>
      {cart && <Cart onHide={hideCartHandler} onClose={hideCartHandler} order={orderHandler} />}
      {isOrdered && <OrderSuccess onClose={orderCloseHandler} onFinish={orderCloseHandler}/>}

      <Header
        isfiltered={filteredPrice}
        onClick={showCartHandler}
        onLowPrice={FiltereHandler}
        onRemoveFilter={removeFilterHandler}
        onLogout={props.onLogout}
        name={props.name}
      />

      <div className="container">
        <ItemCard page={pageNum} filteredPrice={filteredPrice} />

        {!filteredPrice && (
          <div className="pagination">
            {!(pageNum === 1) && (
              <Button onClick={PrevSubmitHandler}>Prev Page</Button>
            )}

            {!(pageNum === 4) && (
              <Button className="next" onClick={NextSubmitHandler}>
                Next Page
              </Button>
            )}
          </div>
        )}
      </div>
    </CartProvider>
  );
};

export default Home;