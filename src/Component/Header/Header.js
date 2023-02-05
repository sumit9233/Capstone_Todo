import React, { Fragment } from "react";
import Button from "../UI/Button";
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {

    return(
    <Fragment>
        <header className= {classes.header}> 
            <h2>ClothShop</h2>
            <h4>Hi {props.name}, Welcome to the App</h4>
            <select name='Filter' onChange={props.onLowPrice}  >
                {!props.isfiltered && <option defaultValue='' selected disabled hidden>Price Filter</option>}
                <option value='low' >Less than 12 $</option>
                <option value='avg'>Between 12$ - 25 $</option>
                <option value='high'>More than 25 $</option>
            </select>
            <Button onClick={props.onRemoveFilter}>Remove Filter</Button>
            <HeaderCartButton onClick={props.onClick}></HeaderCartButton>
            <Button onClick ={props.onLogout}>Log Out</Button>
        </header>
 
    </Fragment>
    )
}

export default Header;