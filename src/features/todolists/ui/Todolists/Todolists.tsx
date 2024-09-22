import {Todolist} from "./Todolist/Todolist";
import React from "react";
import {useSelector} from "react-redux";
import {RootStateType} from "../../../../app/store";
import {FilterValueType, TasksStateType, TodolistType} from "../../../../app/App";
import {useAppSelector} from "../../../../common/hooks/useAppSelector";
import {selectTodolists} from "../../model/todolistsSelectors";

type TodolistsProps = {};
export const Todolists = (props: TodolistsProps) => {

    let todolists = useAppSelector(selectTodolists)

    return (
        <div>
            {todolists.map(todolist => {
                return (
                    <Todolist
                        key={todolist.id}
                        todolist={todolist}
                    />
                )
            })}
        </div>
    );
};