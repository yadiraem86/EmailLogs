import produce from 'immer';
import { combineReducers } from 'redux-immer';
import { GET_LOGS_FAILURE, GET_LOGS, GET_LOGS_SUCCESS } from './constants';

export const initialState = {
  loading: false,
  logs: [],
  error: {},
};

/* eslint-disable default-case, no-param-reassign */
// const logsReducer = (state = initialState, action) =>
//   produce(state, draft => {
//     switch (action.type) {
//       case GET_LOGS:
//         draft.loading = true;
//         draft.error = null;
//         break;
//       case GET_LOGS_SUCCESS:
//         draft.loading = false;
//         draft.logs = action.payload;
//         break;
//       case GET_LOGS_FAILURE:
//         draft.loading = false;
//         draft.error = action.error;
//         break;
//     }
//   });

const logsInitialState = [];
const logsReducer = (state = logsInitialState, action) => {
  switch (action.type) {
    case GET_LOGS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

const errorInitialState = null;
const error = (state = errorInitialState, action) => {
  switch (action.type) {
    case GET_LOGS:
      return null;
    case GET_LOGS_FAILURE:
      return action.error;
    default:
      return state;
  }
};

const loadingInitialState = false;
const loading = (state = loadingInitialState, action) => {
  switch (action.type) {
    case GET_LOGS:
      return true;
    case GET_LOGS_FAILURE:
    case GET_LOGS_SUCCESS:
      return false;
    default:
      return state;
  }
};
export default combineReducers(produce, { logs: logsReducer, loading, error });
// export default logsReducer;
