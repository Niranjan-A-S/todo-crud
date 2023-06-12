import { useCallback } from "react";
import { AddTodo } from "./components/add-todo";
import { TodoItem } from "./components/todo-item";
import "./styles.css";
import { useTodos } from "./use-todos";

export default function App() {
  const { addTodo, deleteTodo, toggleStatus, updateTodo, todos } = useTodos();

  const renderTodo = useCallback(
    ({ name, id, isCompleted }) => (
      <TodoItem
        key={id}
        name={name}
        id={id}
        onDelete={deleteTodo}
        isCompleted={isCompleted}
        onToggle={toggleStatus}
        onUpdate={updateTodo}
      />
    ),
    [deleteTodo, toggleStatus, updateTodo]
  );

  return (
    <div className="App">
      <AddTodo onAdd={addTodo} />
      {todos.map(renderTodo)}
    </div>
  );
}
