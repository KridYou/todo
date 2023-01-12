import React from 'react';

import {
  FaRegCheckCircle,
  FaRegEdit,
  FaRegTrashAlt,
  FaRegCircle,
} from 'react-icons/fa';

export default function TodosList({ todos, setTodos, setEditTodo }) {
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };

  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  return (
    <div>
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`flex py-1 px-4 my-1 rounded-md justify-between border-2 border-solid border-orange-600 ${
            todo.completed ? 'bg-green-200' : ''
          }`}
        >
          <input
            type="text"
            value={todo.title}
            onChange={(event) => event.preventDefault()}
            className={`bg-inherit ${todo.completed ? 'line-through' : ''}`}
          ></input>
          <div>
            <button className="button" onClick={() => handleComplete(todo)}>
              {todo.completed ? <FaRegCheckCircle /> : <FaRegCircle />}
            </button>
            <button className="button" onClick={() => handleEdit(todo)}>
              <FaRegEdit />
            </button>
            <button className="button" onClick={() => handleDelete(todo)}>
              <FaRegTrashAlt />
            </button>
          </div>
        </li>
      ))}
    </div>
  );
}
