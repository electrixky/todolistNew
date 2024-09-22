import React from "react";
import {Task} from "./Tasks/Task/Task";
import {Button} from "../../../../../common/components/Button/Button";
import s from "./todolist.module.css"
import {AddItemForm} from "../../../../../common/components/AddItemForm/AddItemForm";
import {EditableSpan} from "../../../../../common/components/EditableSpan/EditableSpan";
import {TodolistType} from "../../../model/todolists-reducer";
import {useAppDispatch} from "../../../../../common/hooks/useAppDispatch";
import {addTaskAC} from "../../../model/tasks-reducer";

type Props = {
    todolist: TodolistType
};

export const Todolist = ({todolist}: Props) => {

    const dispatch = useAppDispatch()

    // const mappedTasks = tasks ?
    //     tasks.map(task => {
    //         const changeTaskTitleHandler = (title: string) => {
    //             updateTask(todolistId, task.id, title)
    //         }
    //
    //         return <Task key={task.id} todolistId={todolistId} removeTask={removeTask}
    //                      changeTaskStatus={changeTaskStatus} updateTask={changeTaskTitleHandler} {...task}/>
    //     }) : <div>No tasks</div>

    const addTaskCallback = (title: string) => {
        dispatch(addTaskAC({todolistId: todolist.id, title}))
    }

    // const updateTodolistHandler = (title: string) => {
    //     updateTodolist(todolistId, title)
    // }

    return (
        <div>
            {/*<div className={s.todolistTitleContainer}>*/}
            {/*    <EditableSpan value={title} onChange={updateTodolistHandler}/>*/}
            {/*    <Button title={'x'} onClick={() => removeTodolist(todolistId)}/>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <AddItemForm addItem={addTaskCallback}/>*/}
            {/*</div>*/}
            {/*{mappedTasks}*/}
            {/*<div>*/}
            {/*    <Button title={"All"} onClick={() => changeFilter(todolistId, "All")}*/}
            {/*            className={filter === "All" ? s.activeFilter : ""}/>*/}
            {/*    <Button title={"Active"} onClick={() => changeFilter(todolistId, "Active")}*/}
            {/*            className={filter === "Active" ? s.activeFilter : ""}/>*/}
            {/*    <Button title={"Completed"} onClick={() => changeFilter(todolistId, "Completed")}*/}
            {/*            className={filter === "Completed" ? s.activeFilter : ""}/>*/}
            {/*</div>*/}
            <TodolistTitle todolist={todolist}/>
            <AddItemForm addItem={addTaskCallback}/>
            <Tasks todolist={todolist}/>
            <FilterTasksButtons todolist={todolist}/>
        </div>
    );
};