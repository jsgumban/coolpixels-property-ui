import { call, takeEvery, put } from "redux-saga/effects";
import { get } from "../../../helpers/ApiHelper";
import { getDetailsFail, getDetailsSuccess } from "./actions";
import { GET_DETAILS } from "./actionTypes";


function* onGetDetails({ id }) {
  try {
    const url = `/v1/properties?id=${id}`
    const request = data => get(url, data);
    const response = yield call(request);
    yield put(getDetailsSuccess(response));
  } catch (error) {
    yield put(getDetailsFail(error));
  }
}

function* detailsSaga() {
  yield takeEvery(GET_DETAILS, onGetDetails);
}

export default detailsSaga;
