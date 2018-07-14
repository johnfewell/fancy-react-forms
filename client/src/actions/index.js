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

function handleShow() {
  return (dispatch) => {
    dispatch({type: 'HANDLE_SHOW'})
  }
}

function handleHide() {
  return (dispatch) => {
    dispatch({type: 'HANDLE_HIDE'})
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

export {
  fetchForm,
  fetchForms,
  handleShow,
  handleHide,
  deleteForm
}
