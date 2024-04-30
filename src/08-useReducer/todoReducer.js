export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "add":
      return [...initialState,action.payload];
    case "delete":
      return initialState.filter(todo => todo.id !== action.payload.id);
    case "toggle":
        return initialState.map(todo => {
          if(todo.id === action.payload.id) {
            return {...todo,done:!todo.done}
          }
          return todo;
        });
    default:
      return initialState;
  }
};
