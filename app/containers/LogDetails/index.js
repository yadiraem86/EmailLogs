/**
 *
 * LogDetails
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import styled from 'styled-components';
import { Spin, Row, Col, Divider, message } from 'antd';
import { withRouter, Link } from 'react-router-dom';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {
  makeSelectLog,
  makeSelectLoading,
  makeSelectLogUpdated,
  makeSelectLogSent,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import * as actions from './actions';
import EmailInfo from './components/EmailInfo';
import EmailInfoForm from './components/EmailInfoForm';

const key = 'logDetails';

const LeftColum = styled(Col)`
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  border-right: 1px solid #f0f0f0;
  margin-bottom: 1.5rem;
`;

const RightColumn = styled(Col)`
  &.ant-col {
    display: flex;
    justify-content: flex-end;
    padding-right: 1.5rem;
    padding-left: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;
const CustomRow = styled(Row)`
  margin-bottom: 1.25rem;
`;
const Container = styled(Row)`
  margin-left: -1.5rem;
  margin-right: -1.5rem;
`;

const convertTreeAttributesToDot = (obj, currentKey, result) => {
  Object.keys(obj).forEach(iterKey => {
    const value = obj[iterKey];
    const newKey = currentKey ? `${currentKey}.${iterKey}` : iterKey;
    if (value && typeof value === 'object') {
      convertTreeAttributesToDot(value, newKey, result);
    } else {
      // eslint-disable-next-line no-param-reassign
      result[newKey] = value;
    }
  });
};

export function LogDetails(props) {
  const {
    match,
    getLog,
    setLog,
    log,
    loading,
    sendLog,
    updateLogAttributes,
    logSent,
    logUpdated,
    history,
  } = props;
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    getLog(match.params.id);
    return () => {
      setLog({});
    };
  }, []);

  useEffect(() => {
    if (logSent || logUpdated) {
      history.replace('/');
    }
  }, [logSent, logUpdated]);

  const getInitialValues = () =>
    log.editValues.reduce((accumulator, currentValue) => {
      const nameParts = currentValue.name.split('.');
      let modify = accumulator;
      nameParts.forEach((value, index, arr) => {
        if (!modify[value] && index !== arr.length - 1) {
          modify[value] = {};
          modify = modify[value];
        } else if (index === arr.length - 1) {
          modify[value] = currentValue.value;
        } else {
          modify = modify[value];
        }
      });
      return accumulator;
    }, {});

  const fromObjectTreeToDotNaming = obj => {
    const result = {};
    convertTreeAttributesToDot(obj, undefined, result);
    return result;
  };

  const submitForm = values => {
    const convertedToDotNamingFormValues = fromObjectTreeToDotNaming(values);
    const newEditableValues = log.editValues.map(editableValue => ({
      ...editableValue,
      value: convertedToDotNamingFormValues[editableValue.name],
      id: log.id,
    }));
    updateLogEditableValues(newEditableValues);
  };

  const sendCurrentLog = () => {
    sendLog(log.id);
  };
  const updateLogEditableValues = editableValues => {
    updateLogAttributes(editableValues);
  };

  const printCurrentLog = () => {
    message.info('Not implemented!');
  };
  return (
    <Spin spinning={loading}>
      <CustomRow>
        <Link to="/">Logs</Link>
        <Divider type="vertical" />
        {log.id}
      </CustomRow>
      <Container justify="space-between" type="flex">
        <LeftColum xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
          <EmailInfo
            log={log}
            onSendLog={sendCurrentLog}
            onPrintLog={printCurrentLog}
          />
        </LeftColum>
        <RightColumn xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
          {log.editValues && log.editValues.length > 0 && (
            <EmailInfoForm
              log={log}
              initialValues={getInitialValues()}
              onSubmit={submitForm}
            />
          )}
        </RightColumn>
      </Container>
    </Spin>
  );
}

LogDetails.propTypes = {
  getLog: PropTypes.func.isRequired,
  setLog: PropTypes.func.isRequired,
  sendLog: PropTypes.func.isRequired,
  updateLogAttributes: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.object,
    isExact: PropTypes.bool,
    path: PropTypes.string,
    url: PropTypes.string,
  }),
  history: PropTypes.object.isRequired,
  log: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  logUpdated: PropTypes.bool.isRequired,
  logSent: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  log: makeSelectLog(),
  loading: makeSelectLoading(),
  logUpdated: makeSelectLogUpdated(),
  logSent: makeSelectLogSent(),
});

const withConnect = connect(
  mapStateToProps,
  actions,
);

export default compose(withConnect)(withRouter(LogDetails));
