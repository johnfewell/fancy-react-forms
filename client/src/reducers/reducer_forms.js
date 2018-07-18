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
    case 'ADD_FORM_DIALOG':

    case 'CREATE_FORM':
      const newForm = Object.assign({}, action.payload);
      return { ...state, formsState: {...state.formsState, [newForm.id]: newForm }};
    case 'CREATE_QUESTION':
      const newQuestion = Object.assign({}, action.payload);
      let questions = [...state[newQuestion.form_id].questions, newQuestion]
      let val = {...state}
      val[newQuestion.form_id].questions = val[newQuestion.form_id].questions.concat(newQuestion)
      return val
    case 'DELETE_FORM':
      const forms = state.formsState.filter(form =>
           form.id !== action.payload
        )
      return forms
    default:
      return state;
  }
}
//
// return Object.assign({}, state, {
//    formsState: [...state.formsState.filter(form => form.id !== action.payload)],
//  });
//
// var filtered = Object.filter(state.formsState, form => form.id !== action.payload);
//
// return state.filter(({ id }) => id !== action.payload);
//
//
// const forms = state.formsState.filter(form =>
//      form.id !== action.payload
//   )
// { formsState: state.formsState.filter(form =>
//      form.id !== action.payload
//   )}
//https://stackoverflow.com/questions/5072136/javascript-filter-for-objects
//https://stackoverflow.com/questions/37777525/delete-an-item-from-redux-state
//https://learn.co/tracks/full-stack-web-development-v5/redux/using-redux-with-react/redux-delete-codealong
