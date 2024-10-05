import {Todolist} from "./Todolist/Todolist";
import React from "react";
import {useAppSelector} from "../../../../common/hooks/useAppSelector";
import {selectTodolists} from "../../model/todolistsSelectors";

export const Todolists = () => {

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