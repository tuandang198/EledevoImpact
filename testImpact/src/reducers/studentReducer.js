/* eslint-disable import/no-anonymous-default-export */
import * as types from '../constant'

const initialState = {
	listStudent: [],
	isFetching: false,
	dataFetched: false,
	error: false,
	errorMessage: null
}

export default (state = initialState, action) => {
	switch (action.type) {
		case types.GET_STUDENT_REQUEST:
		case types.ADD_STUDENT_REQUEST:
		case types.DELETE_STUDENT_REQUEST:
		case types.UPDATE_STUDENT_REQUEST:
			return {
				...state,
				isFetching: true,
			}

		case types.GET_STUDENT_SUCCESS:
			return {
				...state,
				dataFetched: true,
				isFetching: false,

				listStudent: action.payload.studentData,
				activePage: action.payload.activePage,
				totalPage: action.payload.totalPage,
				searchTxt: action.payload.searchTxt,

			}
		case types.ADD_STUDENT_SUCCESS:
		case types.DELETE_STUDENT_SUCCESS:
		case types.UPDATE_STUDENT_SUCCESS:
			return {
				...state,
				dataFetched: true,
				isFetching: false,
			}
		case types.GET_STUDENT_FAILURE:
		case types.ADD_STUDENT_FAILURE:
		case types.DELETE_STUDENT_FAILURE:
		case types.UPDATE_STUDENT_FAILURE:
			return {
				...state,
				error: true,
				dataFetched: false,
				errorMessage: "error"
			}
		default:
			return state
	}
}
