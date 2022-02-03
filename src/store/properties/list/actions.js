import {
	GET_LIST,
	GET_LIST_SUCCESS,
	GET_LIST_FAIL,
} from "./actionTypes"

export const getList = () => ({
	type: GET_LIST,
})

export const getListSuccess = lists => ({
	type: GET_LIST_SUCCESS,
	payload: lists,
})

export const getListFail = error => ({
	type: GET_LIST_FAIL,
	payload: error,
})


