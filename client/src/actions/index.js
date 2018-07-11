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

export {
  fetchForms
}
