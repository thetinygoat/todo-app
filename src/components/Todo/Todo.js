import React from 'react';
import Controls from './Controls/Controls';

const todo = (props) => {
    return (
        <div className="column notification is-warning is-one-quarter">
            <p className="is-size-3">{props.task}</p>
            <Controls deleted={props.deleted} />
        </div>
    )
}

export default todo;