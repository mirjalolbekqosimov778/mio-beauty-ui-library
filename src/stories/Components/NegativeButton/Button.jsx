import React from 'react';

import PropTypes from 'prop-types';

import './button.scss';

export const Button = ({
  primary = true,
  size = 'medium',
  tone = 'neutral',
  type = 'flled',
  disabled = false,
  label,
  ...props
}) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  const disabledMode = disabled ? 'storybook-button--disabled' : '';
  return (
    <button
      className={[
        'storybook-button',
        `storybook-button--${tone}`,
        `storybook-button--${type}`,
        `storybook-button--${size}`,
        mode, disabledMode
      ].join(' ')}
      {...props}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string,
  onClick: PropTypes.func,
  tone: PropTypes.oneOf(['neutral', 'negative', 'positive', 'accent']),
  type: PropTypes.oneOf(['flled', 'ghost']),
};
