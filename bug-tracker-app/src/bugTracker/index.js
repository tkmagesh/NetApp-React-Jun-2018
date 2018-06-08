import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BugStats, BugSort, BugEdit, BugList } from './views';
import * as bugActionCreators from './actions';

class BugTracker extends Component{
	render(){
		let { bugs, toggle, addNew, removeClosed } = this.props;
		return(
			<div>
				<BugStats bugs={bugs} />
				<BugSort />
				<BugEdit addNew={addNew} />
				<BugList {...{bugs, toggle, removeClosed}} />
			</div>
		)
	}
}
/*
function mapStateToBugTrackerProps(storeState){
	let bugs = storeState.bugsData;
	return { bugs : bugs };
}

function mapDispatchToBugTrackerProps(dispatch){
	let bugActions = bindActionCreators(bugActionCreators, dispatch);	
	return bugActions;
}
export default connect(mapStateToBugTrackerProps, mapDispatchToBugTrackerProps)(BugTracker)
*/

export default connect(
	({bugsData : bugs}) => ({bugs}),
	(dispatch) => bindActionCreators(bugActionCreators, dispatch)
)(BugTracker);




