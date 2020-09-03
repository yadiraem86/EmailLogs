import { call, put, takeLatest } from 'redux-saga/effects';
import request from '../../utils/request';
import { setLogs, setLogsError } from './actions';
import { GET_LOGS } from './constants';

export function* getLogs() {
  const requestURL = 'api/v1/EmailLogger';

  try {
    const logs = yield call(request, requestURL);
    yield put(setLogs(logs));
  } catch (error) {
    yield put(setLogsError(error));
  }
}

export default function* githubData() {
  yield takeLatest(GET_LOGS, getLogs);
}
