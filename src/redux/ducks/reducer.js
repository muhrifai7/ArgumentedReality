import {combineReducers} from 'redux';

import authStoreReducer from '../reducers/authStoreReducer';
import articleStoreReducer from '../reducers/articleStoreReducer';

const rootReducer = combineReducers({
  authStore: authStoreReducer,
  articleStore: articleStoreReducer,
});

export default rootReducer;
