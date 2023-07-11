import React from 'react';
import PropTypes from 'prop-types';

export const Tarea = ({value}) => {
  return (
    <>
        <h1>Tarea</h1>
        <h2>{value}</h2>
    </>
  )
}

Tarea.propTypes = {
    value: PropTypes.number
}
