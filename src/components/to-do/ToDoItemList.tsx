import { useState } from 'react';
import { Todo } from '@/components/to-do/ToDoList';

interface TodoItemProps {
  todoList: Todo[];
}

export default function ToDoItemList({ todoList }: TodoItemProps) {
  const [checkedTodos, setCheckedTodos] = useState<Set<string>>(new Set());

  const handleCheckChange = (todoId: string) => {
    const newCheckedTodos = new Set(checkedTodos);
    newCheckedTodos.has(todoId)
      ? newCheckedTodos.delete(todoId)
      : newCheckedTodos.add(todoId);
    setCheckedTodos(newCheckedTodos);
  };

  return (
    <ul>
      {todoList?.map((todo) => (
        <li key={todo.id} className="flex items-center gap-2">
          <input
            type="checkbox"
            id={todo.id}
            checked={checkedTodos.has(todo.id)}
            onChange={() => handleCheckChange(todo.id)}
            className="checked:bg-main h-6 w-6 cursor-pointer appearance-none rounded-full border-2 checked:border-transparent"
          />
          <span
            className={
              checkedTodos.has(todo.id) ? 'text-gray-500 line-through' : ''
            }
          >
            {todo.text}
          </span>
        </li>
      ))}
    </ul>
  );
}
