import { useState } from "react";
import TodoInput from "./Input";
import TodoItemList from "./TodoItemList";
import classes from "./TodoItem.module.css";

const TodoItem = () => {
  const [Todo, setTodo] = useState([]);

  const addItemHandler = (enteredText) => {
    setTodo((prevItem) => {
      const updatedItems = [...prevItem];
      updatedItems.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedItems;
    });
  };

  const DeleteTaskHandler = (TaskId) => {
    setTodo((prevItem) => {
      const updatedItems = prevItem.filter((item) => item.id !== TaskId);
      return updatedItems;
    });

    
  };

  const content = (
    <TodoItemList items={Todo} onDeleteTask={DeleteTaskHandler}></TodoItemList>
  );


  return (
    <>
      <section className={classes.goals}>
        <TodoInput onAdd={addItemHandler} />
      </section>
      <section className={classes["content"]}>{content}</section>
     
    </>
  );
};

export default TodoItem;
