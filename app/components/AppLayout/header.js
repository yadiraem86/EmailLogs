import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const { Header } = Layout;
const StyledHeader = styled(Header)`
  &.ant-layout-header {
    padding: 0;
    background: #fff;
    border-bottom: 1px solid #f0f0f0;
  }
  .trigger {
    margin-left: 1rem;
  }
`;

function CustomHeader({ collapsed, toggleCollapsed, ...rest }) {
  return (
    <StyledHeader {...rest}>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: toggleCollapsed,
      })}
    </StyledHeader>
  );
}
CustomHeader.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  toggleCollapsed: PropTypes.func.isRequired,
};

export default CustomHeader;
