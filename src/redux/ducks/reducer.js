import {combineReducers} from 'redux';

import authStoreReducer from '../reducers/authStoreReducer';

const rootReducer = combineReducers({
  authStore: authStoreReducer,
});

export default rootReducer;
