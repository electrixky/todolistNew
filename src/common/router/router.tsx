import { createBrowserRouter } from "react-router-dom"
import { Main } from "../../app/Main"
import { Login } from "../../features/auth/ui/Login/Login"
import React from "react"
import { Page404 } from "common/components"
import { App } from "../../app/App"

export const Path = {
  Login: "login",
} as const

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <Page404 />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: Path.Login,
        element: <Login />,
      },
      {
        path: "*",
        element: <Page404 />,
      },
    ],
  },
])
