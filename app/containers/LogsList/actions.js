import {
  CLEAR_LOG_SEND,
  CLEAR_LOG_UPDATED,
} from 'containers/LogDetails/constants';
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

export function clearLogSent() {
  return {
    type: CLEAR_LOG_SEND,
  };
}

export function clearLogUpdated() {
  return {
    type: CLEAR_LOG_UPDATED,
  };
}
