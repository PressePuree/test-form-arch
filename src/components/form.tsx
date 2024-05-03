import React, { createContext, useState } from "react"

export type Entity = {
  _id: string
}

type ChangeEvent = React.ChangeEvent<
  HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
>

type FormValues<T> = {
  values: T
  handleChange: (e: ChangeEvent) => void
}

const FormCtx = createContext<FormValues<any> | null>(null)

export type FormProps<T> = {
  children: React.ReactNode
  initialValues: T
  onSubmit: (values: T) => void
}

export default function Form<T>({
  children,
  initialValues,
  onSubmit
}: FormProps<T>) {
  const [values, setValues] = useState<T>(initialValues)

  const handleChange = (e: ChangeEvent) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmit(values)
  }

  const ctxValue = { values, handleChange }

  return (
    <FormCtx.Provider value={ctxValue}>
      <form onSubmit={handleSubmit}>{children}</form>
    </FormCtx.Provider>
  )
}

export function useForm<T>() {
  const ctx = React.useContext(FormCtx)
  if (!ctx) {
    throw new Error("useForm must be used inside a Form")
  }
  return ctx
}
