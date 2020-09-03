import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the logDetails state domain
 */

const selectLogDetailsDomain = state => state.logDetails || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by LogDetails
 */

const makeSelectLogDetails = () =>
  createSelector(
    selectLogDetailsDomain,
    substate => substate,
  );

export default makeSelectLogDetails;
export { selectLogDetailsDomain };
