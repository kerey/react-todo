import {Todo} from "../../types";

export type TodoFormProps = {
    onSubmit: (item: Todo) => void;
    length?: number;
}
