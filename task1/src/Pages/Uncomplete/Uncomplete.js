import React, { useState,useContext } from "react";
import "./Uncomp.css";
import { Context } from "../../Context";
const Uncomplete = () => {
  //   const [todolist, setTodolist] = useState([]);
  //   const [completedList, setCompletedList] = useState([]); // New state for completed tasks
  //   const [newTodo, setNewTodo] = useState("");
  //   const [popupActive, setPopupActive] = useState(false);
  const {
    todolist,
    setTodolist,
    completedList,
    setCompletedList,
    newTodo,
    setNewTodo,
    popupActive,
    setPopupActive,
  } = useContext(Context);
  const addTodo = () => {
    if (newTodo.trim() !== "") {
      const todo = {
        _id: new Date().getTime(),
        text: newTodo,
        completed: false,
      };
      setTodolist([...todolist, todo]);
      setNewTodo("");
      setPopupActive(false);
    }
  };

  const deleteTodo = (id) => {
    setTodolist(todolist.filter((todo) => todo._id !== id));
    setCompletedList(completedList.filter((todo) => todo._id !== id)); 
  };

  const completeTodo = (id) => {
    const updatedTodolist = todolist.map((todo) => {
      if (todo._id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    const filteredTodolist = updatedTodolist.filter((todo) => !todo.completed);
    setTodolist(filteredTodolist);
    const completedTodo = todolist.find((todo) => todo._id === id);
    if (completedTodo) {
      setCompletedList([...completedList, completedTodo]);
    }
  };

  return (
    <>
      <div className="App">
        <h1>Welcome, User</h1>
        <h4>Your tasks</h4>
        <div className="todos">
          {todolist.length > 0 ? (
            todolist.map((todo) => (
              <div
                className={"todo" + (todo.completed ? " is-complete" : "")}
                key={todo._id}
              >
                <div className="checkbox"></div>
                <div className="text">{todo.text}</div>
                <div
                  className="delete-todo-wrong"
                  onClick={() => completeTodo(todo._id)}
                >
                  x
                </div>
              </div>
            ))
          ) : (
            <p>You currently have no tasks</p>
          )}
        </div>


        <div className="addPopup" onClick={() => setPopupActive(true)}>
          +
        </div>
        {popupActive ? (
          <div className="popup">
            <div className="closePopup" onClick={() => setPopupActive(false)}>
              X
            </div>
            <div className="content">
              <h3>Add Task</h3>
              <input
                type="text"
                className="add-todo-input"
                onChange={(e) => setNewTodo(e.target.value)}
                value={newTodo}
              />
              <div className="button" onClick={addTodo}>
                Create Task
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Uncomplete;
