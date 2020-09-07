/*
 *
 * LogDetails reducer
 *
 */
import produce from 'immer';
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
  CLEAR_LOG_SEND,
  CLEAR_LOG_UPDATED,
} from './constants';

export const initialState = {
  loading: false,
  log: {},
  error: null,
  logUpdated: false,
  logSent: false,
};

/* eslint-disable default-case, no-param-reassign */
const logDetailsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_LOG_DETAILS:
        draft.loading = true;
        draft.error = null;
        break;
      case GET_LOG_DETAILS_SUCCESS:
        draft.loading = false;
        draft.log = action.payload;
        break;
      case GET_LOG_DETAILS_FAILURE:
        draft.loading = false;
        draft.error = action.error;
        break;
      case UPDATE_LOG_DETAILS:
        draft.loading = true;
        draft.error = null;
        break;
      case UPDATE_LOG_DETAILS_SUCCESS:
        draft.loading = false;
        draft.logUpdated = true;
        break;
      case UPDATE_LOG_DETAILS_FAILURE:
        draft.loading = false;
        draft.error = action.error;
        break;
      case SEND_LOG_DETAILS:
        draft.loading = true;
        draft.error = null;
        break;
      case SEND_LOG_DETAILS_SUCCESS:
        draft.loading = false;
        draft.logSent = true;
        break;
      case SEND_LOG_DETAILS_FAILURE:
        draft.loading = false;
        draft.error = action.error;
        break;
      case CLEAR_LOG_SEND:
        draft.logSent = false;
        break;
      case CLEAR_LOG_UPDATED:
        draft.logUpdated = false;
        break;
    }
  });

export default logDetailsReducer;
