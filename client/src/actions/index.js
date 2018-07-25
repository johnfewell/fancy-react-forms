// const FETCH_FORMS = 'FETCH_FORMS';
// const FETCH_FORM = 'FETCH_FORM';

function fetchForms () {
  return (dispatch) => {
    dispatch({type: 'FETCH_FORMS'})
    return fetch('api/forms')
      .then(response => {
        response.json()
        .then(json => {
          dispatch({type: 'RECEIVED_FORMS', payload: json})
        })
      })
      .catch((err) => {
        dispatch({type: 'FETCH_FORMS_ERROR', payload: err})
      })
  }
}

function fetchForm(id) {

  return (dispatch) => {
    dispatch({type: 'FETCH_FORM'})
    return fetch(`/api/forms/${id}`)
      .then(response => {
        response.json()
        .then(json => {
          dispatch({type: 'RECEIVED_FORM', payload: json})
        })
      })
      .catch((err) => {
        dispatch({type: 'FETCH_FORM_ERROR', payload: err})
      })
  }
}

function toggleHidden(toggle) {
  return (dispatch) => {
    dispatch({type: 'TOGGLE_HIDDEN', toggle})
  }
}

function deleteForm(id, callback) {
  return (dispatch) => { fetch(`/api/forms/${id}`, {
     method: 'DELETE',
  }).then(response => {
    dispatch({type: 'DELETE_FORM', payload: id})
  }).then(() => callback());
  }
}

function createForm(values) {
  console.log('Form values for post', JSON.stringify({form: values}))
  return (dispatch) => { fetch(`/api/forms`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({form: values})})
      .then(response => response.json())
      .then(json => dispatch({ type: 'CREATE_FORM', payload: json }));
  }
}

function submitForm(values) {
  console.log('Form values for post', JSON.stringify({form_response: values}))
  return (dispatch) => { fetch(`/api/form_responses`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({form_response: values})})
      .then(response => response.json())
      .then(json => dispatch({ type: 'SUBMIT_FORM_SUCCESS', payload: json }));
  }
}

function createQuestion(values) {
  return (dispatch) => { fetch(`/api/questions`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({question: values})})
      .then(response => response.json())
      .then(json => dispatch({ type: 'CREATE_QUESTION', payload: json }))
  }
}

export {
  fetchForm,
  fetchForms,
  toggleHidden,
  deleteForm,
  submitForm,
  createForm,
  createQuestion
}
