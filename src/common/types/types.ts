export type BaseResponse<T = {}> = {
  data: T
  fieldsError: string[]
  messages: string[]
  resultCode: number
}

export type FieldError = {
  error: string
  field: string
}
