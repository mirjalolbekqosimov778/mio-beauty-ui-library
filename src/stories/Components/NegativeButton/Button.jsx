import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';
import { Icon } from './../Icons/index'

export const Button = ({
  primary = true,
  size = 'medium',
  tone = 'neutral',
  type = 'flled',
  leftIcon = true,
  rightIcon = true,
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
      {leftIcon && <Icon color='white' fill='black' name='ic_info_outlined' className="input-icon" />}

      {label}

      {rightIcon && <Icon color='white' fill='black' name='ic_arrow_down' className="input-icon" />}

    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['extra-small', 'small', 'medium', 'large']),
  label: PropTypes.string,

  leftIcon: PropTypes.bool,
  rightIcon: PropTypes.bool,

  onClick: PropTypes.func,
  tone: PropTypes.oneOf(['neutral', 'negative', 'positive', 'accent']),
  type: PropTypes.oneOf(['flled', 'ghost']),
};
