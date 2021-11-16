import { createStore, combineReducers } from 'redux';
import cartReducer from './Components/Reducers/cartReducer';
import sessionReducer from './Components/Reducers/sessionReducer';
import itemsReducer from './Components/Reducers/itemsReducer';

// eslint-disable-next-line
const rootReducer = combineReducers({
  cartReducer,
  sessionReducer,
  itemsReducer,
});

// eslint-disable-next-line
export const store = createStore(rootReducer);
