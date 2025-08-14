import React from 'react';

import PropTypes from 'prop-types';

import './button.scss';

export const Button = ({
  primary = true,
  size = 'medium',
  tone = 'neutral',
  type = 'flled',
  label,
  ...props
}) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      className={[
        'storybook-button',
        `storybook-button--${tone}`,
        `storybook-button--${type}`,
        `storybook-button--${size}`,
        mode
      ].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string,
  onClick: PropTypes.func,
  tone: PropTypes.oneOf(['negative', 'positive', 'neutral', 'accent', 'disabled']),
  type: PropTypes.oneOf(['flled', 'outlined', 'ghost']),
};
