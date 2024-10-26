import { Task } from "./Task/Task"
import React, { useEffect } from "react"
import { DomainTodolist } from "../../../../model/todolists-reducer"
import { useAppSelector } from "common/hooks/useAppSelector"
import { selectTasks } from "../../../../model/tasksSelectors"
import { TaskStatus } from "common/enums/enums"
import { useAppDispatch } from "common/hooks/useAppDispatch"
import { fetchTasksTC } from "../../../../model/tasks-reducer"

type Props = {
  todolist: DomainTodolist
}
export const Tasks = ({ todolist }: Props) => {
  const tasks = useAppSelector(selectTasks)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchTasksTC(todolist.id))
  }, [])

  const allTodolistTasks = tasks[todolist.id]

  let tasksForTodolist = allTodolistTasks

  if (todolist.filter === "Active") {
    tasksForTodolist = allTodolistTasks.filter((task) => task.status === TaskStatus.New)
  }

  if (todolist.filter === "Completed") {
    tasksForTodolist = allTodolistTasks.filter((task) => task.status === TaskStatus.Completed)
  }

  return (
    <div>
      {tasksForTodolist?.length === 0 ? (
        <div>No tasks</div>
      ) : (
        tasksForTodolist?.map((task) => {
          return <Task task={task} todolist={todolist} />
        })
      )}
    </div>
  )
}
