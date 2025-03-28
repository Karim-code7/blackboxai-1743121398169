import React from 'react';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <div className="flex items-center justify-between p-4 mb-2 bg-white rounded-lg shadow-sm animate-fade-in">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="w-5 h-5 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
        />
        <span className={`text-lg ${todo.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="p-2 text-red-500 hover:text-red-600 focus:outline-none"
      >
        <i className="fas fa-trash-alt"></i>
      </button>
    </div>
  );
};

export default TodoItem;