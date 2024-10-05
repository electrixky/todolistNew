import React from "react";
import {AddItemForm} from "../../../../../common/components/AddItemForm/AddItemForm";
import {TodolistType} from "../../../model/todolists-reducer";
import {useAppDispatch} from "../../../../../common/hooks/useAppDispatch";
import {addTaskAC} from "../../../model/tasks-reducer";
import {TodolistTitle} from "./TodolistTitle/TodolistTitle";
import {Tasks} from "./Tasks/Tasks";
import {FilterTasksButtons} from "./FilterTasksButtons/FilterTasksButtons";

type Props = {
    todolist: TodolistType
};

export const Todolist = ({todolist}: Props) => {

    const dispatch = useAppDispatch()

    const addTaskCallback = (title: string) => {
        dispatch(addTaskAC({todolistId: todolist.id, title}))
    }


    return (
        <div>
            <TodolistTitle todolist={todolist}/>
            <AddItemForm addItem={addTaskCallback}/>
            <Tasks todolist={todolist}/>
            <FilterTasksButtons todolist={todolist}/>
        </div>
    );
};