import React from 'react';
import { Popover, Button, Radio, Divider } from 'antd';
import { FilterFilled } from '@ant-design/icons';
import styled from 'styled-components';
import { injectIntl, intlShape } from 'react-intl';
import PropTypes from 'prop-types';

import commonMessages from 'containers/common-messages';
import logsListMessages from '../messages';

const FilterButton = styled(Button)`
  .anticon {
    vertical-align: text-top;
  }
`;

const CustomRadioGroup = styled(Radio.Group)`
  &.ant-radio-group {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
  }
`;

const FilterWrapper = styled(Popover)`
  margin-bottom: 0.5rem;
`;

const CustomDivider = styled(Divider)`
  &.ant-divider {
    margin: 0.375rem 0;
  }
`;

const Section = styled.div`
  margin-top: 0.5rem;
  font-weight: 500;
  color: #1312129e;
`;

const PrinterDetailsSection = styled(Section)`
  margin-top: 0;
`;

function FilterMenu(props) {
  const {
    intl,
    printDetailsValue,
    statusValue,
    onChangePrintDetailsValue,
    onChangeStatusValue,
  } = props;

  const changePrintDetails = event => {
    onChangePrintDetailsValue(event.target.value);
  };

  const changeStatus = event => {
    onChangeStatusValue(event.target.value);
  };

  const renderRadio = value => (
    <Radio value={intl.formatMessage(value.message)} key={value.id}>
      {intl.formatMessage(value.message)}
    </Radio>
  );

  const {
    printDetailsPrintable,
    printDetailsNotPrintable,
    printDetailsAtLeastOnce,
    statusCanBeSend,
    statusCanNotBeSend,
    statusSend,
  } = logsListMessages;

  const printableOptions = [
    { id: 1, message: commonMessages.all },
    { id: 2, message: printDetailsPrintable },
    { id: 3, message: printDetailsNotPrintable },
    { id: 4, message: printDetailsAtLeastOnce },
  ];

  const statusOptions = [
    { id: 1, message: commonMessages.all },
    { id: 2, message: printDetailsPrintable },
    { id: 3, message: statusCanBeSend },
    { id: 4, message: statusCanNotBeSend },
    { id: 5, message: statusSend },
  ];

  return (
    <FilterWrapper
      placement="bottomLeft"
      content={
        <div>
          <PrinterDetailsSection>
            {intl.formatMessage(logsListMessages.printDetailsTitle)}
          </PrinterDetailsSection>
          <CustomDivider />
          <CustomRadioGroup
            onChange={changePrintDetails}
            value={printDetailsValue}
          >
            {printableOptions.map(option => renderRadio(option))}
          </CustomRadioGroup>
          <Section>{intl.formatMessage(commonMessages.status)}</Section>
          <CustomDivider />
          <CustomRadioGroup onChange={changeStatus} value={statusValue}>
            {statusOptions.map(option => renderRadio(option))}
          </CustomRadioGroup>
        </div>
      }
      trigger="click"
    >
      <FilterButton type="primary" icon={<FilterFilled />} shape="circle" />
    </FilterWrapper>
  );
}

FilterMenu.propTypes = {
  intl: intlShape,
  printDetailsValue: PropTypes.string.isRequired,
  statusValue: PropTypes.string.isRequired,
  onChangePrintDetailsValue: PropTypes.func.isRequired,
  onChangeStatusValue: PropTypes.func.isRequired,
};

export default injectIntl(FilterMenu);
