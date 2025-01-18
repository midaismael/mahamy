import { createContext, useContext, useReducer } from "react";
import reducer from "../../reducers/todosReducers";

export const TodoContext = createContext([]);
const TodoProvider = ({ children }) => {
  const [todos, todosDispatch] = useReducer(reducer, []);
  return (
    <TodoContext.Provider value={{ todos: todos, dispatch: todosDispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
export const useTodos = () => {
  return useContext(TodoContext);
};
export default TodoProvider;
//export const TodoContext = createContext([]);
