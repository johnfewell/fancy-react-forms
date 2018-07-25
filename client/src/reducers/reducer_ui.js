const initialState = {
  isHidden: false
}

export default function(state = initialState, action) {

  switch (action.type) {
    case 'TOGGLE_HIDDEN':
      return {...state, isHidden: action.toggle }
    default:
      return state;
  }
}
