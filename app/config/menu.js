import { UserOutlined } from '@ant-design/icons';

export default [
  {
    label: 'menuLogs',
    icon: UserOutlined,
    activePaths: [/^\/$/, /^\/logs/],
    key: 'logs',
    path: '/',
  },
];
