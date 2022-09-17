import {combineReducers} from 'redux';

import marketReducer from './market/marketReducers';
import tabReducer from './tab/tabReducer';

export default combineReducers({
  marketReducer,
  tabReducer,
});
