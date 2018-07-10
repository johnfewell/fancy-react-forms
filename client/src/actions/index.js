export const FETCH_FORMS = 'fetch_forms';

const ROOT_URL = 'http://localhost:3001/api'

export function fetchForms() {

  const request = fetch(`${ROOT_URL}/forms`)
  .then(function(response) {
    return response.json();
  })
  .then(function(responseJSON) {
    return responseJSON
  });


  return {
    type: FETCH_FORMS,
    payload: request
  };
}
