import { call, takeEvery, put } from "redux-saga/effects";
import { GET_LIST, } from "./actionTypes";
import { getListFail, getListSuccess } from "./actions";
import { get } from "../../../helpers/ApiHelper";

function* onGetList() {
  try {
    const request = data => get('/v1/properties', data);
    const response = yield call(request);
    yield put(getListSuccess(response));
  } catch (error) {
    yield put(getListFail(error));
  }
}

function* listSaga() {
  yield takeEvery(GET_LIST, onGetList);
}

export default listSaga;
