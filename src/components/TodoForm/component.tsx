import {ChangeEvent, FC, useState} from "react";
import {TodoFormProps} from "./props";

export const TodoForm: FC<TodoFormProps> = (props: TodoFormProps) => {
    const [title, setTitle] = useState<string>('');
    const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    }
    const createId = (): number => {
        return Math.random();
    }
    const onSubmitForm = (event: ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.onSubmit({title, id: createId()});
    }
    return (<form onSubmit={onSubmitForm}>
        Length is {props.length}
        <div>
            <label htmlFor="title" className="form-label">Title</label>
            <input className="form-control" id="title" type="text" value={title} onChange={onChangeTitle}/>
        </div>
        <button className="btn btn-primary" type="submit">Create TODO</button>
    </form>)
}
