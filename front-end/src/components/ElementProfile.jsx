import React from 'react';
import PropTypes from 'prop-types';

function ElementProfile({ value, text, data }) {
  return (
    <label htmlFor={ data } className={ `${data}-label` }>
      { text }
      <p
        className={ `profile-${data}-p` }
        data-testid={ `profile-${data}` }
      >
        { value }
      </p>
    </label>
  );
}

export default ElementProfile;

ElementProfile.propTypes = {
  value: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
};
