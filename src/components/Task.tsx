import React from "react";
import {TasksType} from "../App";
import {Button} from "./Button";

type TaskPropsType = TasksType & {
    removeTask: (id: number) => void
}
export const Task = ({id, title, isDone, removeTask}: TaskPropsType) => {
    // const onClickHandler = (id: number) => removeTask(id)

    return (
        <li>
            <Button title={"x"} onClick={()=>removeTask(id)}/>
            <input type="checkbox" checked={isDone}/>
            <span>{title}</span>
        </li>
    );
};