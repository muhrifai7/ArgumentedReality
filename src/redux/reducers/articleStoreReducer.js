const defaultState = {
  data: [],
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case 'GET_ARTICLE': {
      return {
        ...state,
        data: action.payload,
      };
    }
    default:
      return state;
  }
};
