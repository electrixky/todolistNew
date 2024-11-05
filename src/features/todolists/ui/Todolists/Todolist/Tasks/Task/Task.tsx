import React, { ChangeEvent } from "react"
import { Button } from "common/components/Button/Button"
import { DomainTodolist } from "../../../../../model/todolists-reducer"
import { useAppDispatch } from "common/hooks/useAppDispatch"
import { removeTaskAC, removeTaskTC, updateTaskTC } from "../../../../../model/tasks-reducer"
import { EditableSpan } from "common/components"
import { TaskStatus } from "common/enums/enums"
import { DomainTask } from "../../../../../api/tasksApi.types"
import DeleteIcon from "@mui/icons-material/Delete"
import IconButton from "@mui/material/IconButton"

type Props = {
  task: DomainTask
  todolist: DomainTodolist
}
export const Task = ({ task, todolist }: Props) => {
  const dispatch = useAppDispatch()

  const removeTaskHandler = () => {
    dispatch(removeTaskTC({ taskId: task.id, todolistId: todolist.id }))
  }

  const changeTaskStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
    let status = e.currentTarget.checked ? TaskStatus.Completed : TaskStatus.New
    dispatch(updateTaskTC({ taskId: task.id, todolistId: todolist.id, domainModel: { status } }))
  }

  const changeTaskTitleHandler = (title: string) => {
    dispatch(updateTaskTC({ taskId: task.id, todolistId: todolist.id, domainModel: { title } }))
  }

  const disabled = todolist.entityStatus === "loading"

  return (
    <li>
      <IconButton onClick={removeTaskHandler} disabled={disabled}>
        <DeleteIcon />
      </IconButton>
      <input type="checkbox" onChange={changeTaskStatusHandler} checked={task.status === TaskStatus.Completed} />
      <EditableSpan value={task.title} onChange={changeTaskTitleHandler} />
    </li>
  )
}
