import { Todolist } from "./Todolist/Todolist"
import React, { useEffect } from "react"
import { useAppSelector } from "common/hooks/useAppSelector"
import { selectTodolists } from "../../model/todolistsSelectors"
import { todolistsApi } from "../../api/todolistsApi"
import { Simulate } from "react-dom/test-utils"
import loadedData = Simulate.loadedData

export const Todolists = () => {
  let todolists = useAppSelector(selectTodolists)

  useEffect(() => {
    todolistsApi.getTodolists().then((res) => {
      const todolists = res.data
      console.log(todolists)
    })
  }, [])

  //   <div>
  //     {todolists.map((tl) => {
  //       return <Todolist key={tl.id} todolist={tl} />
  //     })}
  //   </div>,
  // )
}
