import { todoReducer } from "./todoReducer";
import { useEffect, useReducer } from "react";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};
export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todoObject) => {
    const action = {
      type: "add",
      payload: todoObject,
    };
    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    console.log({ id });
    const action = {
      type: "delete",
      payload: { id },
    };
    dispatch(action);
  };

  const handleToggleTodo = (id) => {
    console.log({ id });
    const action = {
      type: "toggle",
      payload: { id },
    };
    dispatch(action);
  };

  return {
    todos,
    handleNewTodo,
    handleToggleTodo,
    handleDeleteTodo
  }
};
