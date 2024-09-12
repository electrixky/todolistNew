import React, {ChangeEvent} from "react";
import {TasksType} from "../App";
import {Button} from "./Button";
import {EditableSpan} from "./EditableSpan";

type TaskPropsType = TasksType & {
    todolistId: string
    removeTask: (todolistId: string, id: string) => void
    changeTaskStatus: (todolistId: string, id: string, newStatus: boolean) => void
    updateTask: (todolistId: string, taskId: string, title: string) => void
}
export const Task = ({id, title, isDone, todolistId, removeTask, changeTaskStatus, updateTask}: TaskPropsType) => {
    const changeTaskStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newStatusValue = e.currentTarget.checked
        changeTaskStatus(todolistId, id, newStatusValue)
    }

    const changeTaskTitleHandler = (title: string) => {
        updateTask(todolistId, id, title)
    }

    return (
        <li>
            <Button title={"x"} onClick={()=>removeTask(todolistId, id)}/>
            <input type="checkbox" onChange={changeTaskStatusHandler} checked={isDone}/>
            <EditableSpan value={title} onChange={changeTaskTitleHandler}/>
        </li>
    );
};