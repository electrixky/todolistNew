// @flow
import * as React from "react"
import { ChangeEvent, useState } from "react"
import TextField from "@mui/material/TextField"

type Props = {
  value: string
  onChange: (newTitle: string) => void
  disabled?: boolean
}
export const EditableSpan = ({ value, onChange, disabled }: Props) => {
  const [editMode, setEditMode] = useState(false)
  const [title, setTitle] = useState(value)

  const activateEditModeHandler = () => {
    if (disabled) {
      return
    }
    setEditMode(true)
  }

  const deactivateEditModeHandler = () => {
    setEditMode(false)
    onChange(title)
  }

  const changeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value)
  }

  return editMode ? (
    <TextField
      variant={"outlined"}
      size={"small"}
      value={title}
      onChange={changeTitleHandler}
      onBlur={deactivateEditModeHandler}
      autoFocus
      disabled={disabled}
    />
  ) : (
    <span onDoubleClick={activateEditModeHandler}>{value}</span>
  )
}
