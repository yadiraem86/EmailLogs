/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.LogsList';

export default defineMessages({
  printDetailsTitle: {
    id: `${scope}.components.filterMenu.printDetailsTitle`,
    defaultMessage: 'Print Details',
  },
  printDetailsPrintable: {
    id: `${scope}.components.filterMenu.printDetailsPrintable`,
    defaultMessage: 'Printable',
  },
  printDetailsNotPrintable: {
    id: `${scope}.components.filterMenu.printDetailsNotPrintable`,
    defaultMessage: 'Not Printable',
  },
  printDetailsAtLeastOnce: {
    id: `${scope}.components.filterMenu.printDetailsAtLeastOnce`,
    defaultMessage: 'Printed At Least Once',
  },
  statusCanBeSend: {
    id: `${scope}.components.filterMenu.statusCanBeSend`,
    defaultMessage: 'Can Be Sent',
  },
  statusCanNotBeSend: {
    id: `${scope}.components.filterMenu.statusCanNotBeSend`,
    defaultMessage: 'Can Not Be Sent',
  },
  statusSend: {
    id: `${scope}.components.filterMenu.statusSend`,
    defaultMessage: 'Sent',
  },
  searchLogsPlaceHolder: {
    id: `${scope}.searchLogsPlaceHolder`,
    defaultMessage: 'Search logs by id or template name',
  },
  successfullyUpdated: {
    id: `${scope}.successfullyUpdated`,
    defaultMessage: 'Log successfully updated',
  },
  successfullySent: {
    id: `${scope}.successfullySent`,
    defaultMessage: 'Log successfully sent',
  },
});
