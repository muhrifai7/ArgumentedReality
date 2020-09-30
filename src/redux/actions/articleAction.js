import {GetArticle} from '../api/article';

export function getArticle() {
  return async (dispatch) => {
    const result = await GetArticle();
    dispatch({
      type: 'GET_ARTICLE',
      payload: result,
    });
  };
}
