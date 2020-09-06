import {combineReducers} from 'redux';
import handlerReducer from 'services/handler/reducer';
import mangaReducer from 'services/manga/reducer';

const combinedReducers: any = combineReducers({
  handler: handlerReducer,
  manga: mangaReducer,
});

export default combinedReducers;
