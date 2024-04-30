import React from "react";

export const TodoItem = ({id,title,deleteFun,onToggleTodo,done}) => {
  return (
    <li
      key={id}
      className="list-group-item d-flex justify-content-between"
      onClick={() => onToggleTodo(id)}
    >
      <span className={`align-self-center ${done ? 'text-decoration-line-through' : '' }`} aria-label="span">{title}</span>
      <button type="button" className="btn btn-danger" aria-label="button" onClick={() => deleteFun(id)}>
        Borrar
      </button>
    </li>
  );
};
