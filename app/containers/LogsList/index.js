import React, { useEffect, memo, useState } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { List, Row, message, Col } from 'antd';
import styled from 'styled-components';
import { intlShape, injectIntl } from 'react-intl';
import Search from 'components/Search';

import reducer from './reducers';
import saga from './sagas';
import { useInjectReducer } from '../../utils/injectReducer';
import { useInjectSaga } from '../../utils/injectSaga';
import * as actions from './actions';
import LogItem from './components/log-item';
import {
  makeSelectLogs,
  makeSelectLoading,
  makeSelectError,
} from './selectors';
import FilterMenu from './components/filter-menu';
import messages from './messages';
import commonMessages from '../common-messages';
import { withRouter } from 'react-router-dom';

const key = 'logsList';

const CustomList = styled(List)`
  .ant-list-pagination {
    display: flex;
    justify-content: center;
    margin-bottom: 1.5rem;
  }

  .ant-pagination-item-link .anticon {
    vertical-align: text-top;
  }
`;

export function LogsList(props) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const { getLogs, logs, loading, intl, history } = props;
  // Used to replicate data present in redux because this demo does not use server for filtering
  // because of potential incompatible names in api queries
  const [internalLogs, setInternalLogs] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [filterInfo, setFilterInfo] = useState({
    printDetailsValue: intl.formatMessage(commonMessages.all),
    statusValue: intl.formatMessage(commonMessages.all),
    useSearchValue: false,
    lastUsedSearch: '',
  });

  const changePrinDetailsValue = printDetailsValue => {
    const { lastUsedSearch } = filterInfo;
    setFilterInfo({ ...filterInfo, printDetailsValue });
    setSearchValue(lastUsedSearch);
  };

  const changeStatusValue = statusValue => {
    const { lastUsedSearch } = filterInfo;
    setFilterInfo({ ...filterInfo, statusValue });
    setSearchValue(lastUsedSearch);
  };

  const changeSearchValue = event => setSearchValue(event.target.value);

  const [page, setPage] = useState(1);

  useEffect(() => {
    getLogs({});
  }, []);

  useEffect(() => {
    setInternalLogs(logs);
  }, [logs]);

  useEffect(() => filterList(), [filterInfo]);

  const search = () => {
    setFilterInfo({ ...filterInfo, lastUsedSearch: searchValue });
  };

  const filterList = () => {
    const filteredLogs = logs.filter(log => {
      const { printDetailsValue, statusValue } = filterInfo;

      const matchPrintDetails =
        printDetailsValue.toLowerCase() === 'all' ||
        printDetailsValue.toLowerCase() === log.printStatus.toLowerCase();

      const matchStatus =
        statusValue.toLowerCase() === 'all' ||
        statusValue.toLowerCase() === log.statusString.toLowerCase();

      let matchId = `${log.id}`.includes(searchValue);
      let matchTemplateName = log.templateName
        .toLowerCase()
        .includes(searchValue.toLowerCase());

      return matchPrintDetails && matchStatus && (matchId || matchTemplateName);
    });

    setInternalLogs(filteredLogs);
    setPage(1);
  };

  const onLogClick = log => () => {
    history.push(`/logs/${log.id}`);
  };

  const changePage = page => setPage(page);

  return (
    <div>
      <Row justify="space-between" type="flex">
        <Col xs={24} sm={15} md={12} lg={10}>
          <Search
            placeholder={intl.formatMessage(messages.searchLogsPlaceHolder)}
            value={searchValue}
            onChange={changeSearchValue}
            onPressEnter={search}
            onSearch={search}
          />
        </Col>
        <Col>
          <FilterMenu
            statusValue={filterInfo.statusValue}
            printDetailsValue={filterInfo.printDetailsValue}
            onChangePrintDetailsValue={changePrinDetailsValue}
            onChangeStatusValue={changeStatusValue}
          />
        </Col>
      </Row>
      <CustomList
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 3,
          lg: 3,
          xl: 3,
          xxl: 3,
        }}
        pagination={{
          pageSize: 12,
          showSizeChanger: false,
          hideOnSinglePage: true,
          current: page,
          onChange: changePage,
        }}
        dataSource={internalLogs}
        renderItem={log => (
          <LogItem
            log={log}
            onClick={log.isPrintable ? onLogClick(log) : null}
          />
        )}
        loading={loading}
      />
    </div>
  );
}

LogsList.propTypes = {
  getLogs: PropTypes.func.isRequired,
  logs: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  intl: intlShape,
  history: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  logs: makeSelectLogs(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(
  mapStateToProps,
  actions,
);

export default compose(
  withConnect,
  memo,
)(injectIntl(withRouter(LogsList)));
