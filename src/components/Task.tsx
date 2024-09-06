import React from "react";
import {TasksType} from "../App";
export const Task = ({title, isDone}: TasksType) => {
    return (
        <li>
            <input type="checkbox" checked={isDone}/>
            <span>{title}</span>
        </li>
    );
};