/* eslint-disable react/no-danger */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button, Row, Col, Tooltip } from 'antd';
import { PrinterOutlined, SendOutlined } from '@ant-design/icons';
import { injectIntl, intlShape } from 'react-intl';

import messages from '../messages';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Subject = styled(Row)`
  margin-bottom: 0.75rem;
`;

const CustomButton = styled(Button)`
  .anticon {
    vertical-align: text-top;
  }
  margin-left: 0.25rem;
  width: 1.75rem;
  height: 1.75rem;
`;

const CustomCol = styled(Col)`
  &.ant-col {
    display: flex;
    justify-content: flex-end;
  }
`;

function EmailInfo({ log, intl, onSendLog, onPrintLog }) {
  const sendLog = () => {
    if (onSendLog) {
      onSendLog(log);
    }
  };

  const printLog = () => {
    if (onPrintLog) {
      onPrintLog(log);
    }
  };

  const getSendPrintContainerWidth = () => {
    let size = 0;
    size = log.canBeSent ? size + 3 : size;
    size = log.isPrintable ? size + 3 : size;

    return size;
  };

  const canBeSendOrPrintable = log.canBeSent || log.isPrintable;

  return (
    <Wrapper>
      <Subject>
        <Col span={24 - getSendPrintContainerWidth()}>
          <b>{log.subject}</b>
        </Col>
        {canBeSendOrPrintable && (
          <CustomCol span={getSendPrintContainerWidth()}>
            {log.isPrintable && (
              <Tooltip title={intl.formatMessage(messages.printLog)}>
                <CustomButton
                  type="primary"
                  shape="circle"
                  icon={<PrinterOutlined />}
                  onClick={printLog}
                />
              </Tooltip>
            )}
            {log.canBeSent && (
              <Tooltip title={intl.formatMessage(messages.sendLog)}>
                <CustomButton
                  type="primary"
                  shape="circle"
                  icon={<SendOutlined />}
                  onClick={sendLog}
                />
              </Tooltip>
            )}
          </CustomCol>
        )}
      </Subject>
      <div dangerouslySetInnerHTML={{ __html: log.body }} />
    </Wrapper>
  );
}

EmailInfo.propTypes = {
  log: PropTypes.object.isRequired,
  intl: intlShape,
  onSendLog: PropTypes.func,
  onPrintLog: PropTypes.func,
};

export default injectIntl(EmailInfo);
