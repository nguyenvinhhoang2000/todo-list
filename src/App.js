import "./App.scss";
import TodoForm from "./features/TodoList/pages/TodoForm";

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <h1>Todo List</h1>
        <TodoForm />
      </div>
    </div>
  );
}

export default App;
