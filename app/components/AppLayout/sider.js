import React from 'react';
import { injectIntl, intlShape } from 'react-intl';
import PropTypes from 'prop-types';
import { Layout, Menu } from 'antd';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { MailOutlined } from '@ant-design/icons';

import logo from './logo.png';
import menuOptions from '../../config/menu';
import messages from './messages';

const { Sider } = Layout;

const CustomMenuItem = styled(Menu.Item)`
  &.ant-menu-item-selected {
    background-color: #ff7d1a !important;
  }
  &.ant-menu-item {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
  span {
    vertical-align: middle;
  }
`;

const LogoContainer = styled.div`
  height: 2rem;
  margin: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 2rem;
  margin-left: 0.4375rem;
`;

const AppName = styled.span`
  color: white;
  font-weight: 500;
  margin-left: 0.5rem;
`;

function getSelectedMenuKeys() {
  return menuOptions
    .filter(
      menuOption =>
        menuOption.activePaths.filter(activePath =>
          activePath.test(window.location.pathname),
        ).length > 0,
    )
    .map(menuOption => menuOption.key);
}

function SideMenu({ collapsed, intl, history }) {
  const selectedMenuKeys = getSelectedMenuKeys();
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <LogoContainer>
        <LogoImage src={logo} alt="" />
        {!collapsed && <AppName>Email Logs</AppName>}
      </LogoContainer>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={selectedMenuKeys}>
        {menuOptions.map(menuOption => (
          <CustomMenuItem
            key={menuOption.key}
            icon={<MailOutlined />}
            onClick={() => {
              history.push(menuOption.path);
            }}
          >
            {intl.formatMessage(messages[menuOption.label])}
          </CustomMenuItem>
        ))}
      </Menu>
    </Sider>
  );
}

SideMenu.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  intl: intlShape,
  history: PropTypes.object.isRequired,
};

export default injectIntl(withRouter(SideMenu));
