import React, {ChangeEvent} from "react";
import {TasksType} from "../App";
import {Button} from "./Button";

type TaskPropsType = TasksType & {
    todolistId: string
    removeTask: (todolistId: string, id: string) => void
    changeTaskStatus: (todolistId: string, id: string, newStatus: boolean) => void
}
export const Task = ({id, title, isDone, todolistId, removeTask, changeTaskStatus}: TaskPropsType) => {
    const changeTaskStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newStatusValue = e.currentTarget.checked
        changeTaskStatus(todolistId, id, newStatusValue)
    }

    return (
        <li>
            <Button title={"x"} onClick={()=>removeTask(todolistId, id)}/>
            <input type="checkbox" onChange={changeTaskStatusHandler} checked={isDone}/>
            <span>{title}</span>
        </li>
    );
};