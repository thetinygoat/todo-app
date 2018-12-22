import React from 'react';
import Controls from './Controls/Controls';
import './Todo.css';

const todo = (props) => {
    return (
        <div className="column notification is-link is-one-quarter is-flex todo">
            <p className="is-size-4">{props.task}</p>
            <Controls deleted={props.deleted} />
        </div>
    )
}

export default todo;