import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const Tarea = ({ value }) => {

    const [ counter, setCounter ] = useState( value );

    const handleAdd = () => {
        setCounter(counter+1);
    }

    return (
        <> 
            <h1>Tarea</h1>
            <h2>{ counter }</h2>
            <button onClick={ handleAdd }>+1</button>
        </>
    )
}

Tarea.propTypes = {
    value: PropTypes.number
}
