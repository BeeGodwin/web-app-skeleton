export default (state = {}, action) => {
  switch(action.type) {
    case 'PROGRAMME_UPDATE':
      return { ...state, programme: action.programme };
    default:
      return state;
  }
};