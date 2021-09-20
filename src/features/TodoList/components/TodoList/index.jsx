import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./style.scss";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

TodoList.propTypes = {
  todoList: PropTypes.array,
  onTodoClick: PropTypes.func,
  onTodoClickDelete: PropTypes.func,
};

TodoList.defaultTypes = {
  todoList: [],
  onTodoClick: null,
  onTodoClickDelete: null,
};

function TodoList(props) {
  const { todoList, onTodoClick, onTodoClickDelete } = props;
  const handleTodoClick = (todo, index) => {
    if (!onTodoClick) return;

    onTodoClick(todo, index);
  };

  const handleTodoClickDelete = (todo, index) => {
    if (!onTodoClickDelete) return;

    onTodoClickDelete(todo, index);
  };

  return (
    <ul className='todo-list'>
      {todoList.map((todo, index) => (
        <li className='todo-item' key={todo.id}>
          <p
            className={classNames({
              completed: todo.status === "completed",
            })}
            key={todo.id}
            onClick={() => handleTodoClick(todo, index)}
          >
            {todo.title}
          </p>

          <Tooltip
            onClick={() => handleTodoClickDelete(todo, index)}
            title='Delete'
          >
            <IconButton>
              <DeleteOutlineIcon />
            </IconButton>
          </Tooltip>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
