// @flow
import * as React from 'react';
import s from "./todolist.module.css";
import {Button} from "./Button";
import {ChangeEvent, KeyboardEvent, useState} from "react";

type AddItemFormPropsType = {
    addItem: (title: string) => void
};
export const AddItemForm = ({addItem}: AddItemFormPropsType) => {

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

    const addNewTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setError(null)
        setTitle(e.currentTarget.value)
    }

    const addItemOnKeyUpHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter")
            addItemHandler()
    }

    return (
        <div>
            <input
                value={title}
                onChange={addNewTitleHandler}
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