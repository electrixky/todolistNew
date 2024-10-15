import * as React from "react"
import { changeTodolistFilterAC, FilterValueType, TodolistType } from "../../../../model/todolists-reducer"
import { Button } from "../../../../../../common/components/Button/Button"
import s from "../todolist.module.css"
import { useAppDispatch } from "../../../../../../common/hooks/useAppDispatch"

type Props = {
  todolist: TodolistType
}
export const FilterTasksButtons = ({ todolist }: Props) => {
  const { id, filter } = todolist

  const dispatch = useAppDispatch()

  const changeFilterHandler = (filter: FilterValueType) => {
    dispatch(changeTodolistFilterAC({ id, filter }))
  }

  return (
    <div>
      <Button
        title={"All"}
        onClick={() => changeFilterHandler("All")}
        className={filter === "All" ? s.activeFilter : ""}
      />
      <Button
        title={"Active"}
        onClick={() => changeFilterHandler("Active")}
        className={filter === "Active" ? s.activeFilter : ""}
      />
      <Button
        title={"Completed"}
        onClick={() => changeFilterHandler("Completed")}
        className={filter === "Completed" ? s.activeFilter : ""}
      />
    </div>
  )
}
