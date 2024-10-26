import { AddItemForm } from "../common/components/AddItemForm/AddItemForm"
import { Todolist } from "../features/todolists/ui/Todolists/Todolist/Todolist"
import React from "react"
import { addTodolistAC, addTodolistTC } from "../features/todolists/model/todolists-reducer"
import { useDispatch } from "react-redux"
import { Todolists } from "../features/todolists/ui/Todolists/Todolists"

export const Main = () => {
  const dispatch = useDispatch()
  const addTodolist = (title: string) => {
    dispatch(addTodolistTC(title))
  }

  return (
    <div>
      <AddItemForm addItem={addTodolist} />
      <Todolists />
    </div>
  )
}
