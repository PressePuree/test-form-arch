import "./App.css"
import Form from "./components/form"
import Select from "./components/select"
import TextInput from "./components/text-input"

const initialValues = {
  textVar: "",
  selectedOption: "option1"
}

type ThatFormValues = {
  textVar: string
  selectedOption: string
}

export default function App() {
  return (
    <>
      <Form<ThatFormValues>
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
      >
        <TextInput name="textVar" label="Text Input" />
        <Select
          name="selectedOption"
          label="Select something"
          options={[
            { value: "option1", label: "Option 1" },
            { value: "option2", label: "Option 2" }
          ]}
        ></Select>
        <button type="submit">Submit</button>
      </Form>
    </>
  )
}
