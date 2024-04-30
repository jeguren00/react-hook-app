import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe("test TodoItem", () => {
  const todo = {
    id: 1,
    title: "Test Todo1",
    done: false,
  };
  const todo2 = {
    id: 2,
    title: "Test Todo2",
    done: true,
  };
  const onToggleTodoMock = jest.fn();
  const deleteFunMock = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("debe de mostrarse el todo pendiente de completar", () => {
    render(
      <TodoItem
        id={todo.id}
        title={todo.title}
        done={todo.done}
        onToggleTodo={onToggleTodoMock}
        deleteFun={deleteFunMock}
      ></TodoItem>
    );
    const liElement = screen.getByRole("listitem");
    expect(liElement.className).toBe(
      "list-group-item d-flex justify-content-between"
    );

    const spanElement = screen.getByLabelText("span");
    expect(spanElement.className).toBe("align-self-center ");
    expect(spanElement.className).not.toContain("test-decoration-line-through");
  });

  test("debe de mostrarse el todo completado", () => {
    render(
      <TodoItem
        id={todo2.id}
        title={todo2.title}
        done={todo2.done}
        onToggleTodo={onToggleTodoMock}
        deleteFun={deleteFunMock}
      ></TodoItem>
    );
    console.log(todo2);
    const spanElement = screen.getByLabelText("span");
    expect(spanElement.className).toContain("text-decoration-line-through");
  });

  test("span debe llamar al toggle al hacer click sobre el", () => {
    render(
      <TodoItem
        id={todo.id}
        title={todo.title}
        done={todo.done}
        onToggleTodo={onToggleTodoMock}
        deleteFun={deleteFunMock}
      ></TodoItem>
    );
    const spanElement = screen.getByLabelText("span");
    fireEvent.click(spanElement);
    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);

  });

  test("el boton debe llamar al delete", () => {
    render(
      <TodoItem
        id={todo.id}
        title={todo.title}
        done={todo.done}
        onToggleTodo={onToggleTodoMock}
        deleteFun={deleteFunMock}
      ></TodoItem>
    );
    const buttonElement = screen.getByLabelText("button");
    fireEvent.click(buttonElement);
    expect(deleteFunMock).toHaveBeenCalledWith(todo.id);

  });
});
