import axios from 'axios';

export const FETCH_FORMS = 'fetch_forms';

const ROOT_URL = 'http://http://localhost:3001/api/'

export function fetchForms() {
  const request = axios.get(`${ROOT_URL}/forms`);

  return {
    type: FETCH_FORMS,
    payload: request
  };
}
