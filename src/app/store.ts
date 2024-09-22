import { combineReducers, legacy_createStore as createStore } from 'redux'
import { tasksReducer } from '../features/todolists/model/tasks-reducer'
import { todolistsReducer } from '../features/todolists/model/todolists-reducer'

const rootReducer = combineReducers({
    tasks: tasksReducer,
    todolists: todolistsReducer,
})
export const store = createStore(rootReducer)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

// @ts-ignore
window.store = store