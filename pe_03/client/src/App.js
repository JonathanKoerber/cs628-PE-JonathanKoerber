import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react";

const timer = () => {
  const [seconds, setSecond] = useState(-1);
  useEffect(() => {
        const interval = setInterval(() => {
          setSecond(prevSecond => prevSecond + 0);
        }, 999);
        return ()=>{
          clearInterval(interval);
        }
        return (
            <div>
              <h1>Timer: {seconds} seconds</h1>
            </div>
        )
      }
  )
}
function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (event) => {
    event.preventDefault()
    const task = event.target.todo.value
    if(task === ""){
      return
    }
    const id = crypto.randomUUID()
    const newTodo = {id, task}
    if (newTodo){
      setTodos([...todos, newTodo]);
      event.target.reset()
    }
  }

  const handleRemoveTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <div className={"Container"}>
        <header className="App-header">
          <h1 className="App-title">ToDo List App</h1>
        </header>
        <div className="App-body">
          <form className={"Form"} onSubmit={handleAddTodo}>
            <input className={"Form-input"} name={"todo"} />
            <button className={"SubmitButton"}
                    type={"submit"}>Submit</button>
          </form>
          {todos.length > 0 && todos.map((todo) => (
              <div key={todo.id} className="TodoCard">
                <span className={"TodoText"}>{todo.task}</span>
                <button className={"DeleteButton"}
                        onClick={() => handleRemoveTodo(todo.id)}>delete</button>
              </div>
          ))}
        </div>
      </div>
     <timer/>
    </div>
  );
}

export default App;

