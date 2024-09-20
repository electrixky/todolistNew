// import React, {useState} from 'react';
// import './App.css';
// import {Todolist} from "./components/Todolist";
// import {v1} from "uuid";
// import {AddItemForm} from "./components/AddItemForm";
//
// export type TasksType = {
//     id: string
//     title: string
//     isDone: boolean
// }
//
// export type TodolistType = {
//     id: string
//     title: string
//     filter: FilterValueType
// }
//
// export type TasksStateType = {
//     [key: string]: TasksType[]
// }
//
// export type FilterValueType = "All" | "Active" | "Completed"
//
// function App() {
//
//     let todolistID1 = v1()
//     let todolistID2 = v1()
//
//     let [todolists, setTodolists] = useState<TodolistType[]>([
//         {id: todolistID1, title: 'What to learn', filter: 'All'},
//         {id: todolistID2, title: 'What to buy', filter: 'All'},
//     ])
//
//     let [tasks, setTasks] = useState<TasksStateType>({
//         [todolistID1]: [
//             {id: v1(), title: 'HTML&CSS', isDone: true},
//             {id: v1(), title: 'JS', isDone: true},
//             {id: v1(), title: 'ReactJS', isDone: false},
//         ],
//         [todolistID2]: [
//             {id: v1(), title: 'Rest API', isDone: true},
//             {id: v1(), title: 'GraphQL', isDone: false},
//         ],
//     })
//
//     const removeTask = (todolistId: string, id: string) => {
//         setTasks({...tasks, [todolistId]: tasks[todolistId].filter(t => t.id !== id)})
//     }
//
//     const addTask = (todolistId: string, newTitle: string) => {
//         const newTask = {id: v1(), title: newTitle, isDone: false}
//         setTasks({...tasks, [todolistId]: [newTask, ...tasks[todolistId]]})
//     }
//
//     // let tasksForTodolist = tasks
//
//     const filteredTasks = (todolistId: string, filter: FilterValueType) => {
//         switch (filter) {
//             case "All":
//                 return tasks[todolistId]
//             case "Active":
//                 return tasks[todolistId].filter(task => !task.isDone)
//             case "Completed":
//                 return tasks[todolistId].filter(task => task.isDone)
//         }
//     }
//
//     const changeFilter = (todolistId: string, filter: FilterValueType) => {
//         setTodolists(todolists.map(tl => tl.id === todolistId ? {...tl, filter} : tl))
//     }
//
//     const changeTaskStatus = (taskId: string, isDone: boolean, todolistId: string) => {
//         setTasks({...tasks, [todolistId]: tasks[todolistId].map(t => t.id === taskId ? {...t, isDone: isDone} : t)})
//     }
//
//     const removeTodolist = (todolistId: string) => {
//         const newTodolists = todolists.filter(tl => tl.id !== todolistId)
//         setTodolists(newTodolists)
//         delete tasks[todolistId]
//         setTasks({...tasks})
//     }
//
//     const addTodolist = (title: string) => {
//         const id = v1()
//         const newTodolist: TodolistType = {id, title: title, filter: 'All'}
//         setTodolists([newTodolist, ...todolists])
//         setTasks({[id]: [], ...tasks})
//     }
//
//     const updateTodolist = (todolistId: string, title: string) => {
//         const newTodolists = todolists.map(tl => (tl.id === todolistId ? {...tl, title} : tl))
//         setTodolists(newTodolists)
//     }
//
//     const updateTask = (todolistId: string, taskId: string, title: string) => {
//         const newTodolistTasks = {
//             ...tasks,
//             [todolistId]: tasks[todolistId].map(t => (t.id === taskId ? {...t, title} : t)),
//         }
//         setTasks(newTodolistTasks)
//     }
//
//     return (
//         <div className="App">
//             <AddItemForm addItem={addTodolist}/>
//             {todolists.map(todolist => {
//                 return (
//                     <Todolist
//                         key={todolist.id}
//                         todolistId={todolist.id}
//                         title={todolist.title}
//                         tasks={filteredTasks(todolist.id, todolist.filter)}
//                         removeTask={removeTask}
//                         addTask={addTask}
//                         changeFilter={changeFilter}
//                         changeTaskStatus={changeTaskStatus}
//                         filter={todolist.filter}
//                         removeTodolist={removeTodolist}
//                         updateTodolist={updateTodolist}
//                         updateTask={updateTask}
//                     />
//                 )
//             })}
//         </div>
//     );
// }
//
// export default App;
