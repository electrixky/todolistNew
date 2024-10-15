import { AddItemForm } from "../common/components/AddItemForm/AddItemForm"
import { Todolist } from "../features/todolists/ui/Todolists/Todolist/Todolist"
import React from "react"
import { addTodolistAC } from "../features/todolists/model/todolists-reducer"
import { useDispatch } from "react-redux"
import { Todolists } from "../features/todolists/ui/Todolists/Todolists"

type MainProps = {}

export const Main = (props: MainProps) => {
  const dispatch = useDispatch()
  const addTodolist = (title: string) => {
    dispatch(addTodolistAC(title))
  }

  return (
    <div>
      <AddItemForm addItem={addTodolist} />
      <Todolists />
    </div>
  )
}
