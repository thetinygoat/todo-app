import React from 'react';
import Controls from './Controls/Controls';

const todo = (props) => {
    return (
        <div>
            <h3>{props.task}</h3>
            <Controls deleted={props.deleted} />
        </div>
    )
}

export default todo;