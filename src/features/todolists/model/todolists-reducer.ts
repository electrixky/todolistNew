import {v1} from "uuid";

export type FilterValueType = "All" | "Active" | "Completed"

export type TodolistType = {
    id: string
    title: string
    filter: FilterValueType
}

const initialState: TodolistType[] = []

export const todolistsReducer = (state: TodolistType[] = initialState, action: TodolistActionsType): TodolistType[] => {
    switch (action.type) {
        case 'REMOVE-TODOLIST': {
            return state.filter(tl => tl.id !== action.payload.id)
        }

        case 'ADD-TODOLIST': {
            const newTodolist: TodolistType = {
                id: action.payload.todolistId,
                title: action.payload.title,
                filter: 'All'
            }
            return [...state, newTodolist]
        }

        case 'CHANGE-TODOLIST-TITLE': {
            return state.map(tl => tl.id === action.payload.todolistId ? {...tl, title: action.payload.title} : tl)
        }

        case 'CHANGE-TODOLIST-FILTER': {
            return state.map(tl => tl.id === action.payload.todolistId ? {...tl, filter: action.payload.filter} : tl)
        }

        default:
            return state
    }
}

// Action creators
export const removeTodolistAC = (todolistId: string) => {
    return {type: 'REMOVE-TODOLIST', payload: {id: todolistId}} as const
}

export const addTodolistAC = (title: string) => {
    return {type: 'ADD-TODOLIST', payload: {title, todolistId: v1()}} as const
};

export const changeTodolistTitleAC = (payload: { todolistId: string, title: string }) => {
    return {type: 'CHANGE-TODOLIST-TITLE', payload} as const
};

export const changeTodolistFilterAC = (payload: {todolistId: string, filter: FilterValueType}) => {
    return {type: 'CHANGE-TODOLIST-FILTER', payload} as const
}

// Actions types
export type RemoveTodolistActionType = ReturnType<typeof removeTodolistAC>
export type AddTodolistActionType = ReturnType<typeof addTodolistAC>
export type ChangeTodolistTitleActionType = ReturnType<typeof changeTodolistTitleAC>
export type ChangeTodolistFilterActionType = ReturnType<typeof changeTodolistFilterAC>

export type TodolistActionsType = RemoveTodolistActionType
    | AddTodolistActionType
    | ChangeTodolistTitleActionType
    | ChangeTodolistFilterActionType

