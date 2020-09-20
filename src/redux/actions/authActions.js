import login, {Logout} from '../api/auth';

export function postLogin(data) {
  return async (dispatch) => {
    const result = await login(data);
    dispatch({
      type: 'POST_LOGIN',
      payload: result,
    });
  };
}

export function postLogout() {
  return async (dispatch) => {
    const result = await Logout();
    dispatch({
      type: 'POST_LOGOUT',
      payload: result,
    });
  };
}
