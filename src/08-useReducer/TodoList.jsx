import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos, onDeleteTodo,onToggleTodo }) => {

  return (
    <ol className="list-group">
      {todos.map((todo) => {
        return (
          <TodoItem
            id={todo.id}
            key={todo.id}
            title={todo.title}
            deleteFun={onDeleteTodo}
            done={todo.done}
            onToggleTodo={onToggleTodo}
          />
        );
      })}
    </ol>
  );
};
