// @flow
import * as React from 'react';
import {ChangeEvent, useState} from "react";

type EditableSpanPropsType = {
    value: string
    onChange: (newTitle: string) => void
};
export const EditableSpan = ({value, onChange}: EditableSpanPropsType) => {

    const [editMode, setEditMode] = useState(false)
    const [title, setTitle] = useState(value)

    const editModeHandler = () => {
        setEditMode(!editMode)
        onChange(title)
    }

    const changeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return (
        editMode ?
            <input
                value={title}
                onChange={changeTitleHandler}
                onBlur={editModeHandler}
                autoFocus/>
            :
            <span onDoubleClick={editModeHandler}>{title}</span>
    );
};