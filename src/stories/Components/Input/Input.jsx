import React from 'react';
import PropTypes from 'prop-types';
import './input.scss';

export const Input = ({
  disabled = false,
  label = 'Title',
  notice = 'Notice text',
  errorFilled = false,
  ...props
}) => {
  const disabledMode = disabled ? 'storybook-button--disabled' : '';
  return (
    <form className="storybook-input-form">
      {label && <label className="storybook-input-label">{label}</label>}
      <input
        type='text'
        disabled={disabled}
        placeholder='Title'
        className={[
          'storybook-input',
          disabledMode,
          errorFilled ? 'storybook-input--error' : '',
        ].join(' ')}
        {...props}


      />
      {notice && <span
        className={`storybook-input-notice ${errorFilled ? 'storybook-input-notice--error' : ''}`}
      >{notice}</span>}
    </form>
  );
};

Input.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string,
  notice: PropTypes.string,
  errorFilled: PropTypes.bool,
};
