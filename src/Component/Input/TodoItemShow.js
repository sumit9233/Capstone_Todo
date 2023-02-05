import React from "react";
import Button from "../UI/Button";
import classes from "./TodoItemShow.module.css";

const TodoItemShow = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className={classes["item-show"]}>
      {props.children}
      <div className="button">
        <Button onClick={deleteHandler}>Done</Button>
      </div>
    </li>
  );
};

export default TodoItemShow;
