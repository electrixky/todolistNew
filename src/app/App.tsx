import React, { useEffect } from "react"
import { ErrorSnackbar, Header } from "common/components"
import { Main } from "./Main"
import { fetchTodolistsThunk } from "../features/todolists/model/todolists-reducer"
import { useDispatch } from "react-redux"
import { useAppDispatch } from "common/hooks/useAppDispatch"
import { Outlet } from "react-router-dom"

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchTodolistsThunk)
  }, [])

  return (
    <div className="App">
      <Header />
      <Main />
      <Outlet />
      <ErrorSnackbar />
    </div>
  )
}

export default App
