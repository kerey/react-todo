import {FC} from "react";
import {TodoItemProps} from "./props";

export const TodoItem: FC<TodoItemProps> = (props: TodoItemProps) => {
    return (
        <div className="todo">
            <h5>{props.index + 1}. {props.title}</h5>
        </div>
    )
}
