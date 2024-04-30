import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/08-useReducer/TodoApp";
import { useTodos } from "../../src/08-useReducer/useTodos";

jest.mock("../../src/08-useReducer/useTodos");
describe("pruebas TodoApp", () => {
  useTodos.mockReturnValue({
    todos:[{id:1,title:'test1',done:false},{id:2,title:'test2',done:true}],
    handleNewTodo: jest.fn(),
    handleToggleTodo:jest.fn(),
    handleDeleteTodo:jest.fn(),
  });

  test("debe de mostrar el componente correctamente", () => {
    render(<TodoApp></TodoApp>);
    expect(screen.getByText('test1')).toBeTruthy();
    expect(screen.getByText('test2')).toBeTruthy();
    expect(screen.getByRole('textbox')).toBeTruthy();

  });
});
