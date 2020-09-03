import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import styled from 'styled-components';

import SideMenu from './sider';
import AppHeader from './header';
import AppContent from './content';

const CustomLayout = styled(Layout)`
  &.ant-layout {
    background: white;
  }
`;

function AppLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <CustomLayout>
      <SideMenu collapsed={collapsed} />
      <CustomLayout>
        <AppHeader collapsed={collapsed} toggleCollapsed={toggle} />
        <AppContent>{children}</AppContent>
      </CustomLayout>
    </CustomLayout>
  );
}

AppLayout.propTypes = {
  children: PropTypes.node,
};

export default AppLayout;
