import { useRef } from "react";
import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ addNewFunction }) => {
  const nameofTodo = useRef();

  const { title, onInputChange, onResetInputs } = useForm({
    title: "",
  });
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (nameofTodo.current.value.length >= 2) {
      const newTodo = {
        id: new Date().getTime(),
        title: nameofTodo.current.value,
        done: false,
      }
      addNewFunction(newTodo);
      onResetInputs();
    }
    nameofTodo.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={nameofTodo}
        type="text"
        placeholder="¿Que hay que hacer?"
        className="form-control"
      />
      <button type="submit" className="btn btn-outline-primary mt-1">
        Agregar tarea
      </button>
    </form>
  );
};
