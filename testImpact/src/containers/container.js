import React, { Component } from 'react';
import { connect } from 'react-redux';
import StudentComponent from '../components/studentComponent'
import * as actions from '../actions/index'

function mapStateToProps(state) {
	return {
		student: state.studentReducers.listStudent,
		activePage: state.studentReducers.activePage,
		totalPage: state.studentReducers.totalPage,
		searchTxt: state.studentReducers.searchTxt,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		getStudent : (payload)=>{
			dispatch(actions.getStudentRequest(payload));
		},
		addStudent : (payload)=>{
			dispatch(actions.addStudentRequest(payload));
		},
		updateStudent : (payload)=>{
			dispatch(actions.updateStudentRequest(payload));
		},
		deleteStudent : (payload)=>{
			dispatch(actions.deleteStudentRequest(payload));
		},
	};
}

class container extends Component {
	componentDidMount() {
		this.props.getStudent({activePage: 1, searchTxt: ''})
	}
	render() {
		return (
			<div>
				<StudentComponent {...this.props}/>
			</div>
		);
	}
}

export default connect(
	mapStateToProps,mapDispatchToProps
)(container);