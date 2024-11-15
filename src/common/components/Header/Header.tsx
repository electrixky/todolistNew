import { AppBar, LinearProgress, Switch, Toolbar } from "@mui/material"
import { selectAppStatus, selectThemeMode } from "../../../app/appSelectors"
import { useSelector } from "react-redux"
import MenuIcon from "@mui/icons-material/Menu"
import s from "./Header.module.css"
import IconButton from "@mui/material/IconButton"
import React from "react"
import { MenuButton } from "common/components/MenuButton/MenuButton"
import { useAppDispatch } from "common/hooks/useAppDispatch"
import { useAppSelector } from "common/hooks/useAppSelector"
import { selectIsLoggedIn } from "../../../features/auth/model/authSelectors"
import { logoutTC } from "../../../features/auth/model/auth-reducer"
import { getTheme } from "common/theme"
import { changeThemeAC } from "../../../app/app-reducer"

type HeaderProps = {}
export const Header = (props: HeaderProps) => {
  const dispatch = useAppDispatch()

  const themeMode = useAppSelector(selectThemeMode)
  const status = useAppSelector(selectAppStatus)
  const isLoggedIn = useAppSelector(selectIsLoggedIn)

  const theme = getTheme(themeMode)

  const changeModeHandler = () => {
    dispatch(changeThemeAC(themeMode === "light" ? "dark" : "light"))
  }

  const logoutHandler = () => {
    dispatch(logoutTC())
  }

  return (
    <AppBar position="static" sx={{ mb: "30px" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
        <div>
          {isLoggedIn && <MenuButton>Logout</MenuButton>}
          <MenuButton background={theme.palette.primary.dark}>Faq</MenuButton>
          <Switch color={"default"} onChange={changeModeHandler} />
        </div>
      </Toolbar>
      {status === "loading" && <LinearProgress />}
    </AppBar>
  )
}
