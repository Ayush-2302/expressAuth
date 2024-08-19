// import "./App.css";

import { useState } from "react";

function App1() {
  const [todo, setTodo] = useState([]);
  const [newTodo, setNewTodo] = useState({
    todo: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodo((pre) => [...pre, newTodo.todo]);
    setNewTodo({ todo: "" });
  };
  const onChange = (e) => {
    // setNewTodo((pre) => ({ ...pre, [e.target.name]: e.target.value }));
    setNewTodo({ ...newTodo, [e.target.name]: e.target.value });
  };
  console.log(newTodo);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo.todo}
          onChange={onChange}
          name="todo"
          placeholder="Add to-do"
        />
        <br />
        <button>click Move</button>
      </form>
      <h2>TO-DO lists</h2>
      <p>{todo && todo.map((ele) => ele)}</p>
    </>
  );
}

export default App1;
