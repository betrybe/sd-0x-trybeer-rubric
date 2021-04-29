import React from 'react';
import PropTypes from 'prop-types';

function Button({ className, onClick, disabled, children }) {
  return (
    <button
      type="button"
      data-testid={ className }
      className={ className }
      onClick={ onClick }
      disabled={ disabled }
    >
      {children}
    </button>
  );
}

export default Button;

Button.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
