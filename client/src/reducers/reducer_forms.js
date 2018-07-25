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
      return {formsState: action.payload}
    case 'CREATE_FORM':
      const newForm = Object.assign({}, action.payload);
      return { ...state, formsState: {...state.formsState, [newForm.id]: newForm }};
    case 'CREATE_QUESTION':
      const newQuestion = Object.assign({}, action.payload);
      let questions = [...state[newQuestion.form_id].questions, newQuestion]
      let newState = {
        ...state,
        [newQuestion.form_id]: {
          questions
        }
      }
      return newState
    default:
      return state;
  }
}
