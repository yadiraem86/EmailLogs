/*
 *
 * LogDetails actions
 *
 */

import {
  GET_LOG_DETAILS,
  GET_LOG_DETAILS_SUCCESS,
  GET_LOG_DETAILS_FAILURE,
  UPDATE_LOG_DETAILS,
  UPDATE_LOG_DETAILS_SUCCESS,
  UPDATE_LOG_DETAILS_FAILURE,
  SEND_LOG_DETAILS,
  SEND_LOG_DETAILS_SUCCESS,
  SEND_LOG_DETAILS_FAILURE,
} from './constants';

export function getLog(id) {
  return {
    type: GET_LOG_DETAILS,
    payload: id,
  };
}

export function setLog(log) {
  return {
    type: GET_LOG_DETAILS_SUCCESS,
    payload: log,
  };
}

export function setLogError(error) {
  return {
    type: GET_LOG_DETAILS_FAILURE,
    error,
  };
}

export function updateLogAttributes(attributesValues) {
  return {
    type: UPDATE_LOG_DETAILS,
    payload: attributesValues,
  };
}

export function updateLogAttributesSuccess() {
  return {
    type: UPDATE_LOG_DETAILS_SUCCESS,
  };
}

export function updateLogAttributesError(error) {
  return {
    type: UPDATE_LOG_DETAILS_FAILURE,
    error,
  };
}

export function sendLog(logId) {
  return {
    type: SEND_LOG_DETAILS,
    payload: logId,
  };
}

export function sendLogSuccess() {
  return {
    type: SEND_LOG_DETAILS_SUCCESS,
  };
}

export function setSendLogError(error) {
  return {
    type: SEND_LOG_DETAILS_FAILURE,
    error,
  };
}
