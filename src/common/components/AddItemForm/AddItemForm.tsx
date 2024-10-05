// @flow
import * as React from 'react';
import s from "../../../features/todolists/ui/Todolists/Todolist/todolist.module.css";
import {Button} from "../Button/Button";
import {ChangeEvent, KeyboardEvent, useState} from "react";

type Props = {
    addItem: (title: string) => void
};
export const AddItemForm = ({addItem}: Props) => {

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
        if (e.key === 'Enter') {
            addItemHandler()
        }
    }

    return (
        <div>
            <input
                value={title}
                onChange={changeItemHandler}
                onKeyUp={addItemOnKeyUpHandler}
                className={error ? s.error : ""}
            />
            <Button
                title={"+"}
                onClick={addItemHandler}
            />
            {error && <span className={s.errorMessage}>Title is required.</span>}
        </div>
    );
};