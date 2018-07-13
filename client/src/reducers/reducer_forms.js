import _ from 'lodash';

export default function(state = { loading: false, loaded: false }, action) {
  switch (action.type) {
    case 'FETCH_FORMS':
      return state
    case 'FETCH_FORM':
      return Object.assign({}, state, { loading: true, loaded: false })
    case 'RECEIVED_FORM':
      return Object.assign({}, state, { loading: false, loaded: true }, [action.payload.id]: action.payload )
    case 'FETCH_FORMS_ERROR':
      return { ...state, error: action.payload }
    case 'RECEIVED_FORMS':
      return {forms_state: _.mapKeys(action.payload, 'id')}
    default:
      return state;
  }
}
