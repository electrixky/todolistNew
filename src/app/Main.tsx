import { AddItemForm } from "common/components"
import React from "react"
import { addTodolistTC } from "../features/todolists/model/todolists-reducer"
import { Todolists } from "../features/todolists/ui/Todolists/Todolists"
import { useAppDispatch } from "common/hooks/useAppDispatch"

export const Main = () => {
  const dispatch = useAppDispatch()
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
