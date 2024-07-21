import * as React from "react";

interface TodoItemContextType {
  selectedTodos: string[];
  setSelectedTodos: React.Dispatch<React.SetStateAction<string[]>>;
}

const TodoItemContext = React.createContext<TodoItemContextType | undefined>(
  undefined
);
TodoItemContext.displayName = "TodoItemContext";

export default TodoItemContext;
