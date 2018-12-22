import React from 'react';
import empty from './empty.png'

const noTodos = () => {
    return (
        <div>
            <h2>Nothing to see here</h2>
            <img src={empty} alt="nothing to see here" />
        </div>
    )
}

export default noTodos;