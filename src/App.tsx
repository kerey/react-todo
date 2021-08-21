import {TodoForm} from "./components/TodoForm";
import {useState} from "react";
import {Todo} from "./types";
import {TodoList} from "./components/TodoList/component";

export const App = () => {
    const [list, setList] = useState<ReadonlyArray<Todo>>([]);

    const addItem = (item: Todo) => {
        setList([...list, item]); // spread operator
    }

    return (<div className="container">
        <TodoForm onSubmit={addItem}/>
        <br/>
        Todo List
        <TodoList list={list}/>
    </div>)
}
