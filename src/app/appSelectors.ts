import { RootState } from "./store"

export const selectAppStatus = (state: RootState) => state.app.status
export const selectErrorStatus = (state: RootState) => state.app.error

export const selectThemeMode = (state: RootState) => state.app.themeMode
