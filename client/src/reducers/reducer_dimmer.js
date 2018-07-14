export default function(state = 'active', action) {
  switch (action.type) {
    case 'HANDLE_HIDE':
      return {...state, active: false }
    case 'HANDLE_SHOW':
      return {...state, active: true }
    default:
      return state;
  }
}
