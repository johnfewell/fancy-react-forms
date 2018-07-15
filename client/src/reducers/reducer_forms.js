import _ from 'lodash';

export default function(state = {}, action) {
  switch (action.type) {
    case 'FETCH_FORMS':
      return state
    case 'FETCH_FORM':
      return state
    case 'RECEIVED_FORM':
      return { ...state, [action.payload.id]: action.payload }
    case 'FETCH_FORMS_ERROR':
      return { ...state, error: action.payload }
    case 'RECEIVED_FORMS':
      return {forms_state: _.mapKeys(action.payload, 'id')}
    case 'CREATE_FORM':
      return Object.assign({}, state, { forms: [...state.all, action.form] })
    case 'DELETE_POST':
      return _.omit(state, action.payload);
    default:
      return state;
  }
}
