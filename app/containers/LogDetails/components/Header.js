import { PageHeader } from 'antd';
import styled from 'styled-components';

const CustomPageHeader = styled(PageHeader)`
  &.ant-page-header {
    padding-left: 0;
    padding-top: 0;
  }
  .ant-page-header-heading-title {
    font-weight: 400;
    font-size: 1.125rem;
  }
`;
export default CustomPageHeader;
