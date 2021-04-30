import React from 'react';
import PropTypes from 'prop-types';

function InputRegister({ name, value, setValue, checked, label, type = 'text' }) {
  return (
    <label htmlFor={ name } className={ `${name}-label` }>
      {`${label}`}
      <input
        type={ type }
        name={ name }
        className={ `signup-${name}` }
        data-testid={ `signup-${name}` }
        value={ type !== 'checkbox' ? value : '' }
        checked={ type === 'checkbox' ? checked : false }
        onChange={ (e) => (type !== 'checkbox'
          ? setValue(e.target.value) : setValue(e.target.checked)) }
      />
    </label>
  );
}

export default InputRegister;

InputRegister.defaultProps = {
  type: '',
  value: '',
  checked: false,

};

InputRegister.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  checked: PropTypes.bool,
  setValue: PropTypes.func.isRequired,
  type: PropTypes.string,
};
