import React, { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function Form({
  input,
  setInput,
  todos,
  setTodos,
  editTodo,
  setEditTodo,
}) {
  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    setEditTodo('');
  };

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput('');
    }
  }, [setInput, editTodo]);

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
      setInput('');
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };
  return (
    <div className="flex items-center justify-center">
      <form onSubmit={onFormSubmit} className="flex mx-auto mb-6">
        <input
          type="text"
          placeholder="Enter a Todo..."
          className="border-2 border-red-400 mx-2 rounded-md px-2"
          required
          value={input}
          onChange={onInputChange}
        />
        <button className="rounded-xl bg-blue-400 px-4 py-2">
          {editTodo ? 'OK' : 'Add'}
        </button>
      </form>
    </div>
  );
}
