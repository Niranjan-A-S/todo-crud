import { useCallback, useReducer } from "react";
import { todoReducer } from "./reducer";

export const useTodos = (initialData = []) => {
  const [todos, dispatch] = useReducer(todoReducer, initialData);

  const addTodo = useCallback((name) => {
    dispatch({ type: "ADD", payload: { name } });
  }, []);

  const deleteTodo = useCallback((id) => {
    dispatch({ type: "DELETE", payload: { id } });
  }, []);

  const toggleStatus = useCallback((id) => {
    dispatch({ type: "TOGGLE", payload: { id } });
  }, []);

  const updateTodo = useCallback(({ id, name }) => {
    dispatch({ type: "UPDATE", payload: { id, name } });
  }, []);

  return { todos, addTodo, deleteTodo, toggleStatus, updateTodo };
};
