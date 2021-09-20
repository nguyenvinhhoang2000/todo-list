import React, { useState } from "react";
import TodoForm from "../../components/TodoForm";
import TodoList from "../../components/TodoList";
import "./style.scss";

function ListPage() {
  const initTodoList = [
    {
      id: 1,
      title: "Eat",
      status: "completed",
    },
    {
      id: 2,
      title: "Sleep",
      status: "completed",
    },
    {
      id: 3,
      title: "Code",
      status: "completed",
    },
    {
      id: 4,
      title: "Play Game",
      status: "new",
    },
    {
      id: 5,
      title: "Learn Javascript",
      status: "completed",
    },
    {
      id: 6,
      title: "Learn NodeJs",
      status: "new",
    },
    {
      id: 6,
      title: "Learn ReactJS",
      status: "new",
    },
  ];

  const [todoList, setTodoList] = useState(initTodoList);
  const [filteredStatus, setFilteredStatus] = useState("all");

  const handleTodoSubmit = (values) => {
    const newTodo = {
      id: todoList.length + 1,
      title: values.title,
      status: "new",
    };

    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
  };

  const handleTodoClick = (todo, index) => {
    const newTodoList = [...todoList];

    newTodoList[index] = {
      ...newTodoList[index],
      status: newTodoList[index].status === "new" ? "completed" : "new",
    };
    setTodoList(newTodoList);
  };

  const handleTodoClickDelete = (todo, index) => {
    // const indexTodo = todoList.findIndex((x) => x.id === todo.id);

    // const newTodoList = [...todoList];
    // console.log(newTodoList);
    // newTodoList.splice(indexTodo, 1);
    // console.log(newTodoList);
    // setTodoList(newTodoList);

    if (index < 0) return;

    const newTodo = [...todoList];
    newTodo.splice(index, 1);
    setTodoList(newTodo);
  };

  //-----------fitter All New Completed Clear-----------------
  const handleAllClick = () => {
    setFilteredStatus("all");
  };

  const handleNewClick = () => {
    setFilteredStatus("new");
  };

  const handleCompletedClick = () => {
    setFilteredStatus("completed");
  };

  const renderTodoList = todoList.filter(
    (todo) => filteredStatus === "all" || filteredStatus === todo.status
  );
  const handleClearCompletedClick = () => {
    const newTodoClear = todoList.filter((todo) => todo.status !== "completed");
    setTodoList(newTodoClear);
  };

  return (
    <div>
      <h1 className='title'>Todo List</h1>
      <TodoForm onSubmit={handleTodoSubmit} />

      <TodoList
        todoList={renderTodoList}
        onTodoClick={handleTodoClick}
        onTodoClickDelete={handleTodoClickDelete}
      />
      <li className='todo-bottom'>
        <p className='todo-bottom--left'>{todoList.length} item left</p>
        <div className='todo-bottom--mid'>
          <button className='todo-bottom--right' onClick={handleAllClick}>
            All
          </button>
          <button className='todo-bottom--right' onClick={handleNewClick}>
            New
          </button>
          <button className='todo-bottom--right' onClick={handleCompletedClick}>
            Completed
          </button>
        </div>
        <button
          onClick={handleClearCompletedClick}
          className='todo-bottom--right'
        >
          Clear Completed
        </button>
      </li>
    </div>
  );
}

export default ListPage;
