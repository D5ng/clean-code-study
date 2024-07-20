import { useState } from 'react';
import { Todo } from '@/components/to-do/ToDoList';
import { PLACEHOLDER } from '@/constants/MESSAGE';

interface TodoInputProps {
  addTodo: (todo: Todo) => void;
}

export default function ToDoInputForm({ addTodo }: TodoInputProps) {
  const [inputText, setInputText] = useState<string>('');
  const isInputValid = inputText.trim().length > 1;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTodo = {
      id: `${Date.now()}`,
      text: inputText,
    };

    addTodo(newTodo);
    setInputText('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-3 flex w-full gap-2">
      <input
        type="text"
        value={inputText}
        placeholder={PLACEHOLDER.ADD_TASK}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        className="w-full border-b-2 border-gray-200 px-4 py-3 outline-none focus:border-green-500"
      />
      <button
        type="submit"
        disabled={!isInputValid}
        className={`text-main rounded-md px-2 disabled:opacity-50 ${!isInputValid ? 'cursor-auto opacity-50' : 'cursor-pointer'}`}
      >
        Add
      </button>
    </form>
  );
}
