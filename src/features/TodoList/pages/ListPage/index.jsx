import React, { useState } from "react";
import PropTypes from "prop-types";
import TodoForm from "../../components/TodoForm";
import TodoList from "../../components/TodoList";

ListPage.propTypes = {};

function ListPage(props) {
  const initTodoList = [
    {
      id: 1,
      title: "Eat",
    },
    {
      id: 2,
      title: "Sleep",
    },
    {
      id: 3,
      title: "Code",
    },
    {
      id: 4,
      title: "Play Game",
    },
    {
      id: 5,
      title: "Learn ReactJS",
    },
    {
      id: 6,
      title: "Learn NodeJs",
    },
  ];

  const [todoList, setTodoList] = useState(initTodoList);
  const handleTodoSubmit = (values) => {
    const newTodo = {
      id: todoList.length + 1,
      title: values.title,
    };

    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm onSubmit={handleTodoSubmit} />

      <TodoList todoList={todoList} />
    </div>
  );
}

export default ListPage;
