import React from 'react';

const controls = (props) => {
    return (
        <div>
            <button onClick={props.deleted} className="delete">Done</button>
        </div>
    )
}

export default controls;