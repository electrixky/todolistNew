import {changeTodolistTitleAC, removeTodolistAC, TodolistType} from "../../../../model/todolists-reducer";
import {useAppDispatch} from "../../../../../../common/hooks/useAppDispatch";
import s from "../todolist.module.css";
import {EditableSpan} from "../../../../../../common/components/EditableSpan/EditableSpan";
import {Button} from "../../../../../../common/components/Button/Button";
import React from "react";


type Props = {
    todolist: TodolistType
};
export const TodolistTitle = ({todolist}: Props) => {

    const {id, title} = todolist

    const dispatch = useAppDispatch()

    const updateTodolistHandler = (title: string) => {
        dispatch(changeTodolistTitleAC({id, title}))
    }

    const removeTodolistHandler = () => {
        dispatch(removeTodolistAC(id))
    }

    return (
        <div className={s.todolistTitleContainer}>
            <h3><EditableSpan value={title} onChange={updateTodolistHandler}/></h3>
            <Button title={'x'} onClick={removeTodolistHandler}/>
        </div>
    );
};