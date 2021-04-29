import React from 'react';
import PropTypes from 'prop-types';

function InputProfileEmail({ value }) {
  return (
    <label htmlFor="email" className="email-label">
      Email
      <input
        type="email"
        name="email"
        autoComplete={ 'current-profile-email"' }
        className="profile-email-input"
        data-testid="profile-email-input"
        defaultValue={ value }
        readOnly
      />
    </label>
  );
}

export default InputProfileEmail;

InputProfileEmail.propTypes = {
  value: PropTypes.string.isRequired,
};
