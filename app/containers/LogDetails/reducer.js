/*
 *
 * LogDetails reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION } from './constants';

export const initialState = {
  loading: false,
};

/* eslint-disable default-case, no-param-reassign */
const logDetailsReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
    }
  });

export default logDetailsReducer;
