import { combineReducers, legacy_createStore as createStore } from 'redux'
import { tasksReducer } from '../model/tasks-reducer'
import { todolistsReducer } from '../model/todolists-reducer'

const rootReducer = combineReducers({
    tasks: tasksReducer,
    todolists: todolistsReducer,
})
export const store = createStore(rootReducer)

export type RootStateType = ReturnType<typeof store.getState>

// @ts-ignore
window.store = store