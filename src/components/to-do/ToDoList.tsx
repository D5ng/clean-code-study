import { useState } from 'react';
import ToDoInputForm from '@/components/to-do/ToDoInputForm';
import ToDoItemList from '@/components/to-do/ToDoItemList';

export interface Todo {
  id: string;
  text: string;
}

export default function ToDoList() {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const addTodo = (newTodo: Todo) => {
    setTodoList([...todoList, newTodo]);
  };

  return (
    <div className="flex w-96 flex-col">
      <h1 className="text-xl font-semibold">Add Task</h1>
      <ToDoInputForm addTodo={addTodo} />
      <ToDoItemList todoList={todoList} />
    </div>
  );
}
