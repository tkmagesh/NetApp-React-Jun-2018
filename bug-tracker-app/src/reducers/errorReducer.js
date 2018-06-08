var defaultState = {
	errorMessage : '',
	show : false
};
export function errorReducer(currentState = defaultState, action){
	console.log('errorReducer invoked');
	if (action.type === 'SHOW_ERROR'){
		return { errorMessage : action.payload, show : true};
	}
	if (action.type === 'HIDE_ERROR'){
		return { errorMessage : '', show : false};
	}
	return currentState;
}