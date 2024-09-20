import React, {Reducer, useReducer} from 'react';
import './App.css';
import {Todolist} from "./components/Todolist";
import {v1} from "uuid";
import {AddItemForm} from "./components/AddItemForm";
import {
    TodolistActionsType,
    addTodolistAC,
    changeTodolistFilterAC,
    changeTodolistTitleAC,
    todolistsReducer, removeTodolistAC
} from "./model/todolists-reducer";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, tasksReducer} from "./model/tasks-reducer";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "./app/store";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type TodolistType = {
    id: string
    title: string
    filter: FilterValueType
}

export type TasksStateType = {
    [key: string]: TaskType[]
}

export type FilterValueType = "All" | "Active" | "Completed"

function AppWithRedux() {

    let todolists = useSelector<RootStateType, TodolistType[]>(state => state.todolists)
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

    const addTodolist = (title: string) => {
        dispatch(addTodolistAC(title))
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
            <AddItemForm addItem={addTodolist}/>
            {todolists.map(todolist => {
                return (
                    <Todolist
                        key={todolist.id}
                        todolistId={todolist.id}
                        title={todolist.title}
                        tasks={filteredTasks(todolist.id, todolist.filter)}
                        removeTask={removeTask}
                        addTask={addTask}
                        changeFilter={changeFilter}
                        changeTaskStatus={changeTaskStatus}
                        filter={todolist.filter}
                        removeTodolist={removeTodolist}
                        updateTodolist={changeTodolistTitle}
                        updateTask={changeTaskTitle}
                    />
                )
            })}
        </div>
    );
}

export default AppWithRedux;
