import LogsList from 'containers/LogsList/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import LogDetails from '../containers/LogDetails/Loadable';

export default [
  {
    path: '/',
    component: LogsList,
    exact: true,
    key: 'home',
  },
  {
    path: '/logs',
    component: LogsList,
    exact: true,
    key: 'logs',
  },
  {
    path: '/logs/:id',
    component: LogDetails,
    exact: true,
    key: 'logDetails',
  },
  {
    path: '*',
    component: NotFoundPage,
    exact: false,
    key: 'notfound',
  },
];
