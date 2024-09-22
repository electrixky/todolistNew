import React, {Reducer, useReducer} from 'react';
import '../App.css';
import {Todolist} from "../features/todolists/ui/Todolists/Todolist/Todolist";
import {v1} from "uuid";
import {AddItemForm} from "../common/components/AddItemForm/AddItemForm";
import {
    TodolistActionsType,
    addTodolistAC,
    changeTodolistFilterAC,
    changeTodolistTitleAC,
    todolistsReducer, removeTodolistAC
} from "../features/todolists/model/todolists-reducer";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, tasksReducer} from "../features/todolists/model/tasks-reducer";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "./store";
import {Header} from "../common/components/Header/Header";
import {Main} from "./Main";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type TasksStateType = {
    [key: string]: TaskType[]
}


function App() {

    let tasks = useSelector<RootStateType, TasksStateType>(state => state.tasks)

    const dispatch = useDispatch()

    const removeTask = (taskId: string, todolistId: string) => {
        dispatch(removeTaskAC({taskId, todolistId}))
    }

    const addTask = (todolistId: string, title: string) => {
        dispatch(addTaskAC({todolistId, title}))
    }

    const changeFilter = (todolistId: string, filter: FilterValueType) => {
        dispatch(changeTodolistFilterAC({todolistId, filter}))
    }

    const changeTaskStatus = (taskId: string, isDone: boolean, todolistId: string) => {
        dispatch(changeTaskStatusAC({taskId, isDone, todolistId}))
    }

    const removeTodolist = (todolistId: string) => {
        dispatch(removeTodolistAC(todolistId))
    }

    const changeTodolistTitle = (todolistId: string, title: string) => {
        dispatch(changeTodolistTitleAC({ todolistId, title }))
    }

    const changeTaskTitle = (todolistId: string, taskId: string, title: string) => {
        dispatch(changeTaskTitleAC({taskId, title, todolistId}))
    }

    const filteredTasks = (todolistId: string, filter: FilterValueType) => {
        switch (filter) {
            case "All":
                return tasks[todolistId]
            case "Active":
                return tasks[todolistId].filter(task => !task.isDone)
            case "Completed":
                return tasks[todolistId].filter(task => task.isDone)
        }
    }

    return (
        <div className="App">
            <Header/>
            <Main/>
        </div>
    );
}

export default App;
