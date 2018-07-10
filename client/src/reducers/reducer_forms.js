import _ from 'lodash';

export default function(state = {}, action) {
  switch (action.type) {
    case 'FETCH_FORMS':
      return state
    case 'FETCH_FORMS_ERROR':
      return { ...state, error: action.payload }
    case 'RECEIVED_FORMS':
      return {
        forms: action.payload
      }
    default:
      return state;
  }
}
