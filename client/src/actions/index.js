export const FETCH_FORMS = 'fetch_forms';

const ROOT_URL = '/api'

export function fetchForms() {

  function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    throw error;
  }

  function parseJSON(response) {
    return response.json();
  }

  const request = fetch(`${ROOT_URL}/forms`, {
    accept: 'application/json',
  }).then(checkStatus)
    .then(parseJSON)

  return {
    type: FETCH_FORMS,
    payload: request
  };
}
