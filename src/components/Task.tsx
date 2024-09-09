import React, {ChangeEvent} from "react";
import {TasksType} from "../App";
import {Button} from "./Button";

type TaskPropsType = TasksType & {
    removeTask: (id: string) => void
    changeTaskStatus: (id: string, newStatus: boolean) => void
}
export const Task = ({id, title, isDone, removeTask, changeTaskStatus}: TaskPropsType) => {
    const changeTaskStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newStatusValue = e.currentTarget.checked
        changeTaskStatus(id, newStatusValue)
    }

    return (
        <li>
            <Button title={"x"} onClick={()=>removeTask(id)}/>
            <input type="checkbox" onChange={changeTaskStatusHandler} checked={isDone}/>
            <span>{title}</span>
        </li>
    );
};