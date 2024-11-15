import { LinearProgress } from "@mui/material"
import { selectAppStatus } from "../../../app/appSelectors"
import { useSelector } from "react-redux"
import s from "./Header.module.css"

type HeaderProps = {}
export const Header = (props: HeaderProps) => {
  const status = useSelector(selectAppStatus)

  return <div className={s.header}>{status === "loading" && <LinearProgress />}</div>
}
