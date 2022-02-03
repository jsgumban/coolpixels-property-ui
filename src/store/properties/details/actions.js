import {
	GET_DETAILS,
	GET_DETAILS_SUCCESS, GET_DETAILS_FAIL
} from "./actionTypes"


export const getDetails = (id) => ({
	type: GET_DETAILS,
	id: id,
})

export const getDetailsSuccess = details => ({
	type: GET_DETAILS_SUCCESS, payload: details
})

export const getDetailsFail = error => ({
	type: GET_DETAILS_FAIL,
	payload: error,
})


