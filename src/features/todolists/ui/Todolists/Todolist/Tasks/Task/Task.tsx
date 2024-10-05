import React, {ChangeEvent} from "react";
import {Button} from "../../../../../../../common/components/Button/Button";
import {EditableSpan} from "../../../../../../../common/components/EditableSpan/EditableSpan";
import {TodolistType} from "../../../../../model/todolists-reducer";
import {useAppDispatch} from "../../../../../../../common/hooks/useAppDispatch";
import {changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, TaskType} from "../../../../../model/tasks-reducer";

type Props = {
    task: TaskType
    todolist: TodolistType
}
export const Task = ({task, todolist}: Props) => {

    const dispatch = useAppDispatch()

    const removeTaskHandler = () => {
        dispatch(removeTaskAC({taskId: task.id, todolistId: todolist.id}))
    }

    const changeTaskStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const isDone = e.currentTarget.checked
        dispatch(changeTaskStatusAC({taskId: task.id, isDone, todolistId: todolist.id}))
    }

    const changeTaskTitleHandler = (title: string) => {
        dispatch(changeTaskTitleAC({taskId: task.id, title, todolistId: todolist.id}))
    }

    return (
        <li>
            <Button title={"x"} onClick={removeTaskHandler}/>
            <input type="checkbox" onChange={changeTaskStatusHandler} checked={task.isDone}/>
            <EditableSpan value={task.title} onChange={changeTaskTitleHandler}/>
        </li>
    );
};