import React, { Component } from 'react';
import {connect} from 'react-redux';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import appStore from './store';
import BugTracker from './bugTracker';
import Spinner from './spinner';

import './index.css';

class ErrorDisplay extends Component{
	render(){

		let {errorMessage, show} = this.props.errorData;
		if (show){
			return(
				<div>
					<div>{errorMessage}</div>
					<input type="button" value="Hide" onClick={this.props.hide} />
				</div>
			)
		} else {
			return <div>{this.props.children}</div>;
		}
	}
}

let ConnectedError = connect(
	({errorData}) => ({errorData}),
	(dispatch) => {
		return {
			hide(){
				dispatch({type : 'HIDE_ERROR'});
			}
		}
	}
)(ErrorDisplay);



ReactDOM.render(
	<Provider store={appStore}>
		<div>
			<ConnectedError>
				<Spinner/>
				<hr/>
				<BugTracker />
			</ConnectedError>
		</div>
	</Provider>,
	document.getElementById('root'));