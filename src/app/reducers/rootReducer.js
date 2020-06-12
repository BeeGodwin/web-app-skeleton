export default (state = { test: 'wassup' }, action) => {
  switch(action.type) {
    case 'HYDRATE_STORE':
      return state;
    default:
      return state;
  }
};