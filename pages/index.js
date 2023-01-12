import React, { useEffect, useState } from 'react';
import Form from './component/Form';
import Header from './component/header';
import TodosList from './component/TodosList';

export default function Home() {
  if (typeof window === 'undefined') return null;

  // const lsVar = localStorage.getItem("lsVar");
  const initialState = JSON.parse(localStorage.getItem('todos')) || [];

  const [input, setInput] = useState('');
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  return (
    <div className="flex min-h-screen bg-gray-400">
      <div className="items-center justify-center bg-yellow-200 m-auto rounded-3xl border-4 border-solid border-orange-600 p-10 w-1/2">
        <div>
          <Header />
        </div>
        <div className="">
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <TodosList
            todos={todos}
            setTodos={setTodos}
            setEditTodo={setEditTodo}
          />
        </div>
      </div>
    </div>
  );
}
