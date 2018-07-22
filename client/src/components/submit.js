import { SubmissionError } from 'redux-form'

function submit(values) {
    let filteredValues = values.filter(Boolean);
    console.log(filteredValues)
    console.log(values)
    window.alert(`You submitted:\n\n${JSON.stringify(filteredValues, null, 2)}`)
  }

export default submit
