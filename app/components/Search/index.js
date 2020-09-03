import { Input } from 'antd';
import styled from 'styled-components';

const { Search } = Input;

const CustomSearch = styled(Search)`
  padding-bottom: 0;
  padding-top: 0;
  height: 2rem;
  margin-bottom: 0.5rem;
`;

export default CustomSearch;
