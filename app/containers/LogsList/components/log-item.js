import React from 'react';
import { List, Card, Tooltip, Tag } from 'antd';
import { MailOutlined, PrinterOutlined, SendOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';
import moment from 'moment';

import commonMessages from 'containers/common-messages';
import { injectIntl, intlShape } from 'react-intl';

const { Meta } = Card;

const CustomCard = styled(Card)`
  .ant-card-head {
    display: flex;
    padding: 0 0.75rem;
    min-height: 2rem;
  }
  .ant-card-head-title {
    padding: 0;
  }
  .ant-card-head-title > span {
    vertical-align: super;
  }
  .ant-card-body {
    padding: 0.75rem;
  }
  &.ant-card-printable {
    cursor: pointer;
  }
  .ant-card-meta-detail > div:not(:last-child) {
    margin-bottom: 2px;
  }
`;

const StyledSpan = styled.span`
  vertical-align: middle;
`;

const CustomTag = styled(Tag)`
  &.ant-tag {
    margin-bottom: 4px;
    display: inline-flex;
    justify-content: space-around;
    align-items: center;
  }
`;

const TagsContainer = styled.div`
  margin-top: 0.25rem;
`;

function LogItem(props) {
  const { log, intl, ...rest } = props;

  const getIcon = () => {
    if (log.status === 5) {
      return <PrinterOutlined />;
    }
    return <SendOutlined />;
  };

  const getColor = () => {
    if (log.status === 2 || log.status === 3) {
      return 'success';
    }
    if (log.status === 5) {
      return 'default';
    }
    return 'error';
  };

  return (
    <List.Item {...rest}>
      <CustomCard
        title={
          <span>
            <MailOutlined /> <StyledSpan>{log.id}</StyledSpan>
          </span>
        }
        className={classnames({ 'ant-card-printable': log.isPrintable })}
      >
        <Meta
          title={
            <Tooltip title={log.templateName} placement="top">
              {log.templateName}
            </Tooltip>
          }
          description={
            <>
              <span>
                {intl.formatMessage(commonMessages.createdAt)}:&nbsp;
                {moment(log.created)
                  .local()
                  .format('YYYY-MM-DD HH:mm')}
              </span>
              <TagsContainer>
                <CustomTag color={getColor()} icon={getIcon()}>
                  {log.statusString}
                </CustomTag>
                {log.statusString !== log.printStatus && (
                  <CustomTag color={getColor()} icon={<PrinterOutlined />}>
                    {log.printStatus}
                  </CustomTag>
                )}
              </TagsContainer>
            </>
          }
        />
      </CustomCard>
    </List.Item>
  );
}

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  intl: intlShape,
};

export default injectIntl(LogItem);
