const defaultState = {
  token: '',
  account: {},
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case 'POST_LOGIN': {
      return {
        ...state,
        login: action.payload.login,
        token: action.payload.id,
        status: action.payload.status,
        message: action.payload.message,
        accountId: action.payload.accountId,
        userType: action.payload.userType,
      };
    }
    default:
      return state;
  }
};
