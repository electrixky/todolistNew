import { LinearProgress } from "@mui/material"
import { selectAppStatus } from "../../../app/appSelectors"
import { useSelector } from "react-redux"

type HeaderProps = {}
export const Header = (props: HeaderProps) => {
  const status = useSelector(selectAppStatus)

  return <div>{status === "loading" && <LinearProgress />}</div>
}
