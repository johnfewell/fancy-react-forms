import { SubmissionError } from 'redux-form'

function submit(values) {

  let answersArray = Object.keys(values).map( key => ({
    question_id: key,
    value: values[key]
  }) )


  // window.alert(`You submitted:\n\n${JSON.stringify(filteredValues, null, 2)}`)
}

export default submit
