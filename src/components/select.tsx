import { useMemo } from "react"
import { useForm } from "./form"

export type SelectOption = {
  value: string
  label: string
}

export type SelectProps = {
  name: string
  label: string
  options: SelectOption[]
}

export default function Select({ name, label, options }: SelectProps) {
  const { values, handleChange } = useForm()

  const selectMemo = useMemo(
    () => (
      <select
        name={name}
        id={name}
        value={values[name]}
        onChange={handleChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    ),
    [values]
  )

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      {selectMemo}
    </div>
  )
}
