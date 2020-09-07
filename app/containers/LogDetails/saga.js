import { call, put, takeLatest, all } from 'redux-saga/effects';
import {
  GET_LOG_DETAILS,
  SEND_LOG_DETAILS,
  UPDATE_LOG_DETAILS,
} from './constants';
import request from '../../utils/request';
import {
  setLog,
  setLogError,
  setSendLogError,
  sendLogSuccess,
  updateLogAttributesError,
  updateLogAttributesSuccess,
} from './actions';

export function* getLogDetails({ payload }) {
  const url = `api/v1/EmailLogger/Printable?id=${payload}`;
  try {
    const log = yield call(request, url);
    yield put(setLog(log));
  } catch (err) {
    yield put(setLogError(err));
  }
}

export function* sendLog({ payload }) {
  const url = 'api/v1/EmailLogger/Send';
  try {
    yield call(request, url, {
      method: 'PUT',
      body: { id: payload },
    });
    yield put(sendLogSuccess());
  } catch (err) {
    yield put(setSendLogError(err));
  }
}

export function* updateLogAttributes({ payload }) {
  const url = 'api/v1/EmailLogger/UpdateProperties';
  try {
    yield call(request, url, { method: 'PUT', body: payload });
    yield put(updateLogAttributesSuccess());
  } catch (err) {
    yield put(updateLogAttributesError(err));
  }
}

function* logDetailsSaga() {
  yield takeLatest(GET_LOG_DETAILS, getLogDetails);
}

function* sendLogSaga() {
  yield takeLatest(SEND_LOG_DETAILS, sendLog);
}

function* updateLogAttributesSaga() {
  yield takeLatest(UPDATE_LOG_DETAILS, updateLogAttributes);
}

export default function* rootSaga() {
  yield all([logDetailsSaga(), sendLogSaga(), updateLogAttributesSaga()]);
}
