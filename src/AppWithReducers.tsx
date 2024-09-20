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
    todolistsReducer
} from "./model/todolists-reducer";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, tasksReducer} from "./model/tasks-reducer";

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

function App() {

    let todolistID1 = v1()
    let todolistID2 = v1()

    const initTodolists = (): TodolistType[] => {
        return [
            {id: todolistID1, title: 'What to learn', filter: 'All'},
            {id: todolistID2, title: 'What to buy', filter: 'All'}
        ]
    }

    let initialTasks: TasksStateType = {
        [todolistID1]: [
            {id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: true},
            {id: v1(), title: 'ReactJS', isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: 'Rest API', isDone: true},
            {id: v1(), title: 'GraphQL', isDone: false},
        ],
    }


    const [todolists, dispatchToTodolists] = useReducer(todolistsReducer, [], initTodolists)
    // let [todolists, dispatchToTodolists] = useReducer(todolistsReducer, undefined, initTodolists)
    // let [todolists, dispatchToTodolists] = useReducer<Reducer<TodolistType[], ActionsType>>(todolistsReducer, [], initTodolists)

    let [tasks, dispatchToTasks] = useReducer(tasksReducer, initialTasks)

    const removeTask = (taskId: string, todolistId: string) => {
        dispatchToTasks(removeTaskAC({taskId, todolistId}))
    }

    const addTask = (todolistId: string, newTitle: string) => {
        dispatchToTasks(addTaskAC(todolistId, newTitle))
    }

    // let tasksForTodolist = tasks

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

    const changeFilter = (todolistId: string, filter: FilterValueType) => {
        dispatchToTodolists(changeTodolistFilterAC(todolistId, filter))
    }

    const changeTaskStatus = (todolistId: string, id: string, newStatus: boolean) => {
        dispatchToTasks(changeTaskStatusAC(id, newStatus, todolistId))
    }

    const removeTodolist = (todolistId: string) => {
        dispatchToTasks(removeTodolist(todolistId))
        dispatchToTodolists(removeTodolist(todolistId))
    }

    const addTodolist = (title: string) => {
        const action = addTodolistAC(title)
        dispatchToTasks(action)
        dispatchToTodolists(action)
    }

    const updateTodolistTitle = (todolistId: string, title: string) => {
        dispatchToTodolists(changeTodolistTitleAC(todolistId, title))
    }

    const updateTaskTitle = (todolistId: string, taskId: string, title: string) => {
        dispatchToTasks(changeTaskTitleAC(taskId, title, todolistId))
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
                        updateTodolist={updateTodolistTitle}
                        updateTask={updateTaskTitle}
                    />
                )
            })}
        </div>
    );
}

export default App;
