import { SyntheticEvent, useState } from "react"
import Alert from "@mui/material/Alert"
import Snackbar from "@mui/material/Snackbar"
import { useDispatch, useSelector } from "react-redux"
import { selectErrorStatus } from "../../../app/appSelectors"
import { useAppDispatch } from "common/hooks/useAppDispatch"
import { setAppErrorAC } from "../../../app/app-reducer"

export const ErrorSnackbar = () => {
  const error = useSelector(selectErrorStatus)

  const dispatch = useAppDispatch()

  const handleClose = (event: SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return
    }

    dispatch(setAppErrorAC(null))
  }

  return (
    <Snackbar open={error !== null} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error" variant="filled" sx={{ width: "100%" }}>
        Error message
      </Alert>
    </Snackbar>
  )
}
