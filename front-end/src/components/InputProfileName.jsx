import React from 'react';
import PropTypes from 'prop-types';

function InputProfileName({ value, setValue }) {
  return (
    <label htmlFor="name" className="name-label">
      Nome
      <input
        type="name"
        name="name"
        autoComplete={ 'current-profile-name"' }
        className="profile-name-input"
        data-testid="profile-name-input"
        value={ value }
        onChange={ (e) => setValue(e.target.value) }
      />
    </label>
  );
}

export default InputProfileName;

InputProfileName.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};
