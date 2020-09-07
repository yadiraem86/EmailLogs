import { defineMessages } from 'react-intl';

export const scope = 'app.commons';

export default defineMessages({
  all: {
    id: `${scope}.all`,
    defaultMessage: 'All',
  },
  apply: {
    id: `${scope}.apply`,
    defaultMessage: 'Apply',
  },
  status: {
    id: `${scope}.status`,
    defaultMessage: 'Status',
  },
  createdAt: {
    id: `${scope}.createdAt`,
    defaultMessage: 'Created at',
  },
  update: {
    id: `${scope}.update`,
    defaultMessage: 'Update',
  },
});
