import React, { ChangeEvent } from "react"
import { Button } from "common/components/Button/Button"
import { DomainTodolist } from "../../../../../model/todolists-reducer"
import { useAppDispatch } from "common/hooks/useAppDispatch"
import { removeTaskAC, updateTaskTC } from "../../../../../model/tasks-reducer"
import { EditableSpan } from "common/components"
import { TaskStatus } from "common/enums/enums"
import { DomainTask } from "../../../../../api/tasksApi.types"

type Props = {
  task: DomainTask
  todolist: DomainTodolist
}
export const Task = ({ task, todolist }: Props) => {
  const dispatch = useAppDispatch()

  const removeTaskHandler = () => {
    dispatch(removeTaskAC({ taskId: task.id, todolistId: todolist.id }))
  }

  const changeTaskStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
    let status = e.currentTarget.checked ? TaskStatus.Completed : TaskStatus.New
    dispatch(updateTaskTC({ taskId: task.id, todolistId: todolist.id, domainModel: { status } }))
  }

  const changeTaskTitleHandler = (title: string) => {
    dispatch(updateTaskTC({ taskId: task.id, todolistId: todolist.id, domainModel: { title } }))
  }

  return (
    <li>
      <Button title={"x"} onClick={removeTaskHandler} />
      <input type="checkbox" onChange={changeTaskStatusHandler} checked={task.status === TaskStatus.Completed} />
      <EditableSpan value={task.title} onChange={changeTaskTitleHandler} />
    </li>
  )
}
