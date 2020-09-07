/*
 * LogDetails Messages
 *
 * This contains all the text for the LogDetails container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.LogDetails';

export default defineMessages({
  printLog: {
    id: `${scope}.printLog`,
    defaultMessage: 'Print log',
  },
  sendLog: {
    id: `${scope}.sendLog`,
    defaultMessage: 'Send log',
  },
});
