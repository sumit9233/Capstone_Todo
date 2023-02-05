import React from "react";
import TodoItemShow from "./TodoItemShow";
import classes from './TodoItemList.module.css'

const TodoItemList = (props) => {
  return (
    <ul className={classes['item-list']}>
      {props.items.map((item) => (
        <TodoItemShow key={item.id} id={item.id} onDelete={props.onDeleteTask}>
          {item.text}
        </TodoItemShow>
      ))}
    </ul>
  );
};
export default TodoItemList;
