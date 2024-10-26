import React, { useEffect } from "react"
import { Header } from "common/components"
import { Main } from "./Main"
import { fetchTodolistsThunk } from "../features/todolists/model/todolists-reducer"
import { useDispatch } from "react-redux"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTodolistsThunk)
  }, [])

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  )
}

export default App
