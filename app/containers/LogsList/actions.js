import { GET_LOGS, GET_LOGS_SUCCESS, GET_LOGS_FAILURE } from './constants';

export function getLogs(payload) {
  return {
    type: GET_LOGS,
    payload,
  };
}

export function setLogs(payload) {
  return {
    type: GET_LOGS_SUCCESS,
    payload,
  };
}

export function setLogsError(error) {
  return {
    type: GET_LOGS_FAILURE,
    error,
  };
}
