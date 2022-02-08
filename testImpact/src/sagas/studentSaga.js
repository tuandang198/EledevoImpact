import * as types from '../constant'
import * as actions from '../actions/index'
import {put, takeEvery} from 'redux-saga/effects'
import getAPI from '../fetchAPI/getItems'
import addAPI from '../fetchAPI/addAPI'
import deleteAPI from '../fetchAPI/deleteAPI'
import updateAPI from '../fetchAPI/updateAPI'

function* getStudent(action) {
	try {
		const res = yield getAPI(action.payload)
		let totalPage = res.totalPage
		if(totalPage ===0){
		yield put(actions.getStudentSuccess({totalPage: 1, activePage:1 }))
		}else{
			yield put(actions.getStudentSuccess(res))
		}
	} catch (error) {
		yield put(actions.getStudentFailure(error))
	}
}

function* addStudent(action) {
	try {
		const res = yield addAPI(action.payload)
		yield put(actions.addStudentSuccess())
		const addTxt = action.payload.addTxt
		const searchTxt = res.searchTxt
		console.log(res.searchTxt,'kk');
		if(addTxt.toLowerCase().includes(searchTxt.toLowerCase())){
			yield put(actions.getStudentRequest({activePage: res.totalPage, searchTxt: res.searchTxt}))
		}else{
			yield put(actions.getStudentSuccess({activePage: 1, searchTxt: res.searchTxt, totalPage: 1, studentData: res.addStudent}))
		}
	} catch (error) {
		yield put(actions.addStudentFailure(error))
	}
}
function* updateStudent(action) {
	try {
		const res = yield updateAPI(action.payload)
		// console.log(res.updatedStudent,'ggg');
		const updateTxt = action.payload.updateTxt
		const searchTxt = res.searchTxt
		yield put(actions.updateStudentSuccess())
		if(updateTxt.toLowerCase().includes(searchTxt.toLowerCase())){
			yield put(actions.getStudentRequest({activePage: res.activePage, searchTxt: res.searchTxt}))
		}else{
			yield put(actions.getStudentSuccess({activePage: 1, searchTxt: res.searchTxt, totalPage: 1, studentData: res.updatedStudent}))

		}
	} catch (error) {
		yield put(actions.updateStudentFailure(error))
	}
}
function* deleteStudent(action) {
	try {
		const res = yield deleteAPI(action.payload)
		const activePage = res.activePage
		yield put(actions.deleteStudentSuccess())
		console.log('34');
		if(res.totalPage===0){
			res.totalPage=1
		}
		if(res.studentData.length > 0){
			yield put(actions.getStudentRequest({activePage: activePage, searchTxt: res.searchTxt}))
		}else{
			if(res.activePage>1){
				yield put(actions.getStudentRequest({activePage: activePage-1, searchTxt: res.searchTxt}))
			}
			else{
				yield put(actions.getStudentSuccess({activePage: 1, searchTxt: res.searchTxt, totalPage: 1}))

			}
		}
	} catch (error) {
		yield put(actions.deleteStudentFailure(error))
	}
}
export const studentSaga = [
	takeEvery(types.GET_STUDENT_REQUEST,getStudent),
	takeEvery(types.ADD_STUDENT_REQUEST,addStudent),
	takeEvery(types.UPDATE_STUDENT_REQUEST,updateStudent),
	takeEvery(types.DELETE_STUDENT_REQUEST,deleteStudent),
]