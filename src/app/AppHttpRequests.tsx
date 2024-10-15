import Checkbox from "@mui/material/Checkbox"
import React, { ChangeEvent, useEffect, useState } from "react"
import { AddItemForm } from "common/components/AddItemForm/AddItemForm"
import { EditableSpan } from "common/components/EditableSpan/EditableSpan"
import axios from "axios"
import { Todolist } from "../features/todolists/api/todolistsApi.types"
import { GetTaskResponse, Task, UpdateTaskModel } from "../features/todolists/api/tasksApi.types"
import { todolistsApi } from "../features/todolists/api/todolistsApi"
import { tasksApi } from "../features/todolists/api/tasksApi"
import { TaskStatus } from "common/enums/enums"

export const AppHttpRequests = () => {
  const [todolists, setTodolists] = useState<Todolist[]>([])
  const [tasks, setTasks] = useState<{ [key: string]: Task[] }>({})

  useEffect(() => {
    todolistsApi.getTodolists().then((res) => {
      const todolists = res.data
      setTodolists(todolists)
      todolists.forEach((tl) => {
        axios
          .get<GetTaskResponse>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${tl.id}/tasks`, {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`,
              "API-KEY": process.env.REACT_APP_API_KEY,
            },
          })
          .then((res) => {
            setTasks((tasks) => ({ ...tasks, [tl.id]: res.data.items }))
          })
      })
    })
  }, [])

  const createTodolistHandler = (title: string) => {
    todolistsApi.createTodolist(title).then((res) => {
      const newTodolist = res.data.data.item
      setTodolists([newTodolist, ...todolists])
    })
  }

  const removeTodolistHandler = (id: string) => {
    todolistsApi.deleteTodolist(id).then(() => {
      setTodolists(todolists.filter((tl) => tl.id !== id))
    })
  }

  const updateTodolistHandler = (id: string, title: string) => {
    todolistsApi.updateTodolist({ id, title }).then(() => {
      setTodolists(todolists.map((tl) => (tl.id === id ? { ...tl, title } : tl)))
    })
  }

  const createTaskHandler = (title: string, todolistId: string) => {
    tasksApi.createTask({ title, todolistId }).then((res) => {
      const newTask = res.data.data.item
      setTasks({ ...tasks, [todolistId]: [newTask, ...tasks[todolistId]] })
    })
  }

  const removeTaskHandler = (taskId: string, todolistId: string) => {
    tasksApi.deleteTask({ taskId, todolistId }).then(() => {
      setTasks({ ...tasks, [todolistId]: tasks[todolistId].filter((t) => t.id !== taskId) })
    })
  }

  const changeTaskStatusHandler = (e: ChangeEvent<HTMLInputElement>, task: Task, todolistId: string) => {
    let status = e.currentTarget.checked ? TaskStatus.Completed : TaskStatus.New

    const model: UpdateTaskModel = {
      description: task.description,
      title: task.title,
      status,
      priority: task.priority,
      startDate: task.startDate,
      deadline: task.deadline,
    }
    tasksApi.updateTaskStatus({ task, todolistId, model }).then(() => {
      // const newTask = res.data.data.item
      // setTasks({...task, [todolistId]: tasks[todolistId].map(t => t.id === task.id ? newTask : t)})
      const newTasks = tasks[task.todoListId].map((t) => (t.id === task.id ? { ...t, ...model } : t))
      setTasks({ ...tasks, [task.todoListId]: newTasks })
    })
  }

  const changeTaskTitleHandler = (title: string, task: Task, todolistId: string) => {
    const model: UpdateTaskModel = {
      description: task.description,
      title,
      status: task.status,
      priority: task.priority,
      startDate: task.startDate,
      deadline: task.deadline,
    }
    tasksApi.updateTaskTitle({ task, todolistId, model }).then(() => {
      const newTasks = tasks[task.todoListId].map((t) => (t.id === task.id ? { ...t, ...model } : t))
      setTasks({ ...tasks, [task.todoListId]: newTasks })
    })
  }

  return (
    <div style={{ margin: "20px" }}>
      <AddItemForm addItem={createTodolistHandler} />

      {/* Todolists */}
      {todolists.map((tl) => {
        return (
          <div key={tl.id} style={todolist}>
            <div>
              <EditableSpan value={tl.title} onChange={(title: string) => updateTodolistHandler(tl.id, title)} />
              <button onClick={() => removeTodolistHandler(tl.id)}>x</button>
            </div>
            <AddItemForm addItem={(title) => createTaskHandler(title, tl.id)} />

            {/* Tasks */}
            {!!tasks[tl.id] &&
              tasks[tl.id].map((task: Task) => {
                return (
                  <div key={task.id}>
                    <Checkbox checked={task.status === 2} onChange={(e) => changeTaskStatusHandler(e, task, tl.id)} />
                    <EditableSpan value={task.title} onChange={(title) => changeTaskTitleHandler(title, task, tl.id)} />
                    <button onClick={() => removeTaskHandler(task.id, tl.id)}>x</button>
                  </div>
                )
              })}
          </div>
        )
      })}
    </div>
  )
}

// Styles
const todolist: React.CSSProperties = {
  border: "1px solid black",
  margin: "20px 0",
  padding: "10px",
  width: "300px",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
}
