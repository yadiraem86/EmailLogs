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
  successfullyUpdated: {
    id: `${scope}.successfullyUpdated`,
    defaultMessage: 'Log successfully updated',
  },
  successfullySent: {
    id: `${scope}.successfullySent`,
    defaultMessage: 'Log successfully sent',
  },
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Details of log {id}',
  },
});
