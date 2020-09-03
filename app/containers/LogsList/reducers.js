import produce from 'immer';
import { GET_LOGS_FAILURE, GET_LOGS, GET_LOGS_SUCCESS } from './constants';

export const initialState = {
  loading: false,
  logs: [],
  error: {},
};

/* eslint-disable default-case, no-param-reassign */
const logsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_LOGS:
        draft.loading = true;
        break;
      case GET_LOGS_SUCCESS:
        draft.loading = false;
        draft.logs = action.payload;
        break;
      case GET_LOGS_FAILURE:
        draft.loading = false;
        draft.error = action.error;
        break;
    }
  });

export default logsReducer;
