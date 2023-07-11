import React from 'react';
import PropTypes from 'prop-types';

export const Tarea = ({value}) => {

    const handleAdd = () => {
        console.log('+1')
    }

    return (
        <>
            <h1>Tarea</h1>
            <h2>{ value }</h2>
            <button onClick={ handleAdd }>+1</button>
        </>
    )
}

Tarea.propTypes = {
    value: PropTypes.number
}
