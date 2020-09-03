import { createSelector } from 'reselect';
import { initialState } from './reducers';

const selectLogs = state => state.logsList || initialState;

const makeSelectLoading = () =>
  createSelector(
    selectLogs,
    state => state.loading,
  );

const makeSelectLogs = () =>
  createSelector(
    selectLogs,
    state => state.logs,
  );

const makeSelectError = () =>
  createSelector(
    selectLogs,
    state => state.error,
  );

export { makeSelectLoading, makeSelectLogs, makeSelectError };
