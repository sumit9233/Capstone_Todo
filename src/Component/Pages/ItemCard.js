import React, { useEffect, useState } from "react";

import Item from "./Item";

const ItemCard = (props) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [IsError, setIsError] = useState(false)
  

  useEffect(() => {
    try {
      fetch("https://demo5922353.mockable.io/products")
        .then((response) => response.json())
        .then((data) => setData(data.products));
      setIsLoading(false)
    } catch (error) {
      console.log(error,'sscjbhd')
      setIsError(true)
    }
  }, []);

  const itemlist = data.map((item) => {
    if (item.id >= 5 * (props.page - 1) && item.id < 5 * props.page)
      return (
        <Item
          id={item.id}
          key={item.id}
          price={item.price}
          style={item.style}
          title={item.title}
          sizes={item.availableSizes}
          shipping={item.isFreeShipping}
          description={item.description}
          currencyFormat={item.currencyFormat}
        ></Item>
      );
  });

  let filteredData = data;

  if (props.filteredPrice === "low") {
    filteredData = data.filter((item) => item.price < 12);
  } else if (props.filteredPrice === "avg") {
    filteredData = data.filter((item) => item.price > 12 && item.price < 25);
  } else if (props.filteredPrice === "high") {
    filteredData = data.filter((item) => item.price > 25);
  }



  const filteredItemList = filteredData.map((item) => (
    <Item
      id={item.id}
      key={item.id}
      price={item.price}
      style={item.style}
      title={item.title}
      sizes={item.availableSizes}
      shipping={item.isFreeShipping}
      description={item.description}
      currencyFormat={item.currencyFormat}
    ></Item>
  ));

  return (
    <>
      { IsError && <p style={{marginTop:'5rem', color: 'red'}}>Something Went Wrong !</p>}
      {isLoading && <h1 style={{marginTop:'5rem', color: 'red', textAlign :'center'}}> Loading ...</h1>}
      {!props.filteredPrice && !isLoading && <ul>{itemlist}</ul>}
      {props.filteredPrice && <ul>{filteredItemList}</ul>}
    </>
  );
};

export default ItemCard;
