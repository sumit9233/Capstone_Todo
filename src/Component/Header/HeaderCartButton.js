import { useContext } from "react";
import CartContext from "../../Store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext)

  const cartItemsCount = cartCtx.items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);

  return (
    <>
      <button className={classes.button} onClick = {props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Cart</span>
      <span className={classes.badge}>{cartItemsCount}</span>
      </button>
    </>
  );
};

export default HeaderCartButton;
