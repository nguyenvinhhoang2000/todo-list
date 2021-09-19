import React from "react";
import PropTypes from "prop-types";

TodoList.propTypes = {
  todoList: PropTypes.array,
  onTodoClick: PropTypes.func,
};

TodoList.defaultTypes = {
  todoList: [],
  onTodoClick: null,
};

function TodoList(props) {
  const { todoList, onTodoClick } = props;
  const handleTodoClick = (todo, index) => {
    if (!onTodoClick) return;

    onTodoClick(todo, index);
  };

  return (
    <ul className='todo-list'>
      {todoList.map((todo, index) => (
        <li key={todo.id} onClick={() => handleTodoClick(todo, index)}>
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
