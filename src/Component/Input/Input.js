import React, { useRef, useState} from "react";
import Button from "../UI/Button";
import classes from './Input.module.css'

const TodoInput = (props) => {
  //validity check
  const[isValid, setIsValid] = useState(true);
  
  //Using ref for inputs
  const EnteredInput = useRef(null);

  const formSubmitHandler = (event) =>{
    event.preventDefault()

    if (EnteredInput.current.value.trim().length === 0){
      setIsValid(false);
      return
    }
    setIsValid(true)
    props.onAdd(EnteredInput.current.value)
    document.getElementById("myForm").reset();

  }

  return (
    <form id = 'myForm' onSubmit ={formSubmitHandler} >
      <div className={`${classes['form-control']} ${!isValid && classes.invalid}`}>
        <label> Add your Task </label>
        <input ref={EnteredInput} type="text"></input>
      </div>
      <div className={classes.button}>
        <Button type='submit'> Add </Button>
        {!isValid && <p> Invalid Task Input ! </p>}
      </div>
    </form>
  );
};

export default TodoInput;

