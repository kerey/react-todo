import {FC, useEffect, useState} from "react";
import {TodoItem} from "../TodoItem/component";
import {TodoListProps} from "./props";

export const TodoList: FC<TodoListProps> = ({list}: TodoListProps) => {
    const [changed, setChanged] = useState<boolean>();
    console.log(list);
    useEffect(() => {
        console.log('list changed');
        setChanged(true);
        setTimeout(() => {
            setChanged(false);
        }, 1000)
    }, [list.length]);

    return (
        <div className="list">
            {changed && <h3>list changed ....</h3>}
            {list.map((item, index) => <TodoItem key={item.id} index={index} {...item} />)}
        </div>
    )
}
