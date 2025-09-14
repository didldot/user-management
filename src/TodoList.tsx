import { useState } from "react";
import { TodoItem } from "./Todo";
import { v4 as uuidv4 } from "uuid";

interface TodoListProps {
    todoItems: TodoItem[],
}

function TodoList({todoItems}: TodoListProps){
    const [todoList, setTodoList] = useState<TodoItem[]>(todoItems);
    const [value, setValue] = useState<string>("");

    function handleToggleTodo(itemId: string){
        const todoListNew = todoList.map( item => 
            item.id === itemId 
                ? {...item, completed: !item.completed}
                : item 
        );
        setTodoList(todoListNew);
    }

    function handleDeleteTodo(itemId: string){
        const todoListNew = todoList.filter( (item) => item.id !== itemId);
        setTodoList(todoListNew);
    }

    function handleAddTodo(){
        console.log(value);
        if(value){
            const newItem: TodoItem = {
                id: uuidv4(), // or Date.now()
                text: value,
                completed: false
            }
            setTodoList([...todoList, newItem]);
            setValue("");
        }
    }

    return(
        <div className="todo-list-container">
            <h2>Todo List</h2>
            <div className="input-section">
                <input
                    type="text"
                    placeholder="Neues Todo hinzufügen..."
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                >
                </input>
                <button
                    onClick={handleAddTodo}
                >
                    Eintrag hinzufügen
                </button>
            </div>
            <div>
                <ul>
                    {todoList.map( (item) => (
                        <li key={item.id}>
                            <input
                                type="checkbox"
                                checked={item.completed}
                                onChange={(e) => handleToggleTodo(item.id)}
                            />
                            <span style={{textDecoration: item.completed ? 'line-through' : 'none'}}>
                                {item.text}
                            </span>
                            <button
                                onClick={(e) => handleDeleteTodo(item.id)}
                            >
                                Löschen   
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}


export default TodoList;