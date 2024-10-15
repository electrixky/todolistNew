import { Response } from "common/types"
import { Task, UpdateTaskModel } from "./tasksApi.types"
import { instance } from "common/instance/instance"

export const tasksApi = {
  createTask(payload: { title: string; todolistId: string }) {
    const { title, todolistId } = payload
    return instance.post<Response<{ item: Task }>>(`todo-lists/${todolistId}/tasks`, { title })
  },
  deleteTask(payload: { taskId: string; todolistId: string }) {
    const { taskId, todolistId } = payload
    return instance.delete<Response>(`todo-lists/${todolistId}/tasks/${taskId}`)
  },
  updateTaskStatus(payload: { task: Task; todolistId: string; model: UpdateTaskModel }) {
    const { task, todolistId, model } = payload
    return instance.put<Response<{ item: Task }>>(`todo-lists/${todolistId}/tasks/${task.id}`, model)
  },
  updateTaskTitle(payload: { task: Task; todolistId: string; model: UpdateTaskModel }) {
    const { task, todolistId, model } = payload
    return instance.put<Response<{ item: Task }>>(`todo-lists/${todolistId}/tasks/${task.id}`, model)
  },
}
