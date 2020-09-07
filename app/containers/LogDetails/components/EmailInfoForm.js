import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { Input, Button, Row, Col } from 'antd';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import messages from 'containers/common-messages';

const CustomRow = styled(Row)`
  margin-bottom: 1rem;
`;

const CustomForm = styled.form`
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const RenderField = ({ input, label, type }) => (
  <div>
    <label>{label}</label>
    <div>
      <Input {...input} placeholder={label} type={type} />
    </div>
  </div>
);

RenderField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
};

const EmailInfoForm = props => {
  const { handleSubmit, log, pristine } = props;
  return (
    <CustomForm onSubmit={handleSubmit}>
      {log.editValues.map(value => (
        <CustomRow key={value.name}>
          <Col xs={24} sm={24} md={10} lg={10} xl={10} xxl={10}>
            {value.name}
          </Col>
          <Col xs={24} sm={24} md={14} lg={14} xl={14} xxl={14}>
            <Field name={value.name} type="text" component={RenderField} />
          </Col>
        </CustomRow>
      ))}
      <Wrapper>
        <Button type="primary" htmlType="submit" disabled={pristine}>
          <FormattedMessage {...messages.update} />
        </Button>
      </Wrapper>
    </CustomForm>
  );
};

EmailInfoForm.propTypes = {
  log: PropTypes.shape({
    editValues: PropTypes.array,
  }),
  pristine: PropTypes.bool,
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'emailForm',
})(EmailInfoForm);
