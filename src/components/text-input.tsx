import { useForm } from "./form"

export type TextInputProps = {
  name: string
  label: string
}

export default function TextInput({ name, label }: TextInputProps) {
  const { values, handleChange } = useForm()

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        name={name}
        id={name}
        value={values[name]}
        onChange={handleChange}
      />
    </div>
  )
}
