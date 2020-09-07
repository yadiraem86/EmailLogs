import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the logDetails state domain
 */

const selectLogDetailsDomain = state => state.logDetails || initialState;

export const makeSelectLog = () =>
  createSelector(
    selectLogDetailsDomain,
    substate => substate.log,
  );

export const makeSelectLoading = () =>
  createSelector(
    selectLogDetailsDomain,
    substate => substate.loading,
  );

export const makeSelectLogUpdated = () =>
  createSelector(
    selectLogDetailsDomain,
    substate => substate.logUpdated,
  );

export const makeSelectLogSent = () =>
  createSelector(
    selectLogDetailsDomain,
    substate => substate.logSent,
  );
