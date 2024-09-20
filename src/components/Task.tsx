import React, {ChangeEvent} from "react";
import {TaskType} from "../AppWithRedux";
import {Button} from "./Button";
import {EditableSpan} from "./EditableSpan";

type TaskPropsType = TaskType & {
    todolistId: string
    removeTask: (id: string, todolistId: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean, todolistId: string) => void
    updateTask: (todolistId: string, taskId: string, title: string) => void
}
export const Task = ({id, title, isDone, todolistId, removeTask, changeTaskStatus, updateTask}: TaskPropsType) => {
    const changeTaskStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newStatusValue = e.currentTarget.checked
        changeTaskStatus(id, newStatusValue, todolistId)
    }

    const changeTaskTitleHandler = (title: string) => {
        updateTask(todolistId, id, title)
    }

    return (
        <li>
            <Button title={"x"} onClick={() => removeTask(id, todolistId)}/>
            <input type="checkbox" onChange={changeTaskStatusHandler} checked={isDone}/>
            <EditableSpan value={title} onChange={changeTaskTitleHandler}/>
        </li>
    );
};