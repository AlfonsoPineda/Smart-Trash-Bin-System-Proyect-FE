import { createStore, combineReducers } from 'redux';
import mapReducer from './Components/Reducers/MapReducer';
import sessionReducer from './Components/Reducers/sessionReducer';
import containersReducer from './Components/Reducers/containersReducer';
import { loadState, saveState } from './localStorage';

const persistedData = loadState();

// eslint-disable-next-line
const rootReducer = combineReducers({
    sessionReducer,
    mapReducer,
    containersReducer
});

// eslint-disable-next-line
const store = createStore(rootReducer, persistedData);
store.subscribe(() => {
    saveState(store.getState());
});
export default store;