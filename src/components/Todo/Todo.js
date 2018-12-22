import React from 'react';
import Controls from './Controls/Controls';

const todo = (props) => {
    return (
        <div>
            <h3>{props.task}</h3>
            <Controls type="delete" />
            <Controls type="done" />
        </div>
    )
}

export default todo;