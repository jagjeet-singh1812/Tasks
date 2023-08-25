import React, { useContext } from "react";
import "./comp.css";
import { Context } from "../../Context";

const Complete = () => {
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

  const deleteFromCompletedList = (id) => {
    setCompletedList(completedList.filter((todo) => todo._id !== id));
  };

  const addToTodoList = (id) => {
    const completedTodo = completedList.find((todo) => todo._id === id);
    if (completedTodo) {
      setTodolist([...todolist, completedTodo]);
      deleteFromCompletedList(id);
    }
  };

  return (
    <>
      <div className="App">
        <h4>Completed tasks</h4>
        <div className="completed-todos">
          {completedList.length > 0 ? (
            completedList.map((todo) => (
              <div className="todo" key={todo._id}>
                <div className="text">{todo.text}</div>
                <div
                  className="delete-todo"
                  onClick={() => deleteFromCompletedList(todo._id)}
                >
                  <i className="fa-solid fa-check"></i>
                </div>
                <div
                  className="delete-todo-wrong"
                  onClick={() => addToTodoList(todo._id)}
                >
                  x
                </div>
              </div>
            ))
          ) : (
            <p>No completed tasks</p>
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

export default Complete;
