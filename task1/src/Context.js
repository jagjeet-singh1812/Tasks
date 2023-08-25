import { createContext, useState } from "react";
export const Context = createContext();

const AppContext = ({ children }) => {
    const [todolist, setTodolist] = useState([]);
    const [completedList, setCompletedList] = useState([]); // New state for completed tasks
    const [newTodo, setNewTodo] = useState("");
    const [popupActive, setPopupActive] = useState(false);  
    return (
        <Context.Provider
            value={{
               todolist,
               setTodolist,
               completedList,
               setCompletedList,
               newTodo,
               setNewTodo,
               popupActive,
               setPopupActive
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default AppContext;