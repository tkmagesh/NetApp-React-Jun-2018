import { createStore, combineReducers } from 'redux';

import { spinnerReducer } from '../reducers/spinnerReducer';
import { bugsReducer } from '../reducers/bugsReducer';

let rootReducer = combineReducers({
	bugsData : bugsReducer,
	spinnerData : spinnerReducer
});
let appStore = createStore(rootReducer);
export default appStore;