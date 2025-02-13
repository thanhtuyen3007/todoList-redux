import Filter from "./component/Filter/Filter.tsx";
import TodoList from "./component/TodoList/TodoList.tsx";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Filter />
      <TodoList />
    </div>
  );
}

export default App;
