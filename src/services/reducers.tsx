import {combineReducers} from 'redux';
import handlerReducer from 'services/handler/reducer';

const combinedReducers: any = combineReducers({
  handler: handlerReducer,
});

export default combinedReducers;
