import { SubmissionError } from 'redux-form'

function submit(values) {
    console.log(values)
    window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
  }

export default submit
