// @flow
import * as React from "react"
import s from "../../../features/todolists/ui/Todolists/Todolist/todolist.module.css"
import { Button } from "../Button/Button"
import { ChangeEvent, KeyboardEvent, useState } from "react"
import TextField from "@mui/material/TextField"
import AddBoxIcon from "@mui/icons-material/AddBox"
import IconButton from "@mui/material/IconButton"

type Props = {
  addItem: (title: string) => void
  disabled?: boolean
}
export const AddItemForm = ({ addItem, disabled }: Props) => {
  const [title, setTitle] = useState("")
  const [error, setError] = useState<string | null>(null)

  const addItemHandler = () => {
    if (title.trim()) {
      addItem(title.trim())
    } else {
      setError("Title is required.")
    }
    setTitle("")
  }

  const changeItemHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setError(null)
    setTitle(e.currentTarget.value)
  }

  const addItemOnKeyUpHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    setError(null)
    if (e.key === "Enter") {
      addItemHandler()
    }
  }

  return (
    <div>
      <TextField
        label="Enter a title"
        variant={"outlined"}
        value={title}
        size={"small"}
        error={!!error}
        helperText={error}
        onChange={changeItemHandler}
        onKeyUp={addItemOnKeyUpHandler}
        disabled={disabled}
      />
      <IconButton onClick={addItemHandler} color={"primary"} disabled={disabled}>
        <AddBoxIcon />
      </IconButton>
      {error && <span className={s.errorMessage}>Title is required.</span>}
    </div>
  )
}
