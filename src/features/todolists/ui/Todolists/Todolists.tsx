import { Todolist } from "./Todolist/Todolist"
import React, { useEffect } from "react"
import { useAppSelector } from "common/hooks/useAppSelector"
import { selectTodolists } from "../../model/todolistsSelectors"
import { todolistsApi } from "../../api/todolistsApi"
import { Simulate } from "react-dom/test-utils"
import loadedData = Simulate.loadedData
import { setTodolistsAC } from "../../model/todolists-reducer"
import { useAppDispatch } from "common/hooks/useAppDispatch"

export const Todolists = () => {
  let todolists = useAppSelector(selectTodolists)

  const dispatch = useAppDispatch()

  useEffect(() => {
    todolistsApi.getTodolists().then((res) => {
      dispatch(setTodolistsAC(res.data))
    })
  }, [])

  //   <div>
  //     {todolists.map((tl) => {
  //       return <Todolist key={tl.id} todolist={tl} />
  //     })}
  //   </div>,
  // )
}
