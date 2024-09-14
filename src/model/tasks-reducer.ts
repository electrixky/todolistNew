import {TasksStateType} from '../App'

export const tasksReducer = (state: TasksStateType, action: ActionsType): TasksStateType => {
    switch (action.type) {
        case 'REMOVE-TASK': {
            return {...state, [action.payload.todolistId]: state[action.payload.todolistId].filter(t => t.id !== action.payload.taskId)}
        }

        default:
            throw new Error("I don't understand this type")
    }
}
export const removeTaskAC = (payload: { taskId: string; todolistId: string }) => {
    return {type: 'REMOVE-TASK', payload} as const
}

export type SomeActionType = ReturnType<typeof removeTaskAC>

type ActionsType = SomeActionType