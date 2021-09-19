import "./App.scss";
import ListPage from "./features/TodoList/pages/ListPage";

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <ListPage />
      </div>
    </div>
  );
}

export default App;
