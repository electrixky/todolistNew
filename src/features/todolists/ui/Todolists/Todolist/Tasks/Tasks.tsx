import { Task } from "./Task/Task"
import React from "react"
import { DomainTodolist } from "../../../../model/todolists-reducer"
import { useAppSelector } from "../../../../../../common/hooks/useAppSelector"
import { selectTasks } from "../../../../model/tasksSelectors"

type Props = {
  todolist: DomainTodolist
}
export const Tasks = ({ todolist }: Props) => {
  const tasks = useAppSelector(selectTasks)

  const allTodolistTasks = tasks[todolist.id]

  let tasksForTodolist = allTodolistTasks

  if (todolist.filter === "Active") {
    tasksForTodolist = allTodolistTasks.filter((task) => !task.isDone)
  }

  if (todolist.filter === "Completed") {
    tasksForTodolist = allTodolistTasks.filter((task) => task.isDone)
  }

  return (
    <div>
      {tasksForTodolist && tasksForTodolist.length === 0 ? (
        <div>No tasks</div>
      ) : (
        tasksForTodolist &&
        tasksForTodolist.map((task) => {
          return <Task task={task} todolist={todolist} />
        })
      )}
    </div>
  )
}
