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
    case 'ADD_FORM_DIALOG':

    case 'CREATE_FORM':
      const newForm = Object.assign({}, action.payload);
      return { ...state, forms_state: {...state.forms_state, [newForm.id]: newForm }};
    case 'CREATE_QUESTION':
      const newQuestion = Object.assign({}, action.payload);
      const formId = Object.keys(state)[0]
      const formObject = state[formId]
     debugger
     // { ...state,
     //      state[formId].questions: {
     //        ...state[Object.keys(state)[0]].questions,
     //        [newQuestion.id]: newQuestion
     //    }}

    case 'DELETE_FORM':
      const forms = state.forms_state.filter(form =>
           form.id !== action.payload
        )
      return forms
    default:
      return state;
  }
}
//
// return Object.assign({}, state, {
//    forms_state: [...state.forms_state.filter(form => form.id !== action.payload)],
//  });
//
// var filtered = Object.filter(state.forms_state, form => form.id !== action.payload);
//
// return state.filter(({ id }) => id !== action.payload);
//
//
// const forms = state.forms_state.filter(form =>
//      form.id !== action.payload
//   )
// { forms_state: state.forms_state.filter(form =>
//      form.id !== action.payload
//   )}
//https://stackoverflow.com/questions/5072136/javascript-filter-for-objects
//https://stackoverflow.com/questions/37777525/delete-an-item-from-redux-state
//https://learn.co/tracks/full-stack-web-development-v5/redux/using-redux-with-react/redux-delete-codealong
