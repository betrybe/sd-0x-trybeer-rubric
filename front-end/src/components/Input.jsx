import React from 'react';
import PropTypes from 'prop-types';

function Input({ type, value, setValue, label }) {
  return (
    <label htmlFor={ type } className={ `${type}-label` }>
      {`${label}`}
      <input
        type={ type }
        name={ type }
        autoComplete={ `current-${type}` }
        className={ `${type}-input` }
        data-testid={ `${type}-input` }
        value={ value }
        onChange={ (e) => setValue(e.target.value) }
      />
    </label>
  );
}

export default Input;

Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};
