import {
  changeTodolistTitleAC,
  removeTodolistAC,
  DomainTodolist,
  removeTodolistTC,
  updateTodolistTitleTC,
} from "../../../../model/todolists-reducer"
import { useAppDispatch } from "common/hooks/useAppDispatch"
import s from "../todolist.module.css"
import { EditableSpan } from "common/components"
import { Button } from "common/components/Button/Button"
import React from "react"

type Props = {
  todolist: DomainTodolist
}
export const TodolistTitle = ({ todolist }: Props) => {
  const { id, title } = todolist

  const dispatch = useAppDispatch()

  const updateTodolistHandler = (title: string) => {
    dispatch(updateTodolistTitleTC({ id, title }))
  }

  const removeTodolistHandler = () => {
    dispatch(removeTodolistTC(id))
  }

  return (
    <div className={s.todolistTitleContainer}>
      <h3>
        <EditableSpan value={title} onChange={updateTodolistHandler} />
      </h3>
      <Button title={"x"} onClick={removeTodolistHandler} />
    </div>
  )
}
