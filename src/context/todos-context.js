import { createContext, useContext, useState } from "react";

const TodosContext = createContext();

const useTodos = () => useContext(TodosContext);

const TodosProvider = ({ children }) => {
  const [showTodo, setShowTod] = useState(false);
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const todoContainer = () => {
    setTodos((todos) => [...todos, todo]);
    setTodo("");
  };
  return (
    <TodosContext.Provider
      value={{
        showTodo,
        setShowTod,
        todo,
        setTodo,
        todos,
        setTodos,
        todoContainer,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export { useTodos, TodosProvider };
