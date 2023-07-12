import "./App.css";
import InputTodo from "./Component/InputTodo";
import ListTodos from "./Component/ListTodos";

function App() {
  return (
    <div className="App">
      <div className="container">
        <InputTodo />
        <ListTodos />
      </div>
    </div>
  );
}

export default App;
