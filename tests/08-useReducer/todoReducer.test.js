import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe("pruebas en el todo reducer", () => {
  const initialState = [
    {
      id: 1,
      description: "Demo Todo",
      done: false,
    },
  ];

  test("debe de regresar el estado inicial", () => {
    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState);
  });

  test("debe de agregar un todo", () => {
    const action = {
      type: "add",
      payload: { id: 2, title: "Todo nuevo 2", done: false },
    };
    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });

  test("debe de toggle un todo", () => {
    const action = {
      type: "toggle",
      payload: { id: 1 },
    };
    const newState = todoReducer(initialState, action);
    expect(newState).toEqual([{
        id: 1,
        description: "Demo Todo",
        done: true,
    }]);
    expect(newState[0].done).toBe(true);
  });

  test("debe de eliminar un todo", () => {
    const action = {
      type: "delete",
      payload: { id: 1 },
    };
    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(0);
  });
});
