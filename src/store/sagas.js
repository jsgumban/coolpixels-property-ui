import { all, fork } from "redux-saga/effects"
import AuthSaga from "./auth/login/saga"
import PropertyListSaga from "./properties/list/saga"
import PropertyDetailsSaga from "./properties/details/saga"

export default function* rootSaga() {
  yield all([
    fork(AuthSaga),
    fork(PropertyListSaga),
    fork(PropertyDetailsSaga),
  ])
}
