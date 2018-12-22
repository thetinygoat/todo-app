import React from 'react';
import empty from './empty.png'
import './NoTodos.css'

const noTodos = () => {
    return (
        <div className="is-flex is-horizontal-center">
            <h2 className="is-size-4">Nothing to see here</h2>
            <figure className="image is-128x128">
                <img src={empty} alt="nothing to see here" />
            </figure>
        </div>
    )
}

export default noTodos;